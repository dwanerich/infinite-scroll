import React from 'react'
import data from './data'


class Infinite extends React.Component {
    

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>JSON data goes here:</h1>
                {data.map((pinDetail, index) =>{
                    return <div className='pinCard'>
                        <img alt="champion-image" height='250px' width='250px' className='pinImage' src={pinDetail.image} />
                        <h2>{pinDetail.title}</h2>
                    <p>{pinDetail.content}</p>
                    <p>{pinDetail.year}</p>
                    </div>
                })}
            </div>
                
        );
    }
}

export default Infinite;
