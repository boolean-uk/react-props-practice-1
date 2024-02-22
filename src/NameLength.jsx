import PropTypes from "prop-types";
function NameLength(props) {
  const { name } = props;
  return (
    <>
      <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p>
    </>
  );
}
NameLength.propTypes = {
  name: PropTypes.string,
};
export default NameLength;
