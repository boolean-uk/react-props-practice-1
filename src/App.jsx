import { useState } from 'react'
import Title from './title'
import Namelenght from './nameLenght'
import Namereversed from './nameReversed'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
    <Title username={name}></Title>
    <Namelenght username={name}></Namelenght>
    <Namereversed username={name}></Namereversed>   
      
    </div>
  )
}

export default App;
