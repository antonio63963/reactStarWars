import React from 'react'
import ItemDetails, {Record} from '../item-details'
import { withApi } from '../hoc-helpers/withApi'

const PersonDetails = (props) => {
  return (
    <ItemDetails
      { ...props }>
      <Record field="gender" value="Gender" />
      <Record field="eyeColor" value="Eye color" />
    </ItemDetails>
  )
}
const mapMethodsToProps = (apiServise) => {
  return {
    getData: apiServise.getPerson
  }
}
export default withApi (mapMethodsToProps)(PersonDetails)

