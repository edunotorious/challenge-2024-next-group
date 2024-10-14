import React, { useState } from 'react';
import * as S from './styles';

const Login = () => {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User Type:', userType);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <S.LoginPage>
      <S.LoginImage />
      <S.LoginContainer>
        <S.Logo src="/src/assets/Logo_VirtualScopia.png" alt="VirtualScopia Logo" />
        <form onSubmit={handleLogin}>
          <S.FormGroup>
            <S.FormControl
              as="select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="">Select your type</option>
              <option value="admin">Admin</option>
              <option value="user">Aluno</option>
              <option value="guest">Professor</option>
            </S.FormControl>
          </S.FormGroup>
          <S.FormGroup>
            <S.FormControl
              type="text"
              placeholder="Login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.FormControl
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormFooter>
            <S.ForgotPasswordLink href="/forgot-password">Esqueceu a senha? Clique aqui</S.ForgotPasswordLink>
          </S.FormFooter>
          <S.LoginButton type="submit">Entrar</S.LoginButton>
          <S.SignupLink>
            Ainda não tem uma conta? <a href="/signup">Cadastre-se</a>
          </S.SignupLink>
        </form>
      </S.LoginContainer>
    </S.LoginPage>
  );
};

export default Login;
