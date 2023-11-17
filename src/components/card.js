import * as React from 'react';
import { useState } from 'react';

const CustomCard = ({content}) => {
    const [color, setColor] = useState(content.like ? '#9A2D1E' : '#B4B4B4')

    const toggleHandler = () => {
        setColor(prev => prev === '#9A2D1E' ? '#B4B4B4': '#9A2D1E')
    }

    return (
        <div className='card_container'>
            <h3>{content.name}</h3>
            <p className='card_like' style={{color}} onClick={toggleHandler}>Like</p>
        </div>
    );
}

export default CustomCard;