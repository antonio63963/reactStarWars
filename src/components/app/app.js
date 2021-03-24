import React from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import PeoplePage from '../peoplePage'
import './app.css'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import Api from '../../servises/api'

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
      <div className="container py-3">
        <Header />
        <RandomPlanet />

        <PeoplePage />
     

        <div className="row my-2">
          <div className="col-md-3" >
            <ItemList onSelectedItem={ this.onSelectedPlanet }
            getData={ this.apiServise.getAllPlanets }/>
          </div>
          <div className="col-md-9">
            <ItemDetails itemId={ this.state.selectedPlanet } 
            getData={ this.apiServise.getPlanet }/>
          </div>
        </div>
      </div>
    )
  }
}


export default App; 