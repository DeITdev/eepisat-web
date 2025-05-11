import React from 'react'
import { eepisatOnMedia } from '../constants'

const News = () => {
  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">News</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">EEPISAT on Media</h2>
          <div className="space-y-4">
            {eepisatOnMedia.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block bg-blue-900/20 p-6 rounded-lg border border-blue-800 hover:bg-blue-800/30 transition"
              >
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-blue-300">Source: {item.source}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default News