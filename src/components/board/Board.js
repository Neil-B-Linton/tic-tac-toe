import React, { useState } from 'react';
import './Board.css'
import { Square } from '../square/Square';

export const Board = ({ squares, onClick }) => {

    return (
        <div className="Board">
            {squares.map((square, i) => <Square key={i} value={square} onClick={() => onClick(i)} />)}
        </div>
    )
}