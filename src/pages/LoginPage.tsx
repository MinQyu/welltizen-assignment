import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (id === 'test' && password === 'test') {
      navigate('/home');
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '20px',
        width: '100%',
      }}
    >
      <h1
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
        }}
      >
        Login Page
      </h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '400px',
          padding: '30px 20px',
          borderRadius: '20px',
          boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>SHOP 101</h2>
        <Input
          type='text'
          placeholder='아이디'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit'>로그인</Button>
      </form>
    </div>
  );
}

export default LoginPage;
