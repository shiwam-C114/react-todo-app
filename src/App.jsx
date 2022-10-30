import { Box, Center, Heading, Tooltip } from '@chakra-ui/react'
import { useContext } from 'react'
import TodoTemplate from './components/TodoTemplate';
import InputComponent from './components/InputComponent';
import TodoContext from './context/TodoContext';

function App() {
  const { todos } = useContext(TodoContext)
  return (
    <Box margin={"0 29%"} maxWidth={"40%"} >
      <Center margin={"2em 0"}>
        <Tooltip label="Enter your todo in the box below. You can toggle the state, edit the tasks and delete it too. enjoy :)">
          <Heading>Todo App</Heading>
        </Tooltip>
      </Center>

      {/* adding todo */}
      <InputComponent />

      {/* showing  todos */}
      {todos.map((todo, i) => (
        <TodoTemplate key={todo.id} i={i} todo={todo} />
      ))}
    </Box>
  )
}

export default App
