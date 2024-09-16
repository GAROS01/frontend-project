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
          <Design
            img={data.imagenes.imagen1.img}
            alt={data.imagenes.imagen1.alt}
          />

          <Design
            img={data.imagenes.imagen2.img}
            alt={data.imagenes.imagen2.alt}
          />

          <Design
            img={data.imagenes.imagen3.img}
            alt={data.imagenes.imagen3.alt}
          />

          <Design
            img={data.imagenes.imagen4.img}
            alt={data.imagenes.imagen4.alt}
          />

          <Design
            img={data.imagenes.imagen5.img}
            alt={data.imagenes.imagen5.alt}
          />

          <Design
            img={data.imagenes.imagen6.img}
            alt={data.imagenes.imagen6.alt}
          />

          <Design
            img={data.imagenes.imagen7.img}
            alt={data.imagenes.imagen7.alt}
          />

          <Design
            img={data.imagenes.imagen8.img}
            alt={data.imagenes.imagen8.alt}
          />

          <Design
            img={data.imagenes.imagen9.img}
            alt={data.imagenes.imagen9.alt}
          />

          <Design
            img={data.imagenes.imagen10.img}
            alt={data.imagenes.imagen10.alt}
          />

          <Design
            img={data.imagenes.imagen11.img}
            alt={data.imagenes.imagen11.alt}
          />

          <Design
            img={data.imagenes.imagen12.img}
            alt={data.imagenes.imagen12.alt}
          />
        </div>
        <p>Estos son algunos diseños realizados por nuestros especialistas</p>
      </section>

      <Footer />
    </div>
  );
}
