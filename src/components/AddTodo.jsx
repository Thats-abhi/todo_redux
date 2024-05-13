import React, { useState } from 'react'
import { addTodo} from '../features/todos/todoSlice';
import {useDispatch} from 'react-redux'

const AddTodo = () => {
    const [input,setInput]=useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(input !== ''){
            dispatch(addTodo(input));
        }
        setInput('');
    }
  return (
    <div className='flex justify-center'>
    <form onSubmit={handleSubmit} className='flex'>
        <input className='bg-gray-100 rounded mx-2 px-3' type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter todo'/>
        <button className='bg-blue-300 rounded px-2 py-0.5 hover:bg-blue-500 hover:text-white' type='submit'>Add todo</button>
    </form>
    </div>
  )
}

export default AddTodo
