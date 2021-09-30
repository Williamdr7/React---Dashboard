import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashboardIcon from '../../images/icons/Dashboard.svg'
import ShoppingIcon from '../../images/icons/Shopping Tags.svg'
import CalendarIcon from '../../images/icons/Calendar.svg'
import CarIcon from '../../images/icons/Car Front View.svg'
import RocketIcon from '../../images/icons/Rocket.svg'
import UserIcon from '../../images/icons/User Circle.svg'
import ChartIcon from '../../images/icons/Chart.svg'
import BankIcon from '../../images/icons/Bank.svg'
import Unidade from '../../images/Unidade de negócio.svg'
import RightActions from '../../images/icons/Right Actions.svg'
import { BiArrowToRight, BiArrowToLeft } from 'react-icons/bi'

import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
} from 'react-pro-sidebar'

import { Link } from 'react-router-dom'
import './SideBar.scss'
import logo from '../../images/logo.svg'
import userImg from '../../images/User.svg'
export default function SideBar() {
  let location = useLocation()
  const [closed, setClosed] = useState(false)

  return (
    <div className="menuBox">
      <ProSidebar
        className={closed ? 'proSideBarBoxClosed' : 'proSideBarBox'}
        collapsed={closed}
      >
        <div className="menuFixedDesktop">
          <Link to="/dashboard">
            <div className="logoContainer">
              <img src={logo} alt="logo" />
              <img
                className="selectSource"
                src={Unidade}
                alt="Unidade de negócio"
              />
            </div>
          </Link>
          <div className="optionsMenu">
            <div className="rightOptions">
              <img alt="Mock de ações do menu" src={RightActions} />
              <img src={userImg} alt="User" />
            </div>
          </div>
        </div>
        <ArrowContainer closed={closed} setClosed={setClosed} />
        <SidebarHeader className="sideMenuHeader"></SidebarHeader>
        <SidebarContent className="w-100">
          <Menu className="menuContainer">
            {TABS.map((tab) => {
              const isSelectedTab =
                tab.to === '/dashboard' && location.pathname === '/'
                  ? true
                  : location.pathname.includes(
                      tab.to.substring(0, tab.to.length)
                    )
              return (
                <MenuItem
                  key={tab.label}
                  className={`menuItem ${isSelectedTab && 'selected'} ${
                    closed && 'closed'
                  }`}
                  icon={
                    <img
                      alt={tab.icon + ' Icon'}
                      className={isSelectedTab ? 'selectedTabIcon' : 'tabIcon'}
                      src={tab.icon}
                    />
                  }
                >
                  <Link
                    className={isSelectedTab ? 'selectedTabLink' : 'tabLink'}
                    to={tab.to}
                  >
                    {tab.label}
                  </Link>
                </MenuItem>
              )
            })}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  )
}

const ArrowContainer = ({ setClosed, closed }) => {
  return (
    <div className="arrowBox">
      {closed ? (
        <BiArrowToRight
          color="#555"
          onClick={() => setClosed(false)}
          className="arrowIcon"
        />
      ) : (
        <BiArrowToLeft
          onClick={() => setClosed(true)}
          color="#555"
          className="arrowIcon"
        />
      )}
    </div>
  )
}

const TABS = [
  {
    icon: DashboardIcon,
    label: 'Resumo',
    to: '/dashboard',
  },
  {
    icon: ShoppingIcon,
    label: 'Oportunidades',
    to: '#',
  },
  {
    icon: CalendarIcon,
    label: 'Agenda',
    to: '#',
  },
  {
    icon: CarIcon,
    label: 'Veículos',
    to: '#',
  },
  {
    icon: RocketIcon,
    label: 'Publicação',
    to: '#',
  },
  {
    icon: UserIcon,
    label: 'Contatos',
    to: '/contacts',
  },
  {
    icon: ChartIcon,
    label: 'Analytics',
    to: '#',
  },
  {
    icon: BankIcon,
    label: 'Financiamento',
    to: '#',
  },
]
