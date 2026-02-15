import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  const [selectedView, setSelectedView] = useState('overview')

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar selectedView={selectedView} onViewChange={setSelectedView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Dashboard view={selectedView} />
        </main>
      </div>
    </div>
  )
}

export default App





