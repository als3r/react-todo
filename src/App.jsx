import { useState } from 'react';
import reactLogo from './assets/react.svg';
import TopMenu from './components/TopMenu';
import ToDo from './components/Todo';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TopMenu />
      <ToDo />
    </div>
  );
}

export default App;
