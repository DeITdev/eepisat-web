import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition">
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound