import { useLocation,  useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';    


export default function UserDetails() {
  const { state: user } = useLocation();   // <-- aquí está el usuario
  const navigate = useNavigate();
    return (
    <Box p={2}>
      <Button onClick={() => navigate(-1)}>← Volver</Button>
      <Typography variant="h4" gutterBottom>
        {user.name}
      </Typography>
      <Typography><strong>Email:</strong> {user.email}</Typography>
      <Typography><strong>Teléfono:</strong> {user.phone}</Typography>
      <Typography><strong>Ciudad:</strong> {user.address.city}</Typography>
      <Typography><strong>Empresa:</strong> {user.company.name}</Typography>
      {/* …otros campos… */}
    </Box>
  );
}

