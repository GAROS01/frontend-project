// import whatsapp from "../assets/whats-app.svg";
import instagram from "../assets/instagram.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <h3>Contáctanos</h3>
        {/* <a href="#" target="_blank">
          <img className="whatsapp" src={whatsapp} alt="logo-whatsapp" />
        </a> */}
        <a
          href="https://www.instagram.com/navisgamboa_nailsspa/"
          target="_blank"
        >
          <img className="instagram" src={instagram} alt="logo-instagram" />
        </a>
      </footer>
    </div>
  );
}
