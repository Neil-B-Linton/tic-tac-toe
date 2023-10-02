import React, { useState } from 'react';
import './Board.css'
import { Square } from '../square/Square';
import { Box } from '@chakra-ui/react';

export const Board = ({ squares, onClick }) => {

    return (
        <Box className="Board" border='4px solid green' borderRadius='lg' h='50%' w='30%' display='grid' gridTemplate='repeat(3, 1fr) / repeat(3, 1fr)' opacity='.7'>
            {squares.map((square, i) => <Square key={i} value={square} onClick={() => onClick(i)} />)}
        </Box>
    )
}