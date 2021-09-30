import { MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import FormSectionTitle from '../FormSectionTitle'

export default function BankInfo() {
  //simulando state recebido
  const [bankInfo, setBankInfo] = useState({
    bank: '341 - Itaú Unibanco S/A',
    accountType: 'Corrente',
    agency: ' ',
    account: ' ',
    digit: ' ',
  })

  const handleChange = (name, value) => {
    setBankInfo({ ...bankInfo, [name]: value })
  }
  return (
    <>
      <FormSectionTitle title="Dados Bancários" />
      <div className="bankInfo">
        <div className="aColumn">
          <Select
            className="defaultTextField"
            variant="outlined"
            value={bankInfo.bank}
            onChange={(ev) => handleChange('bank', ev.target.value)}
          >
            <MenuItem value={'341 - Itaú Unibanco S/A'}>
              341 - Itaú Unibanco S/A
            </MenuItem>
            <MenuItem value={'370 - Itaú Unibanco S/A'}>
              370 - Itaú Unibanco S/A
            </MenuItem>
          </Select>
        </div>
        <div className="fourColumns">
          <Select
            className="selectGender defaultTextField"
            variant="outlined"
            value={bankInfo.accountType}
            onChange={(ev) => handleChange('accountType', ev.target.value)}
          >
            <MenuItem value={'Corrente'}>Corrente</MenuItem>
            <MenuItem value={'Poupança'}>Poupança</MenuItem>
          </Select>
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Agência"
            value={bankInfo.agency}
            onChange={(ev) => handleChange('agency', ev.target.value)}
          />
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Conta"
            value={bankInfo.account}
            onChange={(ev) => handleChange('account', ev.target.value)}
          />
          <TextField
            className="defaultTextField"
            variant="outlined"
            label="Dígito"
            value={bankInfo.digit}
            onChange={(ev) => handleChange('digit', ev.target.value)}
          />
        </div>
      </div>
    </>
  )
}
