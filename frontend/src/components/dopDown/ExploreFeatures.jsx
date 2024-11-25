import React from 'react'
import { Link } from 'react-router-dom'

const ExploreFeatures = () => {
  return (

    <div className="block w-full text-center px-4 py-4 text-lg rounded-md bg-black "  >
      <Link
        to="/features"
      >
        Features
      </Link>
    </div>
  )
}

export default ExploreFeatures
