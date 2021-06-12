import React from 'react'
import data from './data'


class Infinite extends React.Component {
    

    render() {
        console.log(this.props)
        return (
            <div className='body'>
                {/* <h1>JSON data goes here:</h1> */}
                {data.map((pinDetail, index) =>{
                    return <div className='pinCard'>
                        {pinDetail.description}
                        {pinDetail.title}
                        <img ref='image' src={pinDetail.image_signature} />
                        <img ref="image" src={pinDetail.visual_description} />
                        {pinDetail.repin_count}

                        <ul>
                            {pinDetail.provider_icon_url}
                        </ul>

                    </div>
                })}
            </div>
                
        );
    }
}

export default Infinite;
