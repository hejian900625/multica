import { NavLink, Outlet } from 'react-router-dom'
import { workspace } from '../data/mock'

const NAV = [
  { to: '/', label: '概览', icon: '◧', end: true },
  { to: '/board', label: '任务看板', icon: '▤' },
  { to: '/sprints', label: '迭代', icon: '◔' },
  { to: '/agents', label: 'Agents', icon: '◉' },
  { to: '/crews', label: 'Crews', icon: '⛭' },
]

export default function Layout() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">M</span>
          <span className="brand-text">
            Multica
            <small>Board</small>
          </span>
        </div>
        <nav className="nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-foot">
          <span className="dot" />
          {workspace.space.name}
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
