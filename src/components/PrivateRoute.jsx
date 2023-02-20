import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

export default function PrivateRoute() {
    // importing custom hooks useAuthStatus
    const {loggedIn, checkingStatus} = useAuthStatus()
    if (checkingStatus) {
        return <Spinner />
    }
  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}
