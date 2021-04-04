import React from 'react'
import Row from '../row'
import { PlanetList, PlanetDetails} from '../sw-components'

class PlanetPage extends React.Component {
  
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
      <Row left={ <PlanetList onSelectedItem={this.onSelectedItem} /> }  
        right={ <PlanetDetails itemId={ this.state.selectedItem }/> } />
    )
  }
}

export default PlanetPage