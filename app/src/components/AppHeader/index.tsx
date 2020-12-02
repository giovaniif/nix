import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import logoImage from '../../assets/invertedLogo.png';

import { Container, Title } from './styles';

const AppHeader: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#fafafa" style="dark" />
      <Container style={{ elevation: 5 }}>
        <Image source={logoImage} style={{ height: 42, width: 42 }} />
        <Title>Nix</Title>
      </Container>
    </>
  )
}

export default AppHeader;