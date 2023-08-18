import { useState } from 'react'

// import { reverse } from './helpers'
import './styles.css'

import Title from './title'
import Namelength from './name-length'
import Namereversed from './name-reversed'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <Namelength name={name} length={name.length} />
      <Namereversed name={name} />
    </div>
  )
}
