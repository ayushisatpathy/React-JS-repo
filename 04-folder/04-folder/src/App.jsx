import React from 'react'
import './index.css'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>

      <div className="card">

        <div className="top">
          <img
            src="https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=500&auto=format&fit=crop&q=60"
            alt=""
          />

          <button>
            Save <Bookmark size={18} />
          </button>
        </div>

        <div className="center">

          <h3>
            Amazon <span>5 days ago</span>
          </h3>

          <h2>Senior UI/UX Designer</h2>

          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>

        </div>

        <div className="bottom">

          <div>

            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>

            <button>Apply Now</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App