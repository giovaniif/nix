import styled from 'styled-components/native';
import Constants from 'expo-constants';

const paddingTop = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;

  padding-top: ${paddingTop}px;
`;

export const Content = styled.View`
  flex: 1;
  background: #fafafa;
  padding: 18px;

  justify-content: center;
  align-items: center;
`;

export const PostButton = styled.TouchableOpacity`
  height: 54px;
  width: 54px;
  border-radius: 27px;
  background: #2C5530;

  justify-content: center;
  align-items: center;

  position: absolute;
  right: 20px;
  bottom: 20px;
`;