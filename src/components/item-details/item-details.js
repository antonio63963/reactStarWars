import React from 'react' 
import './item-details.css'
import Loader from '../loader'

class ItemDetails extends React.Component {
  state = {
    person: null,
    isLoader: false
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prewProps){
    if(this.props.itemId !== prewProps.itemId) {
      this.setState({ isLoader: true })
      this.updateItem()
    }
    // if(this.state.person.id !== this.props.itemId) {
    //   this.updateItem()
    // }
  }

  updateItem() {
    console.log(this.props.getData);
    const { itemId } = this.props
    if(!itemId) return 
    this.props.getData(itemId)
    .then(person => {
      this.setState({ person, isLoader: false })
    })
  }

  render() {
    if(!this.state.person) {
      return <span>Select a person from the list</span>
    }
    const content = this.state.person 
      ? <ViewItem person={ this.state.person }/>
      : null
    const isLoader = this.state.person && this.state.isLoader
      ? (<div className="loader-wrapper">
      <Loader />
      </div>)
      : null

    return(
      <div className="card d-flex flex-row justify-content-center card-item align-items-center"  >
        { isLoader }
        { content }
      </div>
    )
  }
}
export default ItemDetails

function ViewItem({person}) {
  // const { name, gender, birthday, eyeColor, img } = person
  const {name, description, img} = person
  const itemElems = Object.entries(description)
    .map((item, index) => {
      return (
        <li className="list-group-item noBG"
        key={ index }>{ item[0] }: { item[1] }</li>
      )
    })
  return (
    <React.Fragment>
      <div className="">
        <img src={img} className="card-img-top img-card" alt="character"/>
      </div>
        <div className="card-body px-20 py-20">
          <h5 className="card-title">{ name }</h5>
          <ul className="list-group list-group-horizontal-xxl">
           { itemElems }
          </ul>
        </div>
    </React.Fragment>
  )
}