import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, RefreshControl, ToastAndroid, ActivityIndicator } from 'react-native';

import { api } from '../../client/api';
import { useAuth } from '../../hooks/auth';

import AppHeader from '../../components/AppHeader';

import { Container, Content } from './styles';

interface IPostData {
  conteudo_post: string;
  has_liked: boolean;
  id_post: string;
}

const Feed: React.FC = () => {
  const { token } = useAuth();

  const [posts, setPosts] = useState<IPostData[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true);

        const { data } = await api.get('post', {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (data.data.length) {
          setPosts(data.data.reverse());
        }

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }

    loadPosts();
  }, [token]);

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

  return (
    <Container>
      <AppHeader />
      <Content>
        {!isLoading ? posts.length > 0 ? (
          <FlatList 
            data={posts}
            keyExtractor={(item) => item.id_post}
            renderItem={({ item }) => <Text>{item.conteudo_post}</Text>}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        ) : (
          <Text>Nenhum post encontrado</Text>
        ) : (
          <ActivityIndicator color="#348952" size={48} />
        )}
      </Content>
    </Container>
  )
}

export default Feed;