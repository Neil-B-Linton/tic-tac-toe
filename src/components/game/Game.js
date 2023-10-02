import React, { useState, useEffect } from 'react';
import './Game.css'
import { Board } from '../board/Board';
import { determineWinner } from '../../WinHook';
import { checkDraw } from '../../DrawHook';
import { 
    Box, 
    Flex, 
    Text, 
    Icon,
    Heading,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { FaMandalorian, FaJedi } from 'react-icons/fa'

export const Game = () => {
    const [ board, setBoard ] = useState(Array(9).fill(null));
    const [ xTurn, setXTurn ] = useState(true);
    const winner = determineWinner(board);
    const draw = checkDraw(board)
    const [ xWins, setXWins ] = useState(0);
    const [ oWins, setOWins ] = useState(0);
    const boardCopy = [...board];
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (i) => {
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xTurn ? 'X' : 'O';
        setBoard(boardCopy);
        setXTurn(!xTurn)
    }

    const resetMoves = () => {
       setBoard(Array(9).fill(null))
       onClose()
    }

    useEffect(() => {

        if (winner === 'X') {
            onOpen()
            return setXWins(xWins + 1)
        } else if (winner === 'O') {
            onOpen()
            return setOWins(oWins + 1)
        } else if (draw) {
            onOpen()
        }

    }, [winner, draw])

    return (
        <Flex className='GameWrapper' bgImage={require('../../assets/chillMando.gif')} bgSize='cover' h='100%' w='100%' justifyContent='center'>
            <Flex className='BoardWrapper' bg='blackAlpha.600' flexDirection='column' alignItems='center' h='100%' w='100%' justifyContent='space-around'>
                <Flex className='logoWrapper' h='20%' w='30%' justifyContent='space-between' alignItems='center'>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Icon as={FaMandalorian} boxSize={14} boxShadow='dark-lg' border='2px solid' borderRadius='full' position='absolute' zIndex={1}/>
                        <Box bg='red.100' h='100%' w='1.5rem' display='flex' alignItems='center' justifyContent='center' position='relative' zIndex='2' top='5' left='5' borderRadius='full'>{xWins}</Box>
                    </Box>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Icon as={FaJedi} boxSize={14} boxShadow='dark-lg' border='2px solid' borderRadius='full' position='absolute' zIndex={1}/>
                        <Box bg='red.100' h='100%' w='1.5rem' display='flex' alignItems='center' justifyContent='center' position='relative' zIndex='2' top='5' left='5' borderRadius='full'>{oWins}</Box>
                    </Box>
                </Flex>
                <Board squares={board} onClick={handleClick}/>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
                <ModalOverlay/>
                <ModalContent alignItems='center' justifyContent='center' h='34%' w='60%' bgImage={require('../../assets/galaxySolo.gif')} bgSize='100%' bgClip='border-box' bgRepeat='no-repeat'>
                    <ModalHeader>{(winner && <Heading color='white'>{winner === 'X' ? 'Mandalorian' : 'Baby Yoda'} win's</Heading>) || (draw && <Heading color='white'>Draw Game</Heading>)}</ModalHeader>
                    <ModalFooter>
                        <Button onClick={() => resetMoves()}>Reset Game</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}