import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { IoArrowForwardCircle } from 'react-icons/io5'
import TodoContext from '../context/TodoContext'

function InputComponent() {
    const { setTodo, addTodo, todo } = useContext(TodoContext)
    return (
        <>
            <InputGroup margin={"1em 0"}>
                <Input
                    value={todo}
                    placeholder='Enter your task'
                    onChange={(e) => { setTodo(e.target.value) }}
                />
                <InputRightElement>
                    <IconButton
                        onClick={addTodo}
                        icon={<IoArrowForwardCircle />}
                    />
                </InputRightElement>
            </InputGroup>
        </>
    )
}

export default InputComponent