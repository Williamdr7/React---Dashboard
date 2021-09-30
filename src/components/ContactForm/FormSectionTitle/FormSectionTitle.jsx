import React from 'react'
import { Typography } from '@material-ui/core'
import './FormSectionTitle.scss'

export default function FormSectionTitle({ title }) {
  return (
    <Typography component="h4" className="formSectionTitle">
      {title}
    </Typography>
  )
}
