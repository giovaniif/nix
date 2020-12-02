import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Keyboard, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

import LogoImage from '../../assets/invertedLogo.png';

import { 
  Container,
  LogoContainer,
  FormContainer,
  Title,
  Button,
  ButtonText,
} from './styles';

interface SignUpFormData {
  email: string;
  name: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { goBack, canGoBack } = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmitForm = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido!'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post('users', data);

      console.log('Cadastrado');

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        Keyboard.dismiss();

        return;
      }

      console.log('Ocorreu um erro no cadastro');
    }
  }, []);

  return (
    <Container>
      <Header onPress={() => canGoBack() && goBack()} />
      <LogoContainer>
        <Image 
          source={LogoImage} 
          style={{ height: 108, width: 108 }} 
        />
      </LogoContainer>
      <FormContainer>
        <Title>Conheça nossa plataforma</Title>
        <Form ref={formRef} onSubmit={handleSubmitForm}>
          <Input 
            name="name" 
            icon="user" 
            placeholder="Qual seu nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
            keyboardType="email-address"
          />

          <Input 
            ref={emailInputRef}
            name="email"
            icon="mail" 
            placeholder="Seu melhor email" 
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
            />

          <Input 
            ref={passwordInputRef}
            name="password" 
            icon="lock" 
            placeholder="Sua senha secreta" 
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />

        </Form>
        
        <Button onPress={() => formRef.current?.submitForm()}>
          <Feather name="send" color="#fafafa" size={24} />
          <ButtonText>Criar conta</ButtonText>
        </Button>
      </FormContainer>
    </Container>
  )
}

export default SignUp;