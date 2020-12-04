import React, { useCallback, useState } from 'react';
import { View, ToastAndroid, Image, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { api } from '../../client/api';
import { IUserDTO } from '../../dtos/IUserDTO';

import { 
  Container,
  Title,
  Label,
  Input,
  PhotoContainer,
  SaveButton,
  SaveText,
} from './styles';

const EditProfileInfo: React.FC = () => {
  const { user, token, signOut, setUser } = useAuth();
  const { navigate } = useNavigation();

  const [whatsapp, setWhatsapp] = useState(user.numero_whatsapp);
  const [bio, setBio] = useState(user.biografia);
  const [image, setImage] = useState<any>({ uri: user.link_foto_perfil});

  const formatWhatsapp = useCallback((text: string) => {
    let value = text;
    
    value = value
    .replace(/\D/g, '')
    .replace(/(\d{2})/, '($1) ')

    setWhatsapp(value);
  }, []);

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
      setImage({ uri: result.uri });

      try {
        const formData: any = new FormData();
        formData.append('file', {
          uri: result.uri,
          name: `${new Date()}0102`,
          type: 'image/jpg',
        });

        await api.post(`user/profile-image`, formData, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });

        const { data } = await api.get<IUserDTO>('user', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        setUser(data);
      } catch (err) {
        ToastAndroid.show('Erro ao atualizar imagem', ToastAndroid.BOTTOM);
      }
    }
  }, [token, setUser]);

  const handleUpdateInfo = useCallback(async () => {
    const userCopy = user;
    Keyboard.dismiss();

    if (bio !== user.biografia) {
      await api.put(`user/bio?biografia=${bio}`, {}, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      userCopy.biografia = bio;
    }

    const formatedWhatsapp = whatsapp?.replace(/[()\s]/g, '');
    if (formatedWhatsapp !== user.numero_whatsapp) {
      await api.put(`user/whatsapp?numero=${formatedWhatsapp}`, {}, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      userCopy.numero_whatsapp = formatedWhatsapp;
    }

    setUser(userCopy);
    navigate('Profile');
  }, [token, bio, whatsapp, user, navigate, setUser]);

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
          <Feather name="user" size={36} color="#333" />
          <Title>Editar perfil</Title>
        </View>

        <Label>Whatsapp</Label>
        <Input 
          placeholder="Adicione seu número de whatsapp" 
          value={whatsapp}
          onChangeText={formatWhatsapp}
          keyboardType="number-pad"
          maxLength={14}
        />

        <Label style={{ marginTop: 14 }}>Biografia</Label>
        <Input 
          placeholder="Um pouco sobre você" 
          value={bio}
          onChangeText={setBio}
          maxLength={90}
          multiline={true}
          textAlignVertical="top"
        />

        <Label style={{ marginTop: 14 }}>Foto de perfil</Label>
        <PhotoContainer onPress={pickImage}>
          {image.uri ? (
            <Image 
              style={{ height: 128, width: 128, borderRadius: 4 }} 
              source={image} 
            /> 
          ) : <Feather name="upload" size={36} color="#ccc" />}
          
        </PhotoContainer>
      </View>

      <SaveButton onPress={handleUpdateInfo}>
        <Feather name="save" size={36} color="#fafafa" />
        <SaveText>Salvar</SaveText>
      </SaveButton>
    </Container>
  );
}

export default EditProfileInfo;