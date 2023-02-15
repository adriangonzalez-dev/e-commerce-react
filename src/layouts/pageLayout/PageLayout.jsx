import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
import { useTheme } from '../../hooks'

export const PageLayout = ({children}) => {
  const {mode} = useTheme()
  return (
    <main className={`container d-flex flex-column align-items-center justify-content-between p-0 m-auto ${mode ? 'darkMode' : 'lightMode'}`}>
        {children}
    </main>
  )
}
