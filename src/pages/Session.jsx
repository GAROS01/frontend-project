import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

import "../styles/Session.css";

export default function Session() {
  const { user, loginGoogle, logout } = useAuth();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <>
      <Nav />
      <Header />

      <div className="container">
        <div>
          <h2 className="titulo">
            {user ? "Cerrar Session" : "Iniciar Sesion"}
          </h2>
          <div>
            <img
              className="img-user"
              alt="user avatar"
              {...(user && user.avatar_url
                ? { src: user.avatar_url }
                : {
                    src: " https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
                  })}
            />
            <h4 className="user">
              {user
                ? `Bienvenido ${user.full_name}`
                : "Inicia sesion con Google"}
            </h4>
          </div>
          {user ? (
            <button className="btn" onClick={logout}>
              Cerrar Session
            </button>
          ) : (
            <button className="btn" onClick={loginGoogle}>
              Iniciar Sesion
            </button>
          )}
          {user ? (
            <button className="btn">?</button>
          ) : (
            <button className="btn" onClick={handleRegisterClick}>
              Registrarse
            </button>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
