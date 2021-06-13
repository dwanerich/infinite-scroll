import React from 'react'
import data from './data'


class Infinite extends React.Component {
    // constructor(props) {
    //     super(props)

    // state = {}

    handleScroll = (e) => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= docHeight) {
            console.log(alert('you hit the bottom'))
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    render() {
        console.log(this.props)
        return (
            <div className='body'>
                {data.map((pinDetail, index) =>{
                    return <div className='pinCard'>

                        <img ref='image' alt='' className='pinImage' src={pinDetail['images']['236x']['url']} />

                    </div>
                })}
            </div>
                
        );
    }
}

export default Infinite;
