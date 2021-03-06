import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { api } from '../../client/api';
import { IPostData } from '../../dtos/IPostData';

import Post from '../../components/Post';

import logoImage from '../../assets/invertedLogo.png';

import { 
  Container,
  Header,
  ProfilePhoto,
  Username,
  Content,
  Bio,
  EditProfileButton,
  WhatsApp,
} from './styles';


const Profile: React.FC = () => {
  const { user, token } = useAuth();
  const { navigate } = useNavigation();

  const [posts, setPosts] = useState<IPostData[]>([]);

  useEffect(() => {
    async function getUserInfo(): Promise<void> {
      const { data: userPosts } = await api.get(`user/${user.id}/post`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (userPosts.data.length && typeof userPosts.data !== 'string') {
        setPosts(userPosts.data);
      }
    }

    getUserInfo();
  }, [token, user]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#2C5530" />
      <Header>
        <EditProfileButton onPress={() => navigate('EditProfileInfo')}>
          <Feather name="edit-2" color="#fafafa" size={20} />
        </EditProfileButton>
      </Header>
      <Content>
        <View style={{ paddingHorizontal: 24 }}>
          <ProfilePhoto 
            source={user.link_foto_perfil 
              ? { uri: user.link_foto_perfil }
              : logoImage
            } 
          />
          <Username>{user.nome}</Username>
          {user.numero_whatsapp && (
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5 name="comments" color="#348952" size={20} />
              <WhatsApp>{user.numero_whatsapp}</WhatsApp>
            </View>
          )}
          {user.biografia && <Bio>{user.biografia}</Bio>}
        </View>

        {posts.length > 0 && (
          <>
            <Username style={{ marginTop: 24, fontFamily: 'Poppins_500Medium', marginLeft: 24 }}>Posts</Username>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={posts}
              keyExtractor={(item) => item.id_post}
              renderItem={({ item }) => (
                <Post
                  shouldNavigateOnHeaderClick={false}
                  {...item}
                />
              )}
            />
          </>
        )}
      </Content>
    </Container>
  );
}

export default Profile;