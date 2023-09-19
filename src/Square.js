import React from 'react';
import './Square.css'

export const Square = ({value, onClick}) => {

    return (
        <button className='Square' onClick={onClick}>{value}</button>
        )
}