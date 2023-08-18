import NameReversed from './components/NameReversed'
import NameLength from './components/NameLength'
import Title from './components/Title'
import { useState } from 'react'
import './styles.css'

export default function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <>
      <div className="app">
        <Title name={name} />
        <NameLength name={name} />
        <NameReversed name={name} />
      </div>
    </>
  );
}