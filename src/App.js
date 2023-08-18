import { useState } from 'react'
import './styles.css'
import NameLength from './NameLength'
import NameReversed from './NameReversed'
import Name from './Name'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
     <Name name = {name} />
     <NameLength name={name}/>
      <NameReversed name= {name} />
    </div>
  )
}
