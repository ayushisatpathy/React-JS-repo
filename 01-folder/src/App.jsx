// import card from './components/card'
// const App = () => {
//   return (
//     // <>
//     //   {/* Fragment lets us return multiple elements without adding extra divs */}

//     //   <div id='dad'>
//     //     <h1 id='child1'>Hello</h1>
//     //     <h2 id='child2'>Hello</h2>
//     //   </div>

//     //   <div id="chacha"></div>
//     // </>
//     <div>
//       <card />
    
//     </div>
//   )
// }

// export default App

import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Card />
      
    </div>
  )
}

export default App 