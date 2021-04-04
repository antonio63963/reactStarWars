import React from 'react'
import Row from '../row'
import { PersonList, PersonDetails} from '../sw-components'

class PeoplePage extends React.Component {
  
  state = {
    selectedItem: 5,
  }

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    return (
      <Row left={ <PersonList onSelectedItem={this.onSelectedItem} /> }  
        right={ <PersonDetails itemId={ this.state.selectedItem }/> } />
    )
  }
}

export default PeoplePage