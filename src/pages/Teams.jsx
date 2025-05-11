import React from 'react'
import { teamStructure, teamMembers } from '../constants'

const Teams = () => {
  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Our Teams</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Team Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamStructure.map((team, index) => (
              <div key={index} className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
                <h3 className="text-xl font-medium mb-2">{team.name}</h3>
                <p>{team.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Team Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-blue-900/20 p-4 rounded-lg border border-blue-800 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
                  {/* Use placeholder if image path doesn't work */}
                  <img
                    src={member.imgPath}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/api/placeholder/128/128';
                    }}
                  />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-blue-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Teams