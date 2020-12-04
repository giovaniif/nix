import styled from 'styled-components/native';
import Constants from 'expo-constants';

const paddingTop = Constants.statusBarHeight + 24;

export const Container = styled.View`
  padding: ${paddingTop}px 24px 12px;

  flex: 1;
  background-color: #fafafa;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-family: 'Poppins_500Medium';
  color: #131813;
`;

export const Label = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular';
  color: #131813;

  margin-bottom: 6px;
  margin-top: 24px;
`;

export const CheckBoxLabel = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_300Light';
  color: #131813;
  margin-right: 12px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding: 6px 18px;

  font-size: 18px;
  font-family: 'Poppins_300Light';
  color: #444;
`;

export const Button = styled.TouchableOpacity`
  height: 52px;
  width: 100%;
  border-radius: 6px;
  background: #2C5530;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 22px;
  color: #fafafa;
`;
