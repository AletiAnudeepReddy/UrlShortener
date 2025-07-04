import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-6 px-5 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <div className="text-xl font-bold">
          <Link href="/">BitLinks</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-4 items-center">
          <Link href="/"><li className="hover:underline">Home</li></Link>
          <Link href="/about"><li className="hover:underline">About</li></Link>
          <Link href="/shorten"><li className="hover:underline">Shorten</li></Link>
          <Link href="/contact"><li className="hover:underline">Contact</li></Link>
          <Link target='_blank' href="https://github.com/AletiAnudeepReddy"><li className="hover:underline">GitHub</li></Link>
        </ul>

        {/* Copyright */}
        <p className=" text-gray-100">&copy; {new Date().getFullYear()} BitLinks. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
