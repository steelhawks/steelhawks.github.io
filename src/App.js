import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navigation } from './components/Navigation/Navigation.component';
import { ROUTES } from './routes/routes'
import { Route, Switch } from 'react-router';
import { Footer } from './components/Footer/Footer.component';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      routes: ROUTES
    }
  }
  
  render(){
    const {routes} = this.state
    return (
      <div>
        <Navigation routes={routes}/>
        <Switch>
          {routes.map(route => (
            <Route exact path={route.path} key={route.id} component={route.component_name}/>
          ))}
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;