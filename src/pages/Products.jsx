import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Producto from "../components/Product";
import data from "../data/data.products.json";
import "../styles/Products.css";
import img from "../assets/img/diseño(13).jpg";
import img1 from "../assets/img/diseño(14).jpg";

export default function Products() {
  console.log(data.productos);
  return (
    <div>
      <Nav />
      <Header />
      <h2 className="title-products">Productos</h2>
      <section className="products-container">
        <Producto
          titulo={data.productos[0].nombre}
          img={img}
          descripcion={data.productos[0].descripcion}
          categoria={data.productos[0].categoria}
        />

        <Producto
          titulo={data.productos[1].nombre}
          img={img1}
          descripcion={data.productos[1].descripcion}
          categoria={data.productos[1].categoria}
        />

        <Producto
          titulo={data.productos[2].nombre}
          img={img}
          descripcion={data.productos[2].descripcion}
          categoria={data.productos[2].categoria}
        />

        <Producto
          titulo={data.productos[3].nombre}
          img={img1}
          descripcion={data.productos[3].descripcion}
          categoria={data.productos[3].categoria}
        />

        <Producto
          titulo={data.productos[4].nombre}
          img={img}
          descripcion={data.productos[4].descripcion}
          categoria={data.productos[4].categoria}
        />

        <Producto
          titulo={data.productos[5].nombre}
          img={img1}
          descripcion={data.productos[5].descripcion}
          categoria={data.productos[5].categoria}
        />

        <Producto
          titulo={data.productos[6].nombre}
          img={img}
          descripcion={data.productos[6].descripcion}
          categoria={data.productos[6].categoria}
        />

        <Producto
          titulo={data.productos[7].nombre}
          img={img1}
          descripcion={data.productos[7].descripcion}
          categoria={data.productos[7].categoria}
        />

        <Producto
          titulo={data.productos[8].nombre}
          img={img}
          descripcion={data.productos[8].descripcion}
          categoria={data.productos[8].categoria}
        />

        <Producto
          titulo={data.productos[9].nombre}
          img={img1}
          descripcion={data.productos[9].descripcion}
          categoria={data.productos[9].categoria}
        />

        <Producto
          titulo={data.productos[10].nombre}
          img={img}
          descripcion={data.productos[10].descripcion}
          categoria={data.productos[10].categoria}
        />

        <Producto
          titulo={data.productos[11].nombre}
          img={img1}
          descripcion={data.productos[11].descripcion}
          categoria={data.productos[11].categoria}
        />

        <Producto
          titulo={data.productos[12].nombre}
          img={img}
          descripcion={data.productos[12].descripcion}
          categoria={data.productos[12].categoria}
        />

        <Producto
          titulo={data.productos[13].nombre}
          img={img1}
          descripcion={data.productos[13].descripcion}
          categoria={data.productos[13].categoria}
        />

        <Producto
          titulo={data.productos[14].nombre}
          img={img}
          descripcion={data.productos[14].descripcion}
          categoria={data.productos[14].categoria}
        />
      </section>

      <Footer />
    </div>
  );
}
