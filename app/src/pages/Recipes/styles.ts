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
  margin-bottom: 18px;
`;


