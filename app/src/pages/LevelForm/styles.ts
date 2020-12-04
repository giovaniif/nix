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

export const Options = styled.View`
  flex: 1;
  margin-top: 18px;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  height: 160px;
  border-radius: 18px;
  margin-bottom: 18px;

  padding: 12px 28px;
  flex-direction: row;
  align-items: center;
`;

export const OptionTitle = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_500Medium';
  color: #fafafa;
`;

export const OptionDescription = styled.Text`
  margin-top: 6px;
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #fafafa;
  text-align: left;
`;
