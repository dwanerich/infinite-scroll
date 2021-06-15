import React from 'react'
// import data from './data'


class Infinite extends React.Component {

    // METHOD LISTENS FOR SCROLL TO REACH BOTTOM OF WINDOW

    handleScroll = (e) => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= docHeight) {
            this.props.fetchData()
        }
    }
    
    //  LIFECYCLE METHODS 

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

                {/*  MAPPING THRU JSON TO DISPLAY IMAGES & LIKES ATTRIBUTES ON PIN CARDS*/}

                {this.props.data.map((pinDetail, index) =>{
                    return <div className='pinCard'>

                        <img ref='image' alt='' className='pinImage' src={pinDetail['images']['236x']['url']} />
                        <h4>{pinDetail['like_count']}</h4>

                    </div>
                })}
            </div>
                
        );
    }
}

export default Infinite;
