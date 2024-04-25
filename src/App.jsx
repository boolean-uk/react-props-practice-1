import { useState } from 'react'
import { reverse } from './helpers'


function App() {
  const [name, setName] = useState('Nicolas')

  function TitleComp(props) {
    return (
      <>
        <h1 className="title">Welcome, {props.name}!</h1>
      </>
    )
  }

  function NameLength(props){
    return (
      <>
        <p className="name-length">
          Did you know that {props.name} is {props.length} characters long?!
        </p>
      </>
    )
  }

  function ReversedName(props){
    return (
      <>
        <p className="name-reversed">
         Also, {props.name} backwards is {reverse(props.name)}
        </p>
      </>
    )
  }

  return (
    <div className="app">
      <TitleComp name={name}/>
      <NameLength name={name} length={name.length}/>
      <ReversedName name={name} />
    </div>
  )
}

export default App
