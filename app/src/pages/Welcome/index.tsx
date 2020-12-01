import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import Button from '../../components/Button';

import logoImage from '../../assets/logo.png';

import { 
  Container, 
  ContentContainer,
  ButtonsContainer,
  Logo,
  SubTitle,
  Title,
  Link,
  LinkText
} from './styles';

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();
  const [hasEndedAnimation, setHasEndedAnimation] = useState(false);

  return (
    <Container>
      <ContentContainer>
        <Animatable.View 
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 184,
          }}
          animation="fadeInUp"
          duration={600}
          onAnimationEnd={() => setHasEndedAnimation(true)}
        >
          <Logo source={logoImage} />
          <Title>Nix</Title>
          <SubTitle>Socialize e{'\n'}conscientize</SubTitle>
        </Animatable.View>
      </ContentContainer>

      <ButtonsContainer>
        {hasEndedAnimation && (
          <Animatable.View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            animation="fadeIn"
            duration={600}
          >
          <Button title="Crie sua conta gratuita" onPress={() => navigate('SignUp')} />
          <Link onPress={() => navigate('SignIn')}>
            <LinkText>Ou faça login</LinkText>
          </Link>
          </Animatable.View>
        )}
      </ButtonsContainer>
    </Container>
  )
}

export default Welcome;