import React from 'react'
import { withApi } from '../hoc-helpers'
import ItemDetails, { Record } from '../item-details'

const StarshipDetails = (props) => {
  return  (
    <ItemDetails
     { ...props }>
      <Record field="model" value="Model" />
      <Record field="costInCredits" value="Cost" />
      <Record field="crew" value="Crew" />
      <Record field="manufacturer" value="Manufacturer" />
    </ItemDetails>
  )
}
const mapMethodsToProps = (apiServise) => {
  return {
    getData: apiServise.getShip
  }
}
export default withApi(  mapMethodsToProps )( StarshipDetails )