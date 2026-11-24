import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import Board from './pages/Board'
import Sprints from './pages/Sprints'
import Agents from './pages/Agents'
import Crews from './pages/Crews'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="board" element={<Board />} />
        <Route path="sprints" element={<Sprints />} />
        <Route path="agents" element={<Agents />} />
        <Route path="crews" element={<Crews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
