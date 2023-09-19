import React from 'react';
import './Board.css'
import { Square } from '../square/Square';

export const Board = ({ squares, onClick }) => {

    return (
        <div className="Board">
            <Square value='0' onClick={() => onClick('dummy value')}/>
            <Square value='1' onClick={() => onClick('dummy value')}/>
            <Square value='2' onClick={() => onClick('dummy value')}/>
            <Square value='3' onClick={() => onClick('dummy value')}/>
            <Square value='4' onClick={() => onClick('dummy value')}/>
            <Square value='5' onClick={() => onClick('dummy value')}/>
            <Square value='6' onClick={() => onClick('dummy value')}/>
            <Square value='7' onClick={() => onClick('dummy value')}/>
            <Square value='8' onClick={() => onClick('dummy value')}/>
        </div>
    )
}