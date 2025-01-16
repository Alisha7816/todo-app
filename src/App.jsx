import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>

      <header className="text-center text-white py-4 text-2xl font-bold">
        Welcome to My To-Do App
      </header>

      <Todo />

      <footer className="text-center text-gray-400 py-4 text-sm">
      <p>&copy; 2025 Alisha Aryal. All Rights Reserved.</p>
      </footer>
      
    </div>
  )
}

export default App;
