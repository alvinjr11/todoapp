import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center px-16 h-24 bg-sky-800 text-white'>
            <div className='text-3xl font-bold'>Logo</div>
            <ul className='flex gap-6 text-lg'>
                <li>Home</li>
                <li>Contact</li>
                <li>login</li>
                <li>sign up</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar