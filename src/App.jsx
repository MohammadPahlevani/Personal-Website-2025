import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  const router = useRoutes(routes)
  return (
    <div className='bg-purple-100/50 min-h-screen pb-20'>
      {router}
    </div>
  )
}

export default App
