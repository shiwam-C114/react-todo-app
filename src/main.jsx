import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoProvider } from './context/TodoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ChakraProvider>
  </React.StrictMode>
)
