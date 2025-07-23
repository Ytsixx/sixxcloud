import { useState } from 'react';

export default function SixxHxRx() {
  const [valor, setValor] = useState('');

  const handleClick = () => {
    alert(`Você digitou: ${valor}`);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '10px'
    }}>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Digite algo"
        style={{ padding: '10px', fontSize: '16px' }}
      />

      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Enviar
      </button>
    </div>
  );
}