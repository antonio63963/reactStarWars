import React from 'react'

const withChildFunction = (fn) => (ReactElem) => {
  return (props) => {
    return (<ReactElem {...props}>
      { fn }
    </ReactElem>)
  }
}

export default withChildFunction