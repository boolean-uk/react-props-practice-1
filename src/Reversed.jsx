import PropTypes from "prop-types";
import { reverse } from "./helpers";
function Reversed({ name }) {
  return (
    <p className="name-reversed">
      Also, {name} backwards is {reverse(name)}
    </p>
  );
}

export default Reversed;

Reversed.propTypes = {
  name: PropTypes.string,
};
