import { useState } from 'react'
import { Sidebar, Banner, Playlist } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Sidebar />
    </div>
  )
}

export default App
