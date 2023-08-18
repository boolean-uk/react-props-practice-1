import { useState } from 'react'

import { reverse } from './helpers'
import './styles.css'
import Title from './Title'
import NameLenght from './NameLength'
import NameReversed from './NameReversed'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <NameLenght name={name} useState={NameLenght} />
      <NameReversed name={name} useState={reverse} />
    </div>
  )
}
