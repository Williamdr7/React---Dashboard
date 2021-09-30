import React from 'react'
import { FormControlLabel, Radio, Typography } from '@material-ui/core'
import SectionTitle from '../Utils/SectionTitle'
import './ContactForm.scss'

import BankInfo from './FormSectionTitle/BankInfo/BankInfo'
import ContactInfo from './FormSectionTitle/ContactInfo/ContactInfo'
import ShippingInfo from './FormSectionTitle/ShippingInfo/ShippingInfo'
import { ChevronLeft } from '@material-ui/icons'

export default function ContactForm({ toggleForm }) {
  return (
    <>
      <h4 onClick={toggleForm} className="editFormTitle">
        <ChevronLeft /> Editar Contato
      </h4>
      <div className="formContainer">
        <div className="formTitle">
          <SectionTitle title="Informações" />
        </div>
        <div className="personTypeSection">
          <FormControlLabel
            className="personType"
            value="pessoa_fisica"
            control={<Radio checked={true} className="personTypeRadio" />}
            label={
              <Typography className="personTypeSection">
                Pessoa Física
              </Typography>
            }
          />
          <FormControlLabel
            className="personType"
            value="pessoa_juridica"
            control={<Radio checked={false} />}
            label={
              <Typography className="personTypeSection">
                Pessoa Jurídica
              </Typography>
            }
          />
        </div>
        <ContactInfo />
        <ShippingInfo />
        <BankInfo />
      </div>
    </>
  )
}
