import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Image, Content, Title, NavigateButton, NavigateButtonText } from './styles';

interface IRecipes {
  name: string;
  image: string;
  carbs: string;
  fats: string;
  proteins: string;
  calories: string;
  portion: string;
  steps_to_prepare: string;
}

const Recipe: React.FC<IRecipes> = ({ image, name, steps_to_prepare }) => {
  const { navigate } = useNavigation();
  
  return (
    <Container style={{ elevation: 2 }}>
      <Image source={{ uri: image }} />
      <Content>
        <Title>{name}</Title>
        <NavigateButton onPress={() => navigate('PrepareMode', { url: steps_to_prepare })}>
          <NavigateButtonText>Modo de Preparo</NavigateButtonText>
        </NavigateButton>
      </Content>
    </Container>
  )
}

export default Recipe;