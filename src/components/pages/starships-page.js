import React from 'react'
import Row from '../row'
import { StarshipList} from '../sw-components'
import { withRouter } from 'react-router-dom'

const StarshipPage = (props) => {
  const { history } = props

  return (
      <StarshipList onSelectedItem={ (itemId) => {
        history.push(itemId)
      }}/> 
  )
}

export default withRouter(StarshipPage)