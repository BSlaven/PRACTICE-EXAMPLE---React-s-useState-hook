
import { useState } from 'react';

// ova funkcija je potencijalno skupa/teška operacija
const customNameSetter = () => {
  return '';
}

const customCountSetter = () => {
  console.log('customCountSetter ran');
  return 4;
}

function App() {
  // const [ name, setName ] = useState(() => customNameSetter());
  const [ count, setCount ] = useState(customCountSetter());

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;