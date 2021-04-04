import React from 'react'
import { withApi } from '../hoc-helpers'
import ItemDetails, {Record} from '../item-details'



const PlanetDetails = (props) => {

  return  (
    <ItemDetails
      {...props}>
      <Record field="diameter" value="Diameter" />
      <Record field="population" value="Population" />
      <Record field="rotationPeriod" value="Rotation period" />
      <Record field="waterSurfaces" value="Water surfaces" />
    </ItemDetails>
  )
}
const mapMethodsToProps = (apiServise) => {
  return {
    getData: apiServise.getPlanet
  }
}
export default withApi( mapMethodsToProps )( PlanetDetails )