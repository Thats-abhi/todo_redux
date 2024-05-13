import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {
  
  return (
    <div className='bg-gray-700 py-4 px-4 flex-col justify-center items-center h-screen'>
    <AddTodo/>
    <Todos />
    </div>
  )
}

export default App
