import PropTypes from "prop-types";
import { reverse } from "./helpers";
function NameReversed(props) {
  return (
    <p className="name-reversed">
      Also, {props.name} backwards is {reverse(props.name)}
    </p>
  );
}
NameReversed.propTypes = {
  name: PropTypes.string,
};
export default NameReversed;
