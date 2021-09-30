import React from 'react'
import { DataContextProvider } from './context/DataContext'
import Routes from './routes'
export default function App() {
  return (
    <>
      <DataContextProvider>
        <Routes />
      </DataContextProvider>
    </>
  )
}
