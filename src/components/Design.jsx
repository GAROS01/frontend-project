import PropTypes from "prop-types";

export default function Design(props) {
  return (
    <>
      <img src={props.img} alt={props.alt} />
    </>
  );
}

Design.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
