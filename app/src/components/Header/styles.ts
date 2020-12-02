import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  position: absolute;
  z-index: 1;
  height: 62px;
  top: ${Constants.statusBarHeight}px;
  left: 0;
  right: 0;
  padding: 0 22px;
  background-color: #2C5530;

  justify-content: space-between;
  flex-direction: row;
`;
