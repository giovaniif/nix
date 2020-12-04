import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 130px;
  border-radius: 18px;
  background-color: #fafafa;

  flex-direction: row;
  align-items: center;
  padding: 12px 18px;
  margin-bottom: 12px;
`;

export const Image = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular';
  color: #131813;
`;

export const NavigateButton = styled.TouchableOpacity`
`;

export const NavigateButtonText = styled.Text`
  font-size: 18px;
  color: #338851;
  font-family: 'Poppins_400Regular';
`;
