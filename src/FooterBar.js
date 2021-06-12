import React from 'react';

class FooterBar extends React.Component {



    render() {

        console.log(this.props)
        return (
            <div className='FooterBar'>

               

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

export default FooterBar;
