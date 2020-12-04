import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, RefreshControl, ToastAndroid, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../client/api';
import { useAuth } from '../../hooks/auth';
import { usePosts } from '../../hooks/posts';
import { IPostData } from '../../dtos/IPostData';

import AppHeader from '../../components/AppHeader';
import Post from '../../components/Post';

import { Container, Content, PostButton } from './styles';

const Feed: React.FC = () => {
  const { token } = useAuth();
  const { isLoading, posts, setPosts } = usePosts();
  const { navigate } = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    try {
      const { data } = await api.get('post', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (data.data.length < 0) {
        throw new Error('Erro ao carregar posts');
      }

      const newPosts: IPostData[] = data.data;
      const newPostsLastItem = newPosts[newPosts.length - 1];
      
      const oldPostsLastItem = posts[posts.length - 1];
      
      if (newPostsLastItem.id_post !== oldPostsLastItem.id_post) {
        setPosts(newPosts.reverse());
      }

      setRefreshing(false);
    } catch (err) {
      ToastAndroid.show(err.message, ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [token, posts]);

  const handleLike = useCallback(async (id_post) => {
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

  return (
    <Container>
      <AppHeader />
      <Content>
        {!isLoading ? posts.length > 0 ? (
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
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        ) : (
          <Text>Nenhum post encontrado</Text>
        ) : (
          <ActivityIndicator color="#348952" size={48} />
        )}

        <PostButton style={{ elevation: 3 }} onPress={() => navigate('CreatePost')}>
          <Feather name="edit" size={24} color="#fafafa" />
        </PostButton>
      </Content>
    </Container>
  )
}

export default Feed;