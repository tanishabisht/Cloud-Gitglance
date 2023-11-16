import * as React from 'react';

const CustomCard = ({content}) => {
    const color = content.like ? '#9A2D1E' : '#000'
    return (
        <div className='card_container'>
            <h3>{content.name}</h3>
            <p className='card_like' style={{color}}>Like</p>
        </div>
    );
}

export default CustomCard;