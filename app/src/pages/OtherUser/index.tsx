import React, { useEffect, useState,useCallback } from 'react';
import { FlatList, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImage from '../../assets/invertedLogo.png';

import { useAuth } from '../../hooks/auth';
import { api } from '../../client/api';
import { IUserDTO } from '../../dtos/IUserDTO';
import { IPostData } from '../../dtos/IPostData';

import Post from '../../components/Post';

import { 
  Container,
  Header,
  ProfilePhoto,
  Username,
  Content,
  Bio,
  EditProfileButton,
  WhatsApp,
  WhatsAppButton
} from './styles';


const OtherUser = ({ route }) => {
  const { user_id } = route.params;
  const { token } = useAuth();

  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);
  const [posts, setPosts] = useState<IPostData[]>([]);

  useEffect(() => {
    async function getUserInfo(): Promise<void> {
      const { data } = await api.get(`user/${user_id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      const userData: IUserDTO = data.data;

      if (userData.id) {
        setUser(userData);
      }

      const { data: userPosts } = await api.get(`user/${user_id}/post`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (userPosts.data.length && typeof userPosts.data !== 'string') {
        setPosts(userPosts.data);
      }
    }

    getUserInfo();
  }, [token, user_id]);

  const handleLike = useCallback(async (id_post: string) => {
    const foundPost = posts.find(post => post.id_post === id_post);

    if (!foundPost) {
      return;
    }

    const newPosts = posts.map(post => {
      if (post.id_post === id_post) {
        return {
          ...post,
          has_liked: !post.has_liked,
        }
      }

      return post;
    })

    setPosts([...newPosts]);

    try {
      if (!foundPost.has_liked) {
        await api.post('post/like', { post_id: foundPost.id_post }, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      } else {
        await api.delete(`post/like?id=${foundPost.id_post}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      }
    } catch (err) {
      console.log(err);
      const fixedPosts = newPosts.map(post => {
        if (post.id_post === id_post) {
          return {
            ...post,
            has_liked: !post.has_liked,
          }
        }
  
        return post;
      })
  
      setPosts([...fixedPosts]);
    }

  }, [posts, token]);

  const openWhatsapp = useCallback(async () => {
    const canOpen = await Linking.canOpenURL('whatsapp://send?text=oi');

    if (canOpen) {
      return Linking.openURL(
        `whatsapp://send?phone=55${user.numero_whatsapp}&text=Oi`
      );
    } else {
      return Linking.openURL(
        `https://api.whatsapp.com/send=55${user.numero_whatsapp}&text=Oi`
      );
    }
  }, [user]);

  return (
    <Container>
      <Header />
      <Content>
        <ProfilePhoto 
          source={user.link_foto_perfil 
            ? { uri: user.link_foto_perfil }
            : logoImage
          } 
        />
        <Username>{user.nome}</Username>
        {user.biografia && <Bio>{user.biografia}</Bio>}

        {user.numero_whatsapp && (
          <WhatsAppButton onPress={openWhatsapp}>
            <Feather name="send" color="#fafafa" size={20} />
            <WhatsApp>Conhecer</WhatsApp>
          </WhatsAppButton>
        )}

        {posts.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            keyExtractor={(item) => item.id_post}
            renderItem={({ item }) => (
              <Post
                handleLike={handleLike}
                {...item}
              />
            )}
          />
        )}
      </Content>
    </Container>
  );
}

export default OtherUser;