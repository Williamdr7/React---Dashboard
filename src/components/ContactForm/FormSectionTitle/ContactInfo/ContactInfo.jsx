import { FormControl, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import FormSectionTitle from '../FormSectionTitle'

export default function ContactInfo() {
  //simulando state recebido
  const [contactInfo, setContactInfo] = useState({
    name: ' ',
    lastName: ' ',
    email: ' ',
    phoneNumber: ' ',
    gender: 'Masculino',
    rg: ' ',
    cpf: ' ',
  })

  const handleChange = (name, value) => {
    setContactInfo({ ...contactInfo, [name]: value })
  }
  return (
    <>
      <FormSectionTitle title="Dados Pessoais" />

      <div className="contactInfo">
        <TextField
          className="defaultTextField"
          variant="outlined"
          label="Nome"
          value={contactInfo.name}
          onChange={(ev) => handleChange('name', ev.target.value)}
        />
        <TextField
          className="defaultTextField"
          variant="outlined"
          label="Sobrenome"
          value={contactInfo.lastName}
          onChange={(ev) => handleChange('lastName', ev.target.value)}
        />
        <TextField
          className="defaultTextField"
          variant="outlined"
          label="E-mail"
          value={contactInfo.email}
          onChange={(ev) => handleChange('email', ev.target.value)}
        />
        <TextField
          className="defaultTextField"
          variant="outlined"
          label="Telefone"
          value={contactInfo.phoneNumber}
          onChange={(ev) => handleChange('phoneNumber', ev.target.value)}
        />
        <div className="doubleColumn">
          <FormControl>
            <Select
              className="selectGender defaultTextField"
              variant="outlined"
              value={contactInfo.gender}
              onChange={(ev) => handleChange('name', ev.target.value)}
            >
              <MenuItem value={'Masculino'}>Masculino</MenuItem>
              <MenuItem value={'Feminino'}>Feminino</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="doubleColumn">
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Rg"
            value={contactInfo.rg}
            onChange={(ev) => handleChange('rg', ev.target.value)}
          />
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Cpf"
            value={contactInfo.cpf}
            onChange={(ev) => handleChange('cpf', ev.target.value)}
          />
        </div>
      </div>
    </>
  )
}
