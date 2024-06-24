import { useState } from "react";
import { reverse } from "./helpers";
import Title from "./title";
import NameLength from "./name-length";
import NameReversed from "./name-reversed";

function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} reverse={reverse} />
    </div>
  );
}

export default App;
