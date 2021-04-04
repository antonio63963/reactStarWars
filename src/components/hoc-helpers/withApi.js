import React from 'react'
import { Consumer } from '../api-service-context'



const withApi = (mapMethodsToProps) => (InnerReactComp) => {
  return (props) => {
    return (
      <Consumer>
        {
          (apiServise) => {
            const apiProp = mapMethodsToProps(apiServise)
            return (
              <InnerReactComp {...props} {...apiProp} />
            )
          }
        }
      </Consumer>
    )
  }
}

export { withApi }
