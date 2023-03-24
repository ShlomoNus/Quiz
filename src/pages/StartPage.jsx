import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Text, VStack } from '@chakra-ui/react'

export default function StartPage() {
  const navigate = useNavigate();

  function startQuize (){
    navigate('/quiz')
  }
  return (
    <VStack spacing={8} >
       <Text fontSize='3xl'>Should we start?</Text>
        <Button onClick={startQuize} colorScheme='blue' variant='solid'>Hit Me !!!</Button>
    </VStack>
  )
}
