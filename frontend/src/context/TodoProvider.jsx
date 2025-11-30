import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const createTodo = async (title) => {
        try {
            await axios.post('http://localhost:8001/todo/create', { title });
            await fetchTodos();
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    }

    const deleteTodo = async (_id) => {
        await axios.delete(`http://localhost:8001/todo/delete/${_id}`);
        await fetchTodos();
    }

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:8001/todo/getAll');
        console.log(response.data.data)
        setTodos(response.data.data);
    }

    const updateTodo = async (_id, title) => {
        const existItem = todos.find((item) => item._id === _id && item.title.toLowerCase() === title.toLowerCase());
        if (existItem) {
            alert('Todo already exists');
            return
        }

        await axios.put(`http://localhost:8001/todo/update/${_id}`, { title });
        await fetchTodos();
    }
    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <TodoContext.Provider value={{ createTodo, updateTodo, deleteTodo, todos }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider