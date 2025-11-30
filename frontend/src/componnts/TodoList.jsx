import React from 'react'
import TodoItem from './TodoItem'
import { useTodo } from '../context/TodoProvider'

const TodoList = () => {
    const {todos} = useTodo();
    return (
        <>
            <div className='bg-gray-50'>
                {todos.map((item) => {
                    return (
                        <TodoItem key={item._id} todo={item}/>
                    )
                })}
            </div>
        </>
    )
}

export default TodoList