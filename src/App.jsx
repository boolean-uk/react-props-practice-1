import { useState } from "react";
import Title from "./Title";
import NameLength from "./NameLength.jsx";
import Reversed from "./Reversed.jsx";

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
        <Reversed name={name} />
      </section>
    </div>
  );
}

export default App;
