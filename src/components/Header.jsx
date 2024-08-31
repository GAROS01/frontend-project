import logo from "../assets/logoNailSpa.png";
import ubicacion from "../assets/ubicacion.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logoNailSpa" />
        <section>
          <h1 className="title">NAVIS GAMBOA NAILS SPA</h1>
          <p className="paragraph">
            ¡Déjate mimar en nuestro salón de uñas y peluquería! Con un ambiente
            relajante y profesionales altamente capacitados, te garantizamos una
            experiencia de belleza excepcional.
          </p>
          <div className="ubicacion">
            <img
              className="location"
              src={ubicacion}
              alt="punto de ubicacion"
            />
            <p className="location">Medellin, Colombia</p>
          </div>
        </section>
      </header>
    </div>
  );
}
