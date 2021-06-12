import React from 'react'
import SearchTool from './SearchTool';
import pinlogo from './pinlogo.png';



class TopBar extends React.Component {

   

    render() {

        console.log(this.props)
        return (
            <div className='TopBar'>

                <img src={pinlogo} height='39px'/>

                <button className="HomeButton">Home</button>
                <button className="TodayButton">Today</button>

                <SearchTool />
                
                <span class="material-icons" onClick={()=> (alert('No new notifications!'))}>
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
