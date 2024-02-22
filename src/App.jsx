import { useState } from "react";
//import { reverse } from "./helpers";
import NameLength from "./nameLength";
import NameReversed from "./nameReversed";
import Title from "./Title";

function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <section>
        <Title name={name} />
      </section>
      <section>
        <NameLength name={name} />
      </section>
      <section>
        <NameReversed name={name} />
      </section>
    </div>
  );
}

export default App;
