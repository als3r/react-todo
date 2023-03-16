import TopMenu from './components/TopMenu'
import ToDo from './components/ToDo'
import './App.css'

function App() {
  const menuItems = [
    { id: 0, title: 'ToDo', route: '/' },
    { id: 1, title: 'Budget', route: '/budget' },
  ]

  return (
    <div className="App">
      <TopMenu menuItems={menuItems} />
      <ToDo />
    </div>
  )
}

export default App
