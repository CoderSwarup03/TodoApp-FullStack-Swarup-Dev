import React, { useState } from 'react'

const TodoInput = ({ createTodo, todos }) => {
    const [input, setInput] = useState('')

    const handleSubmit = () => {
        if (input === '' || input.trim() === '') {
            setInput('')
            alert('Please enter a todo');
            return
        }

        const existsItem = todos.find((item) => item.title.toLowerCase() === input.toLowerCase())
        if (existsItem) {
            alert('Todo already exists');
            setInput('')
            return
        }

        createTodo(input)
        setInput('')
    }

    return (
        <>
            <div className='flex flex-col md:flex-row gap-2'>
                <input
                    placeholder='Enter todo title'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='border-2 border-green-500 outline-none w-full md:w-[80%] rounded-md px-3 py-2 text-lg text-gray-500'
                    type="text" />
                <button
                    onClick={() => handleSubmit()}
                    className='w-full md:w-[20%] bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md text-white font-semibold cursor-pointer'
                >Add</button>
            </div>
        </>
    )
}

export default TodoInput