import React from 'react'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'
import SectionTitle from '../Utils/SectionTitle'
import CarCard from './CarCard/CarCard'
import './CarsList.scss'

export default function CarsList({ statusType }) {
  const { carsList, loading } = useContext(DataContext)
  if (!loading) {
    return (
      <div className="carsListContainer">
        <div className="carsListTitle">
          <SectionTitle title={`Test-drives ${statusType}s`} />
        </div>
        <div className="carsCardsContainer">
          {carsList &&
            carsList.length &&
            carsList.map((car) => (
              <CarCard
                car={car}
                publishedDate="Há 6 horas"
                statusType={statusType}
              />
            ))}
        </div>
      </div>
    )
  } else return <SectionTitle title="Loading..." />
}
