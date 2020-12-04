import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

import { Container, Label, Title, Button, ButtonText, Input, CheckBoxLabel } from './styles';

const RecipeForm: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const { navigate } = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Title>Antes de começarmos, precisamos reunir alguns dados</Title>
        
        <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          <Label>Qual seu gênero?</Label>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox />
              <CheckBoxLabel>Masculino</CheckBoxLabel> 
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox />
              <CheckBoxLabel>Feminino</CheckBoxLabel> 
            </View>
          </View>

          <Label>Qual sua altura?</Label>
          <Input value={height} onChangeText={setHeight} keyboardType="number-pad" />

          <Label>Qual seu peso?</Label>
          <Input value={weight} onChangeText={setWeight} keyboardType="number-pad" />
        </ScrollView>
      </View>

      <Button onPress={() => navigate('LevelForm')}>
        <ButtonText>Próximo</ButtonText>
      </Button>
    </Container>
  );
}

export default RecipeForm;