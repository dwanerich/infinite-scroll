import React from 'react'
// import data from './data'

// CURRENTLY CONSOLE DOT LOGGING INPUT ONCHANGE

class SearchTool extends React.Component {

    render() {
        

    return (
        <>
        <input type="text" className='searchbar' value={this.props.inputValue}
        onChange={(e) => {(console.log(e.target.value))}} placeholder="🔎  Search"></input>

        </>
        
    )}
}

export default SearchTool;
