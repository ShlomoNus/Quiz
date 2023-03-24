import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import StartPage from './pages/StartPage'

function App() {

  return (
    <BrowserRouter>
    <VStack h='100%' justify='center'>
    <Routes>
      <Route path='/' element={<StartPage/>} />
      <Route path='/quiz' element={<QuizPage/>}  />
      <Route path='/result' element={<ResultPage/>} />  
    </Routes>
    </VStack>
    </BrowserRouter>
  )
}

export default App
