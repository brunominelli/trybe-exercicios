import { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
 render() {
  const { pokemon: { name, type, averageWeight, image} } = this.props;
  return (
    <figure className="pokemon">
      <img src={ image } alt={`${name} sprite`} />
      <figcaption>
        <strong>{ name }</strong>
        <p>{ `Type: ${type}` }</p>
        <p>
          {`Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
      </figcaption>
    </figure>
  );
 }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
