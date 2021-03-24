import React from 'react' 
import Api from '../../servises/api'
import Loader from '../loader'

class ItemList extends React.Component {
  api = new Api()
  state = {
    peopleList: null,
  }
  componentDidMount() {
    this.props.getData()
    .then(people => {
      this.setState({peopleList: people})
    })
  }

  renderPeople(arr) {
    return arr.map(({name, id}) => {
      return (
        <li className="list-group-item" role="button"
        key={ id }
        onClick={ () => this.props.onSelectedItem(id) }>
          { name }
        </li>
      )}
    )
  }

  render() {
    const { peopleList } = this.state
  
    const items = peopleList ? this.renderPeople(peopleList) : <Loader />

    return (
    <ul className="list-group">
      { items }
    </ul>
  )
  }
}
export default ItemList