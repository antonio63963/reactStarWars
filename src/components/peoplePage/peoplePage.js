import React, {Component} from 'react'
import './peoplePage.css'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import Api from '../../servises/api'
import ErrorBoundry from '../errorBoundry/'





const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-4" >
        { left }
      </div>
      <div className="col-md-8">
        { right }
      </div>
    </div>
  )
}

class PageItems extends React.Component {
  apiServise = new Api()

  state = {
    selectedPerson: 5,
  }

  onSelectedPerson = (id) => {
    this.setState({
      selectedPerson: id
    })
  }


  
  render() {
    const personList = (
      <ItemList onSelectedItem={ this.onSelectedPerson }
            getData={this.apiServise.getAllPeople}/>
    )
    const personCard = (
      <ItemDetails itemId={ this.state.selectedPerson } 
            getData={ this.apiServise.getPerson }/>
    )
   
    
    return  (
    <ErrorBoundry>
      <Row left={ personList } right={ personCard } />
    </ErrorBoundry>
    )
  } 
}

export default PageItems