import React from 'react'



class TopBar extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div>

                <button className="HeaderButtons">Home</button>
                <button className="HeaderButtons">Today</button>


                <input type="text" className='searchbar' placeholder="🔎 Search"></input>
                
                <span class="material-icons">
                    notifications
                </span>

                <span class="material-icons">
                    textsms
                </span>


                <span class="material-icons">
                    expand_more
                </span>

            </div>

        );
    }
}

export default TopBar;
