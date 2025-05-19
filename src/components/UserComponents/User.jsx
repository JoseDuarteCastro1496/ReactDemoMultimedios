import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function User() {
    const { user } = useContext(UserContext);

 return (
    <div>
      <h1>Usuarios:</h1>
      {user ? (
        <ul>
          {user.map(u => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};