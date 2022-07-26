import { useState , useEffect } from 'react'
import './App.css'
import Formulario from './components/Formulario.jsx'
import colors from './utils/colors.js'

function App() {
  const [typeInput, setTypeInput] = useState('password')
  const [count, setCount] = useState(0)
  const [colorRandom, setColorRandom] = useState(getRandomColors(colors))
  const pass = () => {
    if (typeInput === 'password') {
      setTypeInput('text')
    } else {
      setTypeInput('password')
    }

  }
  const sumCount = () => {
    setCount(count +1)
  }
  const restCount = () => {
    setCount(count -1)
  }
  const reseAll = () => {
    setCount(0)
  }
  function getRandomColors() {
    for (let i = 0; i < colors.length;) {
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
  useEffect(() => {
    const colorsAll = getRandomColors(colors)
    setColorRandom(colorsAll)
  }, [count])
  

  const appStyle = {
    backgroundColor: colorRandom
  }

  console.log(colors);

  return (
    <div className='App' style={appStyle}>
      <Formulario
        typeInput={typeInput}
        pass={pass}
        sumCount={sumCount}
        restCount={restCount}
        reseAll={reseAll}
        count={count}
      />
    </div>
  )
}

export default App
