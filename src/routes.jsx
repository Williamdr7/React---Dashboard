import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Sidebar from './components/SideBar/SideBar'
import ContactsTable from './pages/Contacts/ContactsTable'
import Dashboard from './pages/Dashboard/Dashboard'

const Routes = () => {
  return (
    <div className="generalContainer">
      <Router>
        <Sidebar />
        <div className="mainContainer">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/contacts" component={ContactsTable} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
export default Routes
