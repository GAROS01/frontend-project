import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Register.css";

export default function Register() {
  return (
    <>
      <Nav />
      <Header />

      <h2>Registro</h2>
      <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="last-name">Apellido</label>
        <input type="text" id="last-name" name="last-name" />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Telefono</label>
        <input type="tel" id="phone" name="phone" />
        <label htmlFor="admin">Administrativo</label>
        <select className="select" id="admin" name="admin">
          <option value="0">None</option>
          <option value="1">Administrativo</option>
          <option value="2">Manicurista</option>
          <option value="3">Cliente</option>
        </select>

        <button className="boton">Registrarse</button>
      </form>

      <Footer />
    </>
  );
}
