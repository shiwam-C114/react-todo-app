import { Button, Center, Flex, IconButton, Input, Text, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { IoEllipseOutline, IoEllipseSharp, IoTrash } from 'react-icons/io5';
import TodoContext from '../context/TodoContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function TodoTemplate({ todo, i }) {
  const { toggleIsDone, deleteTodo, editTodo } = useContext(TodoContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [updatedTask, setUpdatedTask] = useState("")
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        margin={"1em 0"}
        borderWidth="1px"
        bg='white'
        rounded="lg"
        shadow="xl" >
        <Flex>
          <Center margin={"0 1em"}>#{i + 1}</Center>
          <Center>
            {todo.isDone ?
              <IconButton onClick={() => toggleIsDone(todo.id)} icon={<IoEllipseSharp color='green' />} />
              :
              <IconButton onClick={() => toggleIsDone(todo.id)} icon={<IoEllipseOutline />} />
            }
          </Center>
        </Flex>

        <Center padding={"0 .5em"} cursor={"pointer"} onClick={onOpen}>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Task</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input placeholder='enter new task here' onChange={(e) => { setUpdatedTask(e.target.value) }} />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button onClick={() => { editTodo(todo.id, updatedTask); onClose() }} >Save</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Text >
            {todo.task}
          </Text>
        </Center>
        <Center>
          <IconButton onClick={() => deleteTodo(todo.id)} icon={<IoTrash />} />
        </Center>
      </Flex>
    </>
  )
}

export default TodoTemplate