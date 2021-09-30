import React from 'react'
import { formatPrice } from '../../../helpers/format'
import pickbgColor from '../../../helpers/pickBgColor'
import './CarCard.scss'

export default function CarCard({ car, statusType, publishedDate }) {
  return (
    <div className="cardContainer">
      <div>
        <div className="fluxContainer">
          <div>
            <img className="carImage" src={car.image} alt={car.model_name} />
          </div>
          <div>
            <div>
              <p className="modelText">{car.model_name}</p>
            </div>
            <div>
              <p className="descriptionText">{car.version_name}</p>
            </div>
            <div className="descriptionContainer">
              <p className="descriptionText">
                {car.model_year}/{car.model_year}
              </p>
              <p className="descriptionText fuel">{car.fuel_type}</p>
            </div>
            <div className="descriptionContainer">
              <p className="descriptionText">{formatPrice(car.mileage)} km </p>
              <p className="descriptionText fuel price">
                {formatPrice(car.ad_selling_price)}
              </p>
            </div>
          </div>
          <div className="carStatus">
            <p className={`status ${pickbgColor(statusType)}`}>{statusType}</p>
            <p className="publishedDate">{publishedDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
