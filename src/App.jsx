import { useState } from 'react'

import {Title} from './title'
import {nameReverse} from './name-reversed'
import {nameLength} from './nameLength'


function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title  name={name} />

      <nameLength  name = {name}/>

      <nameReverse   name = {name} />
    </div>
  )
}

export default App
