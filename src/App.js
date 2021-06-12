import './App.css';
import Infinite from './Infinite';
import { react } from '@babel/types';
import data from './data'
import TopBar from './TopBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to The Infinite Scroll Challenge</h1>
        <TopBar />

        <Infinite data={data}/>
      </header>
    </div>
  );
}

export default App;
