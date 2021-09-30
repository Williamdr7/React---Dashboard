import React from 'react'
import SectionTitle from '../Utils/SectionTitle'
import './InfoCard.scss'

export default function InfoCard({ title, value, iconPath }) {
  return (
    <div className="cardShape">
      <SectionTitle title={title} />
      <h4 className="cardValue">{value}</h4>
      <div className="cardIconContainer">
        <img className="cardIcon" alt={title + ' icon'} src={iconPath} />
      </div>
    </div>
  )
}
