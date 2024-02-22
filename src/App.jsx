import { useState } from 'react'
import { reverse } from './helpers'

function Title({name}) {
  return <h1 className="title">Welcome, {name}!</h1>;
}

function NameLength({name}) {
  return(
    <p className="name-length">
      Did you know that {name} is {name.length} characters long?!
    </p>
  );
}

function NameReversed({name}) {
  return(
  <p className="name-reversed">
    Also, {name} backwards is {reverse(name)}
  </p>
  );
}

function App() {
  const [name, setName] = useState('Gordon')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name}/>
      <NameReversed name={name}/>
    </div>
  );
}

export default App
