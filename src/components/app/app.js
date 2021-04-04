import React from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import './app.css'
import Api from '../../servises/api'
import ErrorBoundry from '../errorBoundry'
import {
  PeoplePage,
  StarshipPage,
  PlanetPage
} from '../pages'
import {BrowserRouter as Router, Route} from 'react-router-dom'



import {
  Provider,
} from '../api-service-context'
import { StarshipDetails } from '../sw-components'

class App extends React.Component {

  apiServise = new Api();

  state = {
    selectedPerson: 5,
    selectedPlanet: 4,
  }

  onSelectedPerson = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  onSelectedPlanet = (id) => {
    this.setState({
      selectedPlanet: id
    })
  }

  render() {
   
    return (
      <ErrorBoundry>
        <Provider value={this.apiServise}>
          <Router>
            <div className="container py-3">
              <Header />
              <Route path="/people/:id"
                      render={() => {
                        return <h1>It's very very</h1>
                      }}
              />
              <RandomPlanet updateInterval={10000} />
              <Route exact path="/" render={ () => <h2>Welcome!!!</h2> }/>
              <Route path="/people/" component={PeoplePage}/>
              <Route path="/planet/" component={PlanetPage}/>
              <Route path="/starships/" exact component={StarshipPage}/>
          
              <Route path="/starships/:id" 
                render={ ({match}) => {
                  const id = match.params.id
                  return <StarshipDetails itemId={ id }/>
                } }
              />
            </div>
          </Router>    
        </Provider>

      </ErrorBoundry>
    )
  }
}


export default App; 