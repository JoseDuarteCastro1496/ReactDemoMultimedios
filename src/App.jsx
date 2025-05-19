import { UserProvider } from "./contexts/UserContext";
import NavBar from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

// Componentes
import User from "./components/UserComponents/User.jsx";
import UserDetails from "./components/UserComponents/UserDetails";

export default function App() {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // ocupa toda la altura de la ventana
        }}
      >
        <NavBar />
        <UserProvider>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/UserDetails" element={<UserDetails />} />
          </Routes>
        </UserProvider>
        <Footer />
      </Box>
    </>
  );
}
