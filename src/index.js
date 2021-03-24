import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import ApiService from './servises/api'
const req = new ApiService()

req.getAllPeople().then(data => console.log(data))

ReactDOM.render(<App />, document.querySelector('#root'))