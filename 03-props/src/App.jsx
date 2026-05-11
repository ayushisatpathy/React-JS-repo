import React from 'react'
import Cards from './components/Cards'


const App = () => {
  return (
    <div className='parent'>
      
    <Cards user = 'aman' age = {18} img = 'https://images.unsplash.com/photo-1768036479363-0810baba6613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    <Cards user = 'sarthak' age = {16} img = "https://plus.unsplash.com/premium_photo-1774271492663-a7d50adbed56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    
    </div>
  )
}

export default App
