import PropTypes from "prop-types";
function NameLength(props) {
  return (
    <>
      <p className="name-length">
        Did you know that {props.name} is {props.name.length} characters long?!
      </p>
    </>
  );
}
NameLength.propTypes = {
  name: PropTypes.string,
};
export default NameLength;
