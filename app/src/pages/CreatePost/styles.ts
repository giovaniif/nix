import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;

  padding: 16px;
`;

export const Header = styled.View`
  width: 100%;
  min-height: 42px;
  padding: 4px 12px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 18px;

  background-color: #d4d4d4;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const AttachButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  height: 40px;
  padding: 0 18px;
  border-radius: 20px;
  background-color: ${props => props.disabled ? '#666' : '#2C5530'};

  justify-content: center;
  align-items: center;
`;

export const ConfirmButtonText = styled.Text`
  font-size: 18px;
  color: #fafafa;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 18px 4px;
`;

export const Input = styled.TextInput.attrs({
  multiline: true,
  textAlignVertical: 'top',
  placeholderTextColor: '#d4d4d4',
  placeholder: 'O que está pensando?'
})`
  width: 100%;
  height: 140px;

  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #131813;
`;

export const PostImageContainer = styled.View`
  height: 128px;
  width: 128px;
  background: #fcfcfc;

  position: relative;
  margin-top: 8px;
  border-radius: 6px;
`;

export const PostImage = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 6px;
  background: #fcfcfc;
`;

export const RemoveImageButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;

  justify-content: center;
  align-items: center;
`;

