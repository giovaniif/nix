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
  text-align: center;
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
  height: 168px;
  width: 168px;
  border-radius: 128px;

  background-color: #fcfcfc;
  position: absolute;
  top: -120px;
`;

export const Username = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular';
  color: #131813;

  margin-top: 58px;
`;

export const WhatsAppButton = styled.TouchableOpacity`
  width: 160px;
  height: 42px;
  border-radius: 8px;
  background-color: #2C5530;
  margin-top: 12px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const WhatsApp = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_300Light';
  color: #fafafa;

  margin-left: 6px;
`;


export const Content = styled.View`
  flex: 3;
  align-items: center;

  background-color: #fafafa;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  position: relative;

`;
