import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Link,Typography  } from "@mui/material";
import FormularioDeUsuarios from "../Dialog";
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function User() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <FormularioDeUsuarios nombre="Registrar Viaje" Icono={AddTaskIcon} />
      <h2>Lista de Usuarios:</h2>

      {user ? (
        <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
          {user.map((u) => (
            <Box
              component="li"
              key={u.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px 15px',
                borderBottom: '1px solid #ccc',
                borderRadius: 1,
                backgroundColor: '#f9f9f9',
                mb: 1,
              }}
            >
              <Typography variant="body1">{u.name}</Typography>
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/UserDetails', { state: u })}
                sx={{
    color: 'primary.main', 
    '&:hover': {
      color: 'secondary.main',
    },
    '&:active': {
      color: 'error.main', 
    },
  }}
              >
                Detalles
              </Link>
            </Box>
          ))}
        </Box>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

