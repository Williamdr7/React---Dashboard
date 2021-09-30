import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import CarIcon from '../../images/icons/Car Front View.svg'
import MileageIcon from '../../images/icons/Mileage.svg'
import PriceTag from '../../images/icons/Price Tag.svg'
import Calendar from '../../images/icons/Calendar.svg'
import './CardRow.scss'

export default function CardRow() {
  return (
    <div className="cardRow">
      <InfoCard title="Veículos publicados" iconPath={CarIcon} value="26" />
      <InfoCard title="Preço médio" iconPath={PriceTag} value="R$ 41.5k" />
      <InfoCard title="Km médio" iconPath={Calendar} value="68.800 km" />
      <InfoCard
        title="Idade média do estoque"
        iconPath={MileageIcon}
        value="4 anos"
      />
    </div>
  )
}
