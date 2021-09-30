import { MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SearchInput from '../../../Utils/SearchInput'
import FormSectionTitle from '../FormSectionTitle'

export default function ShippingInfo() {
  //simulando state recebido
  const [shippingInfo, setShippingInfo] = useState({
    zipCode: '',
    address: ' ',
    number: ' ',
    complement: ' ',
    district: ' ',
    city: 'Ribeirão Preto',
    state: 'São Paulo',
  })

  const handleChange = (name, value) => {
    setShippingInfo({ ...shippingInfo, [name]: value })
  }
  return (
    <>
      <FormSectionTitle title="Endereço" />
      <div className="shippingInfo">
        <div className="aColumn">
          <SearchInput
            width="190px"
            className="defaultTextField dark"
            placeholder="Cep"
            variant="outlined"
            label="Name"
            value={shippingInfo.zipCode}
            onChange={(ev) => handleChange('zipCode', ev.target.value)}
          />
        </div>
        <div className="nineThreeColumn">
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Name"
            value={shippingInfo.address}
            onChange={(ev) => handleChange('address', ev.target.value)}
          />
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Name"
            value={shippingInfo.number}
            onChange={(ev) => handleChange('number', ev.target.value)}
          />
        </div>
        <div className="sixSixColumn">
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Name"
            value={shippingInfo.complement}
            onChange={(ev) => handleChange('complement', ev.target.value)}
          />
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Name"
            value={shippingInfo.district}
            onChange={(ev) => handleChange('district', ev.target.value)}
          />
        </div>
        <div className="nineThreeColumn">
          <Select
            onChange={(ev) => handleChange('city', ev.target.value)}
            className="defaultTextField"
            variant="outlined"
            value={shippingInfo.city}
          >
            <MenuItem value={'Ribeirão Preto'}>Ribeirão Preto</MenuItem>
            <MenuItem value={'São Paulo'}>São Paulo</MenuItem>
          </Select>
          <Select
            onChange={(ev) => handleChange('state', ev.target.value)}
            className="defaultTextField"
            variant="outlined"
            value={shippingInfo.state}
          >
            <MenuItem value={'São Paulo'}>São Paulo</MenuItem>
            <MenuItem value={'São Paulo<'}>São Paulo</MenuItem>
          </Select>
        </div>
      </div>
    </>
  )
}
