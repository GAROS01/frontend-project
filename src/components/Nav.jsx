import { Link } from "react-router-dom";

import img from "../assets/logo2.webp";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <Link className="link" to="/">
          <img className="img" src={img} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link className="link" to={"/products"}>
              Productos
            </Link>
          </li>
          <li>
            <Link className="link" to={"/design"}>
              Diseños
            </Link>
          </li>
          <li>
            <Link className="link" to={"/calendar"}>
              Agenda
            </Link>
          </li>
          <li>
            <Link className="link" to={"/session"}>
              Iniciar Sesion
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
