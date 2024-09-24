import React, { useEffect, useState } from 'react';
import { loginService } from './loginService';
import { useNavigate } from 'react-router-dom';
import { User } from 'firebase/auth';
import './Auth.css';

const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState<boolean>(false); 
  const [currentUser, setCurrentUser] = useState<User | null>(null); 

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = loginService.checkAuthState((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async (): Promise<void> => {
    setError(null); 
    const user = await loginService.signUp(email, password);
    if (user) {
      console.log('Usuario Cadastrado com Sucesso:', user);
      navigate('/');
    } else {
      setError('Falha ao Cadastrar-se');
    }
  };

  const handleSignIn = async (): Promise<void> => {
    setError(null); 
    const user = await loginService.signIn(email, password);
    if (user) {
      console.log('Usuario Logado:', user);
      navigate('/');
    } else {
      setError('Falha ao Conectar-se');
    }
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    setError(null);
    const user = await loginService.signInWithGoogle();
    if (user) {
      console.log('Login Google com Sucesso:', user);
      navigate('/');
    } else {
      setError('Falha ao Logar com o Google');
    }
  };

  const handleLogout = async (): Promise<void> => {
    await loginService.logout();
  };

  return (
    <div className='form'>
      {!isSignUp ? (
        // Formulário de Login
        <div>
          <h2>Entrar</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="senha"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Entrar</button>
          <button onClick={() => setIsSignUp(true)}>Criar uma Conta</button>
          <button onClick={handleGoogleSignIn}>Entrar com o Google</button>
          {error && <p>{error}</p>}
        </div>
      ) : (
        // Formulário de Cadastro
        <div className='form'>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="senha"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Criar Conta</button>
          <button onClick={() => setIsSignUp(false)} className='alternado'>Já possui uma conta? Entrar</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Auth;
