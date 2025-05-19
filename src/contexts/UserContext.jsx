import { createContext, useState, useEffect } from 'react';
import { fetchUser } from '../services/userService';

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Crear el proveedor
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ⬅️ Iniciar con null o []

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUser(); // Llamada a la API
        setUser(data); // Guardar datos en el estado
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      } finally {
        console.log('Carga de usuario completada');
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
