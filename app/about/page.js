import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const poppins = localFont({
  src: '../Poppins-ExtraBold.ttf',
  variable: '--font-poppins',
  subsets: ['latin'],
})

const About = () => {
  return (
    <main className="min-h-screen bg-purple-50 py-10 px-6 md:px-24">
      <section className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold text-purple-800 mb-6 ${poppins.className}`}>
          About BitLinks
        </h1>

        <p className=" text-lg mb-4">
          <span className="font-semibold">BitLinks</span> is a simple, fast, and privacy-focused URL shortener built for everyone. Unlike traditional shorteners that track your clicks and force you to log in, we believe in **freedom and simplicity**.
        </p>

        <p className=" text-lg mb-4">
          Whether you're sharing links with friends or embedding them in documents, BitLinks ensures your links are **clean**, **secure**, and **easy to manage** — without unnecessary steps or data collection.
        </p>

        <h2 className="text-2xl font-bold text-purple-700 mt-8 mb-4">Why BitLinks?</h2>
        <ul className="list-disc pl-6  space-y-2">
          <li>No login or signup required</li>
          <li>Minimal, distraction-free design</li>
          <li>No analytics tracking or cookies</li>
          <li>100% free and open source</li>
        </ul>

        <h2 className="text-2xl font-bold text-purple-700 mt-10 mb-4">Our Mission</h2>
        <p className=" text-lg mb-6">
          We aim to build a privacy-first internet where tools work for users, not advertisers. BitLinks is our contribution to that mission — giving you full control over how your links are shared, with **zero compromise**.
        </p>

        <Link href="/shorten">
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded shadow-md">
            Try BitLinks Now
          </button>
        </Link>
      </section>
    </main>
  )
}

export default About
