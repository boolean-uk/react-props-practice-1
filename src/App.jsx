import { useState } from "react";
import Title from "./Title";
import NameLenght from "./NameLenght";
import NameReversed from "./NameReversed";

function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <NameLenght name={name} />
      <NameReversed name={name} />
    </div>
  );
}

export default App;
