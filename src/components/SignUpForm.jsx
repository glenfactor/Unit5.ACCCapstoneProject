import { useState } from 'react';

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log(data);

    if (username.length < 8) {
        setError('Username must be at least 8 characters long.');
        return;
      }
  
      setError(null);

    try {
        
        const headers = {
            'Content-Type': 'application/json',
          };
    
          if (token) {
            headers.Authorization = `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZCIsInBhc3N3b3JkIjoiZGRkIiwiaWF0IjoxNjkwNDkxMjk4fQ.dNupopVNOz_dKzub3q8-Q3T-IEld0g2Ne467SbV9Zq0}`;
          }
          
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // Set the Content-Type header to JSON
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const result = await response.json();
      console.log(result);
      setToken(result.token); // Move this line inside the try block
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setPassword("");
  }
  console.log(username, password);


  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
