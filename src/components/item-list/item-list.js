import React from 'react' 

const ItemList = (props) => {
  const renderList = (arr) => {
    return arr.map( item => {
      const { id } = item
      const lable = props.children(item)
      return (
        <li className="list-group-item" role="button"
        key={ id }
        onClick={ () => props.onSelectedItem(id) }>
          { lable }
        </li>
      )}
    )
  }

  const { data } = props
  const items = renderList(data)

  return (
    <ul className="list-group">
      { items }
    </ul>
  )
  
}

export default ItemList
