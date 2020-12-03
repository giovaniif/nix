import React from 'react';
import { View } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

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
  const { user } = useAuth();
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header>
        <EditProfileButton onPress={() => navigate('EditProfileInfo')}>
          <Feather name="edit-2" color="#fafafa" size={20} />
        </EditProfileButton>
      </Header>
      <Content>
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
      </Content>
    </Container>
  );
}

export default Profile;