import { Game } from './components/game/Game';
import { Intro } from './components/intro/Intro'
import './App.css';
import { Box, Flex, Heading } from '@chakra-ui/react';

const App = () => {

  return (
    <Flex w='100vw' h='100vh' bg='black' flexDirection='column' justifyContent='center' alignItems='center'>
      {/* <Game /> */}
      <Intro />
    </Flex>
  )
}

export default App;
