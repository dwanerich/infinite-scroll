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
                
                <span class="material-icons" onClick={()=> (alert('you clicked me'))}>
                    notifications
                </span>

                <span class="material-icons">
                    textsms
                </span>


                <span class="material-icons">
                    expand_more
                </span>

                <div class="mdc-touch-target-wrapper" className='funButtons'>
                    <button class="mdc-fab mdc-fab--mini mdc-fab--touch">
                        <div class="mdc-fab__ripple"></div>
                        <span class="material-icons mdc-fab__icon">+</span>
                        <div class="mdc-fab__touch"></div>
                    </button>
                </div>

                <div class="mdc-touch-target-wrapper" className='funButtons'>
                    <button class="mdc-fab mdc-fab--mini mdc-fab--touch">
                        <div class="mdc-fab__ripple"></div>
                        <span class="material-icons mdc-fab__icon">?</span>
                        <div class="mdc-fab__touch"></div>
                    </button>
                </div>

            </div>

        );
    }
}

export default TopBar;
