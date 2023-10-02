import React from 'react';
import { Box, Icon} from '@chakra-ui/react'
import { FaMandalorian, FaJedi } from 'react-icons/fa'
import './Square.css'

export const Square = ({value, onClick}) => {

    return (
        <Box className='Square' bg='lightgreen' border='2px solid green' outline='none' cursor='pointer' display='flex' alignItems='center' justifyContent='center' h='auto' w='auto' fontSize='5xl' fontWeight='medium' onClick={onClick}>
            {value === 'X' ? <Icon as={FaMandalorian} border='2px solid' borderRadius='full'/> : null}
            {value === 'O' ? <Icon as={FaJedi} border='2px solid' borderRadius='full'/> : null}
        </Box>
        )
}