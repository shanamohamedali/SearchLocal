import { useState } from 'react'
import { Search } from './components/search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Search/>
  )
}

export default App
