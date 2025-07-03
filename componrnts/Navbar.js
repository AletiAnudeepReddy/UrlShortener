import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-5 items-center text-white'>
        <div className='logo font-bold text-2xl'>
            BitLinks
        </div>
        <ul className='flex justify-center gap-4 items-center'>
            <Link className='hover:transition-all hover:font-bold' href="/"><li>Home</li></Link>
            <Link className='hover:transition-all hover:font-bold' href="/about"><li>About</li></Link>
            <Link className='hover:transition-all hover:font-bold' href="/generate"><li>Shorten</li></Link>
            <Link className='hover:transition-all hover:font-bold' href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3 items-center'>
                <Link href="/generate"><button className='hover:bg-purple-400 hover:h-9 bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/generate"><button className='hover:bg-purple-400 hover:h-9 bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar