import React from 'react'
import User from './components/UserComponents/User.jsx'
import { UserProvider } from  './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
        <User />
    </UserProvider>
  )
}
