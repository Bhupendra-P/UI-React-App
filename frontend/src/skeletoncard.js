// CustomCard.js
import React from 'react';

const SKCard = ({ width, height }) => {
    const cardStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#e4e4e4',
        padding: '10px',
        borderRadius: '8px'
    };

    return (
        <div style={cardStyle}>
        </div>
    );
};

export default SKCard;
