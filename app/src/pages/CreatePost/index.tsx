import React, { useState, useCallback } from 'react';
import { ToastAndroid } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { usePosts } from '../../hooks/posts';
import { api } from '../../client/api';

import logoImage from '../../assets/logo.png';

import { 
  Container,
  Header,
  ProfileImage,
  Actions,
  AttachButton,
  ConfirmButton,
  ConfirmButtonText,
  Content,
  Input,
  PostImageContainer,
  PostImage,
  RemoveImageButton,
} from './styles';

const CreatePost: React.FC = () => {
  const { user, token } = useAuth();
  const { setPost } = usePosts();
  const { navigate } = useNavigation();

  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const pickImage = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    
    if (status !== 'granted') {
      return ToastAndroid.show(
        'Precisamos de sua permissão',
        ToastAndroid.BOTTOM
      );
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: false,
      base64: true
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }, []);

  const createPost = useCallback(async () => {
    try {
      const formData: any = new FormData();
      formData.append('conteudo_post', text);
      formData.append('file', {
        uri: image,
        name: `${new Date()}0102`,
        type: 'image/jpg',
      });
      

      const { data } = await api.post('post', formData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      setPost({
        conteudo_post: text,
        has_liked: false,
        id_post: `${new Date()}-1`,
        id_usuario: user.id,
        nome_autor: user.nome,
        foto_post: image || '',
        foto_autor: user.link_foto_perfil || '',
      });

      navigate('Feed');
    } catch (err) {
      console.log('An error occurer');
      console.log(err);
    }
  }, [navigate, token, setPost, image, text, user]);

  return (
    <Container>
      <Header>
        <ProfileImage source={user.link_foto_perfil ? { uri: user.link_foto_perfil } : logoImage} />
        
        <Actions>
          <AttachButton onPress={pickImage}>
            <Feather name="paperclip" size={24} color="#444" />
          </AttachButton>

          <ConfirmButton disabled={text.length <= 0 || !image} onPress={createPost}>
            <ConfirmButtonText>Enviar</ConfirmButtonText>
          </ConfirmButton>
        </Actions>
      </Header>
      <Content>
        <Input value={text} onChangeText={setText} maxLength={140} />

        {!!image && (
          <PostImageContainer>
            <PostImage source={{ uri: image }} />
            <RemoveImageButton onPress={() => setImage('')}>
              <Feather name="x" size={20} color="#fafafa" />
            </RemoveImageButton>
          </PostImageContainer>
        )}
      </Content>
    </Container>
  )
}

export default CreatePost;