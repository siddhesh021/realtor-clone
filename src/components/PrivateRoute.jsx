import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'

export default function PrivateRoute() {
    // importing custom hooks useAuthStatus
    const {loggedIn, checkingStatus} = useAuthStatus()
    if (checkingStatus) {
        return <h1> Loading.... </h1>
    }
  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}
