
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60',
    intro: '',
    color: 'blue',
    tag: 'Satisfied'
  },

  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60',
    intro: '',
    color: 'green',
    tag: 'Underserved'
  },

  {
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60',
    intro: '',
    color: 'orange',
    tag: 'Underbanked'
  },

  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60',
    intro: '',
    color: 'pink',
    tag: 'New Users'
  },

  {
    img: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60',
    intro: '',
    color: 'purple',
    tag: 'Average'
  }
]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
