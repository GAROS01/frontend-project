import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Producto from "../components/Product";
import data from "../data/data.products.json";
import "../styles/Products.css";

export default function Products() {
  return (
    <div>
      <Nav />
      <Header />
      <h2 className="title-products">Productos</h2>
      <section className="products-container">
        {data.productos.map((producto, index) => (
          <Producto
            key={index}
            titulo={producto.nombre}
            img={producto.imagen}
            descripcion={producto.descripcion}
            categoria={producto.categoria}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
