import { useState } from "react";
import Title from "./component/Title";
import NameLength from "./component/NameLength";
import NameReversed from "./component/NameReversed";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState("Nicolas");

    return (
        <div className="app">
            <Title name={name} />
            <NameLength name={name} />
            <NameReversed name={name} />
        </div>
    );
}

export default App;
