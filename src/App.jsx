import { useState } from 'react'
// import { reverse } from './helpers'
import Title from '../Components/Title'
import NameLength from '../Components/NameLength'
import NameReversed from '../Components/NameReversed '

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      {/* <h1 className="title">Welcome, {name}!</h1> */}
      <Title name={name} />
      {/* <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p> */}
      <NameLength name={ name } />
      {/* <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p> */}
      < NameReversed banana={ name } kebab = 'Kebab is goood!' />
    </div>
  )
}

export default App
