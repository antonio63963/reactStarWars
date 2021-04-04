import React from 'react' 
import './item-details.css'
import Loader from '../loader'

const Record = ({  field, value, item}) => {
  return (
   <div>
      <li className="list-group-item noBG">
        { value }: { item[field] }
      </li>
   </div>
  )
}


class ItemDetails extends React.Component {
  state = {
    item: null,
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
    const { itemId, getData } = this.props
    if(!itemId) return 
    getData(itemId)
    .then(item => {
      this.setState({ item, isLoader: false })
    })
  }

  render() {
    if(!this.state.item) {
      return <span>Select an item from the list</span>
    }
    const content = this.state.item 
      ? <ViewItem item={ this.state.item } prop={ this.props.children }/>
      : null
    const isLoader = this.state.item && this.state.isLoader
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
export { Record };
export default ItemDetails

function ViewItem({item, prop}) {
  // const { name, gender, birthday, eyeColor, img } = person
  const {name, img} = item
  // const {name, description, img} = item
  
  // const itemElems = Object.entries(description)
  //   .map((item, index) => {
  //     return (
  //       <li className="list-group-item noBG"
  //       key={ index }>{ item[0] }: { item[1] }</li>
  //     )
  //   })
  return (
    <React.Fragment>
      <div className="">
        <img src={img} className="card-img-top img-card" alt="character"/>
      </div>
        <div className="card-body px-20 py-20">
          <h5 className="card-title">{ name }</h5>
          <ul className="list-group list-group-horizontal-xxl">
            { React.Children.map(prop, (child) => {
         
                return  React.cloneElement(child, {item})
            }) }
          </ul>
        </div>
    </React.Fragment>
  )
}