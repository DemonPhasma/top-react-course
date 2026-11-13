import { useState, useEffect, type ChangeEvent } from 'react';

function SupremeHooksUseEffectDependencies() {
  const [username, setUsername] = useState('Oleg');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  return (
    <div>
      <p>Привет, {username}!</p>
      {}
      <input type="text" value={username} onChange={handleChange} />
    </div>
  );
}

export default SupremeHooksUseEffectDependencies;
