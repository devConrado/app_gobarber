import React from 'react';
import { Image } from 'react-native';
import logImg from '../../assets/logo.png';
import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logImg} />
      <Title>Faça seu Logon</Title>
    </Container>
  );
};

export default SignIn;
