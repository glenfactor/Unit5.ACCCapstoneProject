import React from 'react';
import { useState } from 'react';

export default function Authenticate({token}) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch('https://fakestoreapi.com/auth', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZCIsInBhc3N3b3JkIjoiZGRkIiwiaWF0IjoxNjkwNDkxMjk4fQ.dNupopVNOz_dKzub3q8-Q3T-IEld0g2Ne467SbV9Zq0"}`,
        },
      });
      const data = await response.json();

      if (data && data.data && data.data.username) {
        setSuccessMessage(data.message);
        setUsername(data.data.username);
      } else {
        setErrorMessage('Invalid response from the server');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {username && <p>Welcome, {username}!</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
