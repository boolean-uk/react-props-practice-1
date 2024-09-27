import { useState } from 'react';

import Title from "./Components/Title.jsx";
import NameLength from "./Components/NameLength.jsx";
import NameReversed from "./Components/NameReversed.jsx";

export default function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  )
}


