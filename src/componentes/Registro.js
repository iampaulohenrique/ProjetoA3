import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

const Registro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    console.log('Registro realizado com:', { nome, email, password, cpf, birthdate });
    navigate('/login'); // Redireciona para a página de login após o registro
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
     
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
