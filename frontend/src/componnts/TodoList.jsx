import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <>
            <div className='bg-gray-50'>
                {todos.map((item) => {
                    return (
                        <TodoItem key={item._id} todo={item} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    )
                })}
            </div>
        </>
    )
}

export default TodoList