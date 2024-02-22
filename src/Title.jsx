import PropTypes from "prop-types";

function Title(props) {
  const { name } = props;

  return <h1 className="title">Welcome, {name}!</h1>;
}

Title.propTypes = {
  name: PropTypes.string,
};

export default Title;
