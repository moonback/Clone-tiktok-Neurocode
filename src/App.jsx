import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { 
  FaHome, 
  FaSearch, 
  FaPlusSquare, 
  FaInbox, 
  FaUser 
} from 'react-icons/fa'

import Home from './pages/Home'
import Discover from './pages/Discover'
import Inbox from './pages/Inbox'
import Profile from './pages/Profile'
import CreateVideoModal from './components/CreateVideoModal'

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <Router>
      <AppContainer>
        <RouteContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </RouteContainer>
        
        <BottomNavigation>
          <NavItem to="/" end>
            <FaHome /> Home
          </NavItem>
          <NavItem to="/discover">
            <FaSearch /> Discover
          </NavItem>
          <CreateButton onClick={() => setShowCreateModal(true)}>
            <FaPlusSquare />
          </CreateButton>
          <NavItem to="/inbox">
            <FaInbox /> Inbox
          </NavItem>
          <NavItem to="/profile">
            <FaUser /> Profile
          </NavItem>
        </BottomNavigation>

        {showCreateModal && (
          <CreateVideoModal onClose={() => setShowCreateModal(false)} />
        )}
      </AppContainer>
    </Router>
  )
}

const AppContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
  position: relative;
`

const RouteContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
`

const BottomNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #121212;
  color: white;
`

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: var(--text-secondary);
  
  &.active {
    color: var(--text-primary);
  }

  svg {
    margin-bottom: 4px;
    font-size: 20px;
  }
`

const CreateButton = styled.button`
  background-color: var(--accent-color);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`

export default App
