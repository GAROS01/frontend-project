import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Design from "../components/Design";
import "../styles/Designs.css";
import data from "../data/images.design.json";

export default function Designs() {
  return (
    <div>
      <Nav />
      <Header />

      <section>
        <h2 className="titulo">Diseños</h2>
        <div className="design">
          {data.imagenes.map((imagen, index) => (
            <Design key={index} img={imagen.img} alt={imagen.alt} />
          ))}
        </div>
        <p>Estos son algunos diseños realizados por nuestros especialistas</p>
      </section>
      <Footer />
    </div>
  );
}
