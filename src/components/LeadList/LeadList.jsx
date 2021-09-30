import React from 'react'
import LeadCard from './LeadCard/LeadCard'
import './LeadList.scss'
import Olx from '../../images/companies/Olx.svg'
import Wm from '../../images/companies/Wm.svg'
import iCarros from '../../images/companies/iCarros.svg'
import AutoLine from '../../images/companies/Autoline.svg'
import MercadoLivre from '../../images/companies/Olx.svg'
import SectionTitle from '../Utils/SectionTitle'

export default function LeadList() {
  return (
    <div className="leadListContainer">
      <SectionTitle title="Lead por portal (últimos 30 dias)" />
      <LeadCard company={{ name: 'OLX', img: Olx, value: 40 }} />
      <LeadCard company={{ name: 'Webmotors', img: Wm, value: 29 }} />
      <LeadCard company={{ name: 'iCarros', img: iCarros, value: 18 }} />
      <LeadCard company={{ name: 'AutoLine', img: AutoLine, value: 7 }} />
      <LeadCard
        company={{ name: 'Mercado Livre', img: MercadoLivre, value: 40 }}
      />
      <LeadCard company={{ name: 'OLX', img: Olx, value: 40 }} />
      <LeadCard company={{ name: 'OLX', img: Olx, value: 40 }} />
      <LeadCard company={{ name: 'OLX', img: Olx, value: 40 }} />
      <LeadCard company={{ name: 'OLX', img: Olx, value: 40 }} />
    </div>
  )
}
