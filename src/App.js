import { useState } from 'react'

import { reverse } from './helpers'

import Title from './components/Title'
import NameLenght from './components/NameLength'
import NameReversed from './components/NameReversed'

import './styles.css'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLenght name={name}/>
      <NameReversed name={name}/>
    </div>
  )
}
