import { Typography } from '@material-ui/core'
import React from 'react'
import { BiSliderAlt } from 'react-icons/bi'
export default function FilterButton() {
  return (
    <div className="filterButton">
      <BiSliderAlt size={25} />
      <Typography>Filtrar</Typography>
    </div>
  )
}
