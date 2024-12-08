import { useState } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import NameLength from "./NameLenght";
import NameReversed from "./NameReversed";

function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
