import { Typography } from '@material-ui/core'
import React from 'react'
import './ContactCard.scss'

export default function ContactCard({ contact, onClick }) {
  return (
    <div onClick={onClick} className="contactCardContainer">
      <div className="contactName">
        <div className="contactImage">{contact.abbreviation}</div>
        <Typography>{contact.name}</Typography>
      </div>
      <div className="contactEmail">{contact.email}</div>
      <div className="contactNumber">{contact.phoneNumber}</div>
    </div>
  )
}
