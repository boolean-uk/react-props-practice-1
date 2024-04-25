import { useState } from 'react'
import Title from '../Components/Title'
import NameLength from '../Components/NameLength'
import NameReversed from '../Components/NameReversed '

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />      
      <NameReversed banana={ name } kebab = 'Kebab is goood!' />
    </div>
  )
}

export default App
