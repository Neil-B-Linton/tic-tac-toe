import React, { useState, useEffect } from 'react';
import './Game.css'
import { Board } from '../board/Board';
import { determineWinner } from '../../WinHook';
import { checkDraw } from '../../DrawHook';

export const Game = () => {
    const [ board, setBoard ] = useState(Array(9).fill(null));
    const [ xTurn, setXTurn ] = useState(true);
    const winner = determineWinner(board);
    const draw = checkDraw(board)
    const [ xWins, setXWins ] = useState(0);
    const [ oWins, setOWins ] = useState(0);
    const boardCopy = [...board];

    const handleClick = (i) => {
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xTurn ? 'X' : 'O';
        setBoard(boardCopy);
        setXTurn(!xTurn)
    }

    const resetMoves = () => {
        return (
            <button onClick={() => setBoard(Array(9).fill(null))}>Reset Game</button>
        )
    }

    useEffect(() => {

        if (winner === 'X') {
            return setXWins(xWins + 1)
        } else if (winner === 'O') {
            return setOWins(oWins + 1)
        } 

    }, [winner])

    return (
        <div className='GameWrapper'>
            <div className='X'>
                <p>X</p>
                <p>Wins: {xWins}</p>
            </div>
            <div className='BoardWrapper'>
                {draw && <p>Draw Game</p>}
                {winner && <p>{winner} Win's</p>}
                <Board squares={board} onClick={handleClick}/>
                {resetMoves()}
            </div>
            <div className='O'>
                <p>O</p>
                <p>Wins: {oWins}</p>
            </div>
        </div>
    )
}