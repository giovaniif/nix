import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png';

import { 
  Container,
  Content,
  Header,
  PostImage,
  PostText,
  UserName,
  UserPhoto,
  Actions,
  LikeButton,
} from './styles';
interface IPostData {
  conteudo_post: string;
  has_liked: boolean;
  id_post: string;
  foto_post?: string;
  foto_autor?: string;
  id_usuario: string;
  nome_autor: string;
  handleLike(id_post: string): void;
}

const Post: React.FC<IPostData> = ({ children, handleLike, ...props }) => {
  const { 
    foto_autor, nome_autor, conteudo_post, foto_post, id_usuario, has_liked, id_post
  } = props;
  
  const { user } = useAuth();

  return (
    <Container style={{ elevation: 2 }}>
      <Header>
        <UserPhoto source={foto_autor ? { uri: foto_autor } : logo} />
        <UserName>{nome_autor}</UserName>
      </Header>

      <Content>
        <PostText>{conteudo_post}</PostText>
        {foto_post && <PostImage source={{ uri: foto_post }} />}
      </Content>

      {user.id !== id_usuario && (
        <Actions>
          <LikeButton onPress={() => handleLike(id_post)}>
            {has_liked ? (
              <MaterialIcons name="favorite" size={30} color="#348952" />
            ) : (
              <MaterialIcons name="favorite-border" size={30} color="#d4d4d4" />
            )}
            
          </LikeButton>
        </Actions>
      )}
    </Container>
  );
}

export default Post;