import styled from 'styled-components/native';

export const Container = styled.View`
  width: 390px;
  background-color: #fafafa;
  margin-bottom: 12px;

  padding: 18px;
  border-radius: 8px;
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const UserPhoto = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;

  background-color: #fcfcfc;
`;

export const UserName = styled.Text`
  font-family: 'Poppins_300Light';
  font-size: 23px;
  color: #131813;

  margin-left: 6px;
`;

export const Content = styled.View`
  width: 100%;

  padding-top: 12px;
`;

export const PostText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #263026;
`;

export const PostImage = styled.Image`
  height: 114px;
  width: 100%;
`;

export const Actions = styled.View`
  width: 100%;
  padding: 12px 0;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LikeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 4px;
`;
