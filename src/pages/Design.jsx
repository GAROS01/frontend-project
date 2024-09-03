import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Design.css";

import diseño1 from "../assets/img/diseño(1).jpg";
import diseño2 from "../assets/img/diseño(2).jpg";
import diseño3 from "../assets/img/diseño(3).jpg";
import diseño4 from "../assets/img/diseño(4).jpg";
import diseño5 from "../assets/img/diseño(5).jpg";
import diseño6 from "../assets/img/diseño(6).jpg";
import diseño7 from "../assets/img/diseño(7).jpg";
import diseño8 from "../assets/img/diseño(8).jpg";
import diseño9 from "../assets/img/diseño(9).jpg";
import diseño10 from "../assets/img/diseño(10).jpg";
import diseño11 from "../assets/img/diseño(11).jpg";
import diseño12 from "../assets/img/diseño(12).jpg";
// import diseño13 from "../assets/img/diseño(13).jpg";
// import diseño14 from "../assets/img/diseño(14).jpg";

export default function Design() {
  return (
    <div>
      <Nav />
      <Header />

      <section>
        <h2 className="titulo">Diseños</h2>
        <div className="design">
          <img className="img-design" src={diseño1} alt="imagen del diseño" />

          <img className="img-design" src={diseño2} alt="imagen del diseño" />

          <img className="img-design" src={diseño3} alt="imagen del diseño" />

          <img className="img-design" src={diseño4} alt="imagen del diseño" />

          <img className="img-design" src={diseño5} alt="imagen del diseño" />

          <img className="img-design" src={diseño6} alt="imagen del diseño" />

          <img className="img-design" src={diseño7} alt="imagen del diseño" />

          <img className="img-design" src={diseño8} alt="imagen del diseño" />

          <img className="img-design" src={diseño9} alt="imagen del diseño" />

          <img className="img-design" src={diseño10} alt="imagen del diseño" />

          <img className="img-design" src={diseño11} alt="imagen del diseño" />

          <img className="img-design" src={diseño12} alt="imagen del diseño" />
        </div>
        <p>Estos son algunos diseños realizados por nuestros especialistas</p>
      </section>

      <Footer />
    </div>
  );
}
