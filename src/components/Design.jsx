import PropTypes from "prop-types";

export default function Design(props) {
  return (
    <>
      <img src={props.img} alt={props.alt} />
    </>
  );
}

Design.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
