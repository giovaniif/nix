import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fafafa;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #d4d4d4;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #739E82;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #131813;
  font-size: 16px;
  font-family: 'Poppins_400Regular';
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;