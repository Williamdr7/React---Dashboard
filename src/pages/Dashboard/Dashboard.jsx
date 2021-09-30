import React from 'react'
import CardRow from '../../components/CardRow/CardRow'
import CarsList from '../../components/CarsList/CarsList'
import LeadList from '../../components/LeadList/LeadList'
import LineChart from '../../components/LineChart/LineChart'
import ContentTitle from '../../components/Utils/ContentTitle'
import './Dashboard.scss'

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <ContentTitle title="Resumo" />
      <div>
        <CardRow />
      </div>
      <div className="leadBlock">
        <LineChart title="Leads (últimos 30 dias)" />
        <LeadList />
      </div>
      <div className="carsLists">
        <CarsList statusType="Vencido" />
        <CarsList statusType="Agendado" />
      </div>
    </div>
  )
}
