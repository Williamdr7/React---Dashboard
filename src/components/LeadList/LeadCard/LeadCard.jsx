import React from 'react'
import './LeadCard.scss'
export default function LeadCard({ company }) {
  return (
    <div className="leadCardContainer">
      <div className="companyInfo">
        <div className="companyImgContainer">
          <img src={company.img} alt={company.name} className="companyImg" />
        </div>
        <p className="companyName">{company.name}</p>
      </div>
      <p className="leadValue">{company.value}</p>
    </div>
  )
}
