import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Title,
  Options,
  Option,
  OptionTitle,
  OptionDescription,
} from './styles';

const LevelForm: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Como você considera seu nível de atividade física?</Title>

      <Options>
        <Option onPress={() => navigate('Recipes', { level: 'low' })} style={{ backgroundColor: '#739E82' }}>
          <Feather name="coffee" size={68} color="#fafafa" />
          <View style={{ marginLeft: 12 }}>
            <OptionTitle>Baixo</OptionTitle>
            <OptionDescription>Pratico esportes no máximo {`\n`}uma vez por semana</OptionDescription>
          </View>
        </Option>

        <Option onPress={() => navigate('Recipes', { level: 'mid' })} style={{ backgroundColor: '#348952' }}>
          <Feather name="sun" size={68} color="#fafafa" />
          <View style={{ marginLeft: 12 }}>
            <OptionTitle>Moderado</OptionTitle>
            <OptionDescription>Pratico esportes até 3 vezes {`\n`}por semana</OptionDescription>
          </View>
        </Option>

        <Option onPress={() => navigate('Recipes', { level: 'high' })} style={{ backgroundColor: '#2C5530' }}>
          <Feather name="star" size={68} color="#fafafa" />
          <View style={{ marginLeft: 12 }}>
            <OptionTitle>Alto</OptionTitle>
            <OptionDescription>Pratico esportes no mínimo 4{`\n`}vezes por semana</OptionDescription>
          </View>
        </Option>
      </Options>
    </Container>
  );
}

export default LevelForm;