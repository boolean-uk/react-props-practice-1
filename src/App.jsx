import { useState } from 'react'

import Title from './Title'
import NameLength from './NameLength'
import NameReversed from './NameReversed'

function App() {
  const [name] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <NameLength length={name.length} />
      <NameReversed name={name} />
    </div>
  )
}

export default App
