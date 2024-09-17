import PropTypes from "prop-types";
function Title(props) {
  return <h1 className="title">Welcome, {props.name}!</h1>;
}
Title.propTypes = {
  name: PropTypes.string,
};
export default Title;
