import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;

  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_600SemiBold';
  color: #131813;
  margin-left: 6px;
`;

export const Label = styled.Text`
  font-size: 22px;
  font-family: 'Poppins_500Medium';
  color: #131813;
  margin-bottom: 6px;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  font-family: 'Poppins_500Medium';
  color: #555;

  background: #fafafa;
  height: ${props => props.multiline ? '140px' : '52px'};
  width: 100%;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;

  padding: 6px 12px;
`;

export const PhotoContainer = styled.TouchableOpacity`
  height: 128px;
  width: 128px;
  border-radius: 4px;
  border-width: 2px;
  border-color: #ccc;
  border-style: dashed;

  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  background-color: #2C5530;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SaveText = styled.Text`
  font-size: 22px;
  font-family: 'Poppins_300Light';
  color: #fafafa;
  margin-left: 12px;
`;
