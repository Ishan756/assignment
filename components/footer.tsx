import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Next Performer?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of event planners who trust Artistly to find amazing performers for their events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/artists" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Browse Artists
              </a>
              <a 
                href="/onboard" 
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Join as Artist
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>Made by Ishan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
