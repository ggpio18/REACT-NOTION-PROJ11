import React from 'react'

const Home = () => {
  return (
    <>
        <div className="bg-zinc-900 text-white min-h-screen flex flex-col items-center">
          
          <div className="relative w-full h-96 bg-cover bg-center" style="background-image: url('https://placehold.co/1920x1080');">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <img src="https://placehold.co/100x100" alt="Notion Logo" className="w-24 h-24 mb-4"/>
              <h1 className="text-4xl font-bold">NOTION</h1>
              <h2 className="text-2xl">LIFE PLANNER</h2>
            </div>
          </div>
          
          <div className="container mx-auto p-4">
            <div className="bg-zinc-800 rounded-lg p-6">
              <h3 className="text-3xl mb-4">Life Planner</h3>
              <p className="text-zinc-400 mb-6">All your thoughts in one private place.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            <div className="bg-zinc-700 rounded-lg p-4">
              <img src="https://placehold.co/300x200" alt="Daily" className="rounded-lg mb-2"/>
              <h4 className="text-xl">Daily</h4>
              <ul className="text-zinc-400">
                <li>Planner</li>
                <li>Habits</li>
                <li>Journal</li>
              </ul>
            </div>
            
            <div className="bg-zinc-700 rounded-lg p-4">
              <img src="https://placehold.co/300x200" alt="Planners" className="rounded-lg mb-2"/>
              <h4 className="text-xl">Planners</h4>
              <ul className="text-zinc-400">
                <li>Meal Planner</li>
                <li>Travel Planner</li>
                <li>Workout Planner</li>
              </ul>
            </div>
            
            <div className="bg-zinc-700 rounded-lg p-4">
              <img src="https://placehold.co/300x200" alt="Personal" className="rounded-lg mb-2"/>
              <h4 className="text-xl">Personal</h4>
              <ul className="text-zinc-400">
                <li>Bookshelf</li>
                <li>Movies & Series</li>
                <li>Finance</li>
              </ul>
            </div>
            
            <div className="bg-zinc-700 rounded-lg p-4">
              <img src="https://placehold.co/300x200" alt="Goals" className="rounded-lg mb-2"/>
              <h4 className="text-xl">Goals</h4>
              <ul className="text-zinc-400">
                <li>Goals</li>
                <li>Vision</li>
                <li>Health</li>
              </ul>
            </div>
          </div>
        
          
          <div className="bg-zinc-700 rounded-lg p-4">
            <h4 className="text-xl mb-2">Overview</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr>
                    <th className="p-2">Task</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Write blog post</td>
                    <td className="p-2">Work</td>
                    <td className="p-2">January 28, 2024</td>
                  </tr>
                  <tr>
                    <td className="p-2">Meet Carl</td>
                    <td className="p-2">Life</td>
                    <td className="p-2">January 29, 2024</td>
                  </tr>
                  <tr>
                    <td className="p-2">Edit Photo</td>
                    <td className="p-2">Work</td>
                    <td className="p-2">January 30, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
          
          <div className="bg-zinc-700 rounded-lg p-4 mt-6">
            <h4 className="text-xl mb-2">Play Now</h4>
            <div className="flex items-center">
              <img src="https://placehold.co/100x100" alt="Music Cover" className="w-24 h-24 rounded-lg mr-4"/>
              <div>
                <p className="text-lg">Lofi Bollywood Mash</p>
                <p className="text-zinc-400">Pio Chill</p>
                <button className="mt-2 bg-purple-600 text-white py-1 px-3 rounded-lg">Save on Spotify</button>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
    </>
  )
}

export default Home