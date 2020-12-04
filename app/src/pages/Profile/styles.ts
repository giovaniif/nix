import styled from 'styled-components/native';
import Constants from 'expo-constants';

const paddingTop = Constants.statusBarHeight + 4;

export const Container = styled.View`
  flex: 1;
  background-color: #2C5530;

  padding-top: ${paddingTop}px;
`;

export const Header = styled.View`
  background: #2C5530;
  padding: 24px;
  
  flex: 1;
  align-items: flex-end;
`;

export const Bio = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 18px;
  color: #131813;
  margin-top: 12px;
`;

export const EditProfileButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const AddBioText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #fafafa;
`;

export const ProfilePhoto = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 128px;

  background-color: #fcfcfc;
  position: absolute;
  top: -60px;
  left: 12px;
`;

export const Username = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular';
  color: #131813;

  margin-top: 40px;
`;

export const WhatsApp = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_300Light';
  color: #666;

  margin-left: 6px;
`;


export const Content = styled.View`
  flex: 3;

  background-color: #fafafa;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  position: relative;

`;
