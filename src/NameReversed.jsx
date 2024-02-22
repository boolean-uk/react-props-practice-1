import { reverse } from "./helpers";
import PropTypes from "prop-types";
function NameReversed(props) {
  return (
    <>
      <p className="name-reversed">
        Also, {props.name} backwards is {reverse(props.name)}
      </p>
    </>
  );
}
NameReversed.propTypes = {
  name: PropTypes.string,
};
export default NameReversed;
