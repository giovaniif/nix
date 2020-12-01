import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, ButtonText } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<IButtonProps> = ({ onPress, title }) => {
  return (
    <Container onPress={onPress}>
      <LinearGradient 
        style={{ 
          width: '100%',
          height: 52,
          justifyContent: 'center', 
          alignItems: 'center',
          borderRadius: 26
        }}
        colors={['#2C5537', '#348952']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ButtonText>{title}</ButtonText>
      </LinearGradient>
    </Container>
  )
}

export default Button;