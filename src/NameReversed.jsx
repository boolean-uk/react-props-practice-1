import { reverse } from "./helpers";
import PropTypes from "prop-types";
function NameReversed(props) {
  const { name } = props;
  return (
    <>
      <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    </>
  );
}
NameReversed.propTypes = {
  name: PropTypes.string,
};
export default NameReversed;
