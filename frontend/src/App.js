import React, {useState} from 'react';

import './global.css'

import Header from './Header';
import Logon from './pages/Logon'

function App() {
  let [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
      <Logon/>
    </div>
  );
}

export default App;
