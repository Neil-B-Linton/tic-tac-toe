import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Login = () => {

    return (
        <Box bgImg={require('../../assets/olukMando.gif')} bgSize='contain' bgRepeat='no-repeat' bgPos='center' h='100%' w='100%' display='flex' justifyContent='center' alignItems='center'>
            <Link to={'/intro'} className='introButton'>
                <Button w='20em' mb='100' opacity='.1'></Button>
            </Link>
        </Box>
    )
}