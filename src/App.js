import './App.css';
import Infinite from './Infinite';
// import { react } from '@babel/types';
import data from './data'
// import TopBar from './TopBar'
import FooterBar from './FooterBar'
import React from "react"

class App extends React.Component {
 
  render() {
    return (
      <div>
        
        {/* <TopBar /> */}

        <div className="App">
          <header className="App-header">
            <Infinite data={data} />
          </header>
        </div>
        <FooterBar />
      </div>
    );
  }

}

export default App;
