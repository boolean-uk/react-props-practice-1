function Namereversed(props) {
  // convert the string into an array, reverse it, and then join it back into a string
  const reverse = (str) => {
    return str.split("").reverse().join("");
  };
  return (
    <p className="name-reversed">
      Also, {props.name} backwards is {reverse(props.name)}
    </p>
  );
}

export default Namereversed;
