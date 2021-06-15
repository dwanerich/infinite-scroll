import React from 'react'
import './App.css';
import TopBar from './TopBar'
import Infinite from './Infinite';
import data from './data'
import FooterBar from './FooterBar'
// import SearchTool from './SearchTool'

class App extends React.Component {

  // SET STATE TO DISPLAY FIRST 5 ITEMS IN ARRAY INITIALLY | OFFSET BY 5

  state = {
    offset: 5,
    data: data.slice(0, 6),
    inputValue: ''
  }

  // FUNCTION THAT RETRIEVES THE NEXT SET OF DATA WHEN BOTTOM OF PAGE SCROLL IS DETECTED

    searchResults = () => {
    const perPage = 6

    const orderedResults = data.slice(this.state.offset + 1, this.state.offset + perPage)
    
    this.setState({results: [...this.state.results, ...orderedResults],
    offset: this.stat.offset + perPage
    })
  }

  fetchData = () => {
    const perPage = 6

    const paginatedData = data.slice(this.state.offset + 1, this.state.offset + perPage)

    this.setState({
      data: [...this.state.data, ...paginatedData],
      offset: this.state.offset + perPage
    })
  }

  // pinFilterOnChange = (event) => {
  //   console.log('hi from onchange', event.target.value)
  //   this.setState({
  //     inputValue: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
       
        <TopBar />
        {/* <SearchTool searchResults={this.searchResults} /> */}

        <div className="App">
          <header className="App-header">

            {/* PROPS BEING PASSED DOWN FROM PARENT TO CHILD COMPONENTS  */}

            <Infinite data={this.state.data} fetchData={this.fetchData} inputValue={this.state.inputValue}/>
          
          </header>
        </div>
        <FooterBar/>
      </div>
    );
  }

}

export default App;
