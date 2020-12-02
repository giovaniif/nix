import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

interface IHeaderProps {
  onPress(): void;
}

const Header: React.FC<IHeaderProps> = ({ onPress }) => {
  return (
    <Container>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
        onPress={onPress}
      >
        <MaterialIcons name="keyboard-backspace" size={30} color="#fafafa" />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
