import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Overview from './components/pages/Overview'
import './App.css'
import { Reports, ReportOne, ReportTwo } from './components/pages/Team'
import Form from './components/ValidationForm.js/Form'

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/report_1' exact component={ReportOne} />
        <Route path='/reports/report_2' exact component={ReportTwo} />
        <Route path='/signup' exact component={Form} />
      </Switch>
    </Router>
  )
}

export default App
