import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { api } from '../client/api';
import { useAuth } from './auth';
import { IPostData } from '../dtos/IPostData';


interface PostContextData {
  posts: IPostData[];
  setPosts(post: IPostData[]): void;
  setPost(post: IPostData): void;
  isLoading: boolean;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

export const PostProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<IPostData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { token, user } = useAuth();
  
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
  }, [token, user]);

  const setPost = useCallback((post: IPostData) => {
    posts.unshift(post);
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, isLoading, setPost, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export function usePosts(): PostContextData {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePosts must be used within an PostProvider');
  }

  return context;
}