import { Typography } from '@material-ui/core'
import React from 'react'
import { MdAdd } from 'react-icons/md'
export default function AddButton() {
  return (
    <div className="addButton">
      <MdAdd size={25} />
      <Typography>Adicionar</Typography>
    </div>
  )
}
