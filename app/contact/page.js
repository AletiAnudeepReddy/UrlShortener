import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, MessageCircle } from 'lucide-react' // You can use emoji if you don’t want icons

const Contact = () => {
  return (
    <main className="min-h-[80vh] bg-purple-50 py-10 px-6 mt-10 md:px-24">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-md focus:outline-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-md focus:outline-purple-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border rounded-md focus:outline-purple-500 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded shadow"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-600" />
              <span className="text-gray-700">support@bitlinks.io</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-600" />
              <span className="text-gray-700">Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="text-purple-600" />
              <span className="text-gray-700">We usually reply within 24 hours</span>
            </div>
            <div>
              <p className="text-sm text-gray-600 mt-4">
                Want to collaborate or report a bug?{" "}
                <Link target='_blank' href="https://github.com/AletiAnudeepReddy" className="text-purple-600 underline">
                  Visit our GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
