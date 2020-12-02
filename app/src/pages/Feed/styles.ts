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
  padding: 18px 24px;

  justify-content: center;
  align-items: center;
`;