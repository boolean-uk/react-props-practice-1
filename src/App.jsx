import { useState } from "react";
import { reverse } from "./helpers";
import Title from "./title";
import Namelength from "./nameLength";
import Namereversed from "./nameReversed";

function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <Namelength name={name} />
      <Namereversed name={name} />
    </div>
  );
}

export default App;
