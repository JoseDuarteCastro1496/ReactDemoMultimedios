// src/components/FormularioDeUsuarios.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function FormularioDeUsuarios({
  variante,
  nombre,
  tamaño,
  color,
  Icono,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant={variante}
        size={tamaño}
        color={color}
        endIcon={Icono && <Icono />}
      >
        {nombre}
      </Button>

      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Crear nuevo Usuario</span>
          <IconButton onClick={handleClose} sx={{ "&:hover": { color: "#e65d8a" } }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
           <Stack spacing={2} mt={1}>
    {[
      'Nombre',
      'Descripción del proyecto',
      'Creado por',
      'Equipo responsable',
    ].map((label) => (
      <TextField
        key={label}
        required
        label={label}
        variant="outlined"
        size="small"
        margin="dense"
        sx={{ width: { xs: '100%', sm: 300 } }}
        InputProps={{
          sx: {
            height: 32,
            '& .MuiInputBase-input': { padding: '4px 8px' },
          },
        }}
      />
    ))}
  </Stack>
        </DialogContent>

        <DialogActions sx={{ pr: 2, pb: 2 }}>
          <Button variant="contained">Crear Usuario</Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
