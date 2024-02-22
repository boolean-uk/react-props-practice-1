import { useState } from "react";
import NameReversed from "./NameReversed";
import NameLength from "./NameLength";
import Title from "./Title";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("Victor");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  );
}

export default App;
