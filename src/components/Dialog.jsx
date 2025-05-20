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
            <TextField required label="Nombre" variant="outlined" />
            <TextField required label="Descripción del proyecto" variant="outlined" />
            <TextField required label="Creado por" variant="outlined" />
            <TextField required label="Equipo responsable" variant="outlined" />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ pr: 2, pb: 2 }}>
          <Button variant="contained">Crear nuevo usuario</Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
