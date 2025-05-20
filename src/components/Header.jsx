import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const Img = styled("img")({
  width: 50,
  height: "10%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function UserDetails() {
    navigate("/hola");
  }

  const links = [
    { label: "Inicio", onClick: () => navigate("/") },
    { label: "Dashboard", onClick: () => navigate("/MinFulness") },
    { label: "Recursos Humanos", onClick: () => {} },
    { label: "Contabilidad", onClick: () => {} },
    { label: "Tareas", onClick: () => {} },
  ];

  return (
    <Box sx={{ flexGrow: 1, mb: "90px" }}>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ mx: 2 }}>
            Gestor de Usuarios
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {links.map(({ label, onClick }) => (
              <Typography
                key={label}
                component="button" 
                onClick={onClick}
                sx={{
                  background: "none",
                  border: "none",
                  font: "inherit",
                  color: "inherit",
                  cursor: "pointer",
                  p: 1,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>

          <Avatar alt="Usuario" src="src/assets/IconoSitio.png" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
