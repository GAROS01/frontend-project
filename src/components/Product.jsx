import PropTypes from "prop-types";
import "../styles/Product.css";

export default function Product({ titulo, img, descripcion, categoria }) {
  return (
    <div className="product">
      <h4 className="product-title">{titulo}</h4>
      <div className="product-img">
        <img className="img-product" src={img} alt="imagen del producto" />
      </div>
      <p className="description">{descripcion}</p>
      <p className="category">
        Categoria:<span>{categoria}</span>
      </p>
    </div>
  );
}

Product.propTypes = {
  titulo: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
};
