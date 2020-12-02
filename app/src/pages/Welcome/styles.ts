import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2C5530;
`;

export const ContentContainer = styled.View`
  flex: 4;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 120px;
  width: 120px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 34px;
  font-family: 'Poppins_600SemiBold';
  color: #fafafa;

  margin-top: 18px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 28px;
  font-family: 'Poppins_400Regular';
  color: #fafafa;

  text-align: center;
`;

export const ButtonsContainer = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;

  padding: 0 14px;
  background-color: #fafafa;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  z-index: 4;
`;

export const Link = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  margin-top: 12px;
`;

export const LinkText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_500Medium';
  color: #131813;
  text-align: center;
`;
