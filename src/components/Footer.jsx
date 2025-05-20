 // src/components/Footer.jsx
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        py: 4,
        mt: 'auto',
        height:"100px",
        minHeight: '28vh',
      }}
    >
      <Container maxWidth="lg" sx={{height:150}} >
        <Grid container spacing={12} justifyContent="space-between">
          <Grid item xs={12} md={4} sx={{ display:'flex',flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Typography variant="h6" gutterBottom>
              MiSitio
            </Typography>
            <Typography variant="body2">
              © {new Date().getFullYear()} MiSitio. Todos los derechos reservados.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} >
            <Typography pb={0} variant="h6" gutterBottom>
              Enlaces
            </Typography>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",gap:2}}>
              <Link href="/" color="inherit" underline="hover">
                Inicio
              </Link>
              <Link href="/servicios" color="inherit" underline="hover">
                Servicios
              </Link>
              <Link href="/acerca" color="inherit" underline="hover">
                Acerca de
              </Link>
              <Link href="/contacto" color="inherit" underline="hover">
                Contacto
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display:"flex", textAlign: 'center', justifyContent:"center", alignItems:"center" }}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                sx={{ color: 'primary.contrastText' }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                sx={{ color: 'primary.contrastText' }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                sx={{ color: 'primary.contrastText' }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                sx={{ color: 'primary.contrastText' }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
