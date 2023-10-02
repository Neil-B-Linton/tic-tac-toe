import React, { useState, useEffect } from 'react';
import { Game } from './components/game/Game';
import { Intro } from './components/intro/Intro';
import { Login } from './components/login/Login';
import './App.css';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

const App = () => {



  return (
    <Flex w='100vw' h='100vh' bg='black' flexDirection='column' justifyContent='center' alignItems='center'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/intro' element={<Intro />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Flex>
  )
}

export default App;
