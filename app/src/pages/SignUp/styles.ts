import styled from 'styled-components/native';
import Constants from 'expo-constants';

const paddingTop = Constants.statusBarHeight + 52;

export const Container = styled.View`
  flex: 1;
  background-color: #2C5530;

  padding-top: ${paddingTop}px;
`;

export const LogoContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #2C5530;
`;

export const FormContainer = styled.View`
  flex: 4;
  width: 100%;
  background: #fafafa;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  padding: 12px 18px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 24px;
  color: #263026;
  text-align: center;
  
  margin-bottom: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background-color: #348952;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-top: 18px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular';
  color: #fafafa;

  margin-left: 12px;
`;
