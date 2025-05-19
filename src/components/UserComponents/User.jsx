import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Link } from "@mui/material";

export default function User() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  function UserDetails() {
    navigate("/UserDetails");
  }
  return (
    <div>
      <h2>Lista de Usuarios:</h2>
      {user ? (
        <ul>
          {user.map((u) => (
            <li key={u.id}>
              {u.name}
              <Link
                sx={{ marginLeft: 20 }}
                component="button"
                variant="body1"
                onClick={() => {
                  UserDetails();
                }}
              >
                Detalles
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
