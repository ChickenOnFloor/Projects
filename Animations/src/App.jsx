import React from 'react'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <nav className=' flex justify-center items-center w-full h-12  p-4' >
        <ul className='flex justify-between w-6/12 font-bold'>
          <li className='p-2 hover:text-orange-400 hover:bottom-4'>Home</li>
          <li className='p-2'>Shop</li>
          <li className='p-2'>Contact</li>
          <li className='p-2'>Login</li>
        </ul>
      </nav>
    </div>
  )
}

export default App