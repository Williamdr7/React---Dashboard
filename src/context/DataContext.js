import React, { useEffect, useState } from 'react'
import { DataService } from '../services/data.service'

const DataContext = React.createContext()

function DataContextProvider({ children }) {
  const [carsList, setCarsList] = useState([])
  const [loading, setLoading] = useState(true)

  async function getCarsList() {
    DataService.fetchCarsList()
      .then(({ data }) => {
        setCarsList(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getCarsList()
  }, [])

  return (
    <DataContext.Provider
      value={{
        carsList,
        loading
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext

export { DataContextProvider }
