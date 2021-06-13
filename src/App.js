import './App.css';
// import TopBar from './TopBar'
import Infinite from './Infinite';
import data from './data'
import FooterBar from './FooterBar'
import React from "react"

class App extends React.Component {

  fetchData = () => {
    const perPage = 6

    const paginatedData = data.slice(this.state.offset + 1, this.state.offset + perPage)

    this.setState({
      data: [...this.state.data, ...paginatedData],
      offset: this.state.offset + perPage
    })
  }
 
  render() {
    return (
      <div>

        {/* <TopBar /> */}

        <div className="App">
          <header className="App-header">
            <Infinite data={data}/>
          </header>
        </div>
        <FooterBar />
      </div>
    );
  }

}

export default App;
