import React from 'react' 
import './random-planet.css'
import ApiService from '../../servises/api'
import Loader from '../loader/loader'
import ErrorIndicator from '../error-indicator'

class RandomPlanet extends React.Component  {
  apiService = new ApiService()
  state = {
    planet: {},
    isLoading: true,
    error: false,
  }
  interval = null

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onLoadPlanet = (planet) => {
    this.setState({
        planet,
        isLoading: false
    })
  }
  onError = (err) => {
    this.setState({
      error: true,
      isLoading: false
    })
  } 
  updatePlanet = () => {
    const id = Math.floor(Math.random()*10)+10
    this.apiService.getPlanet(id)
    .then(this.onLoadPlanet)
    .catch(this.onError)
  }
 
  


  render() {
    const { planet, isLoading, error } = this.state;
    const content = isLoading ? <Loader /> : <ViePlanet planet={planet}/>
    const loadResult = error ? <ErrorIndicator /> : content
    return (
     <div className="card d-flex flex-row justify-content-center" >
      { loadResult }
    </div>
    )
  }
}
export default RandomPlanet


function ViePlanet({planet}) {
  const  {id, population, rotationPeriod, diameter, name} = planet;
  return (
    <React.Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top img-card" alt="planet"/>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <ul className="list-group list-group-horizontal-xxl">
          <li className="list-group-item noBG"><span>Population </span>{ population }</li>
          <li className="list-group-item noBG"><span>Rotation Period </span>{ rotationPeriod }</li>
          <li className="list-group-item noBG"><span>Diameter </span>{ diameter }</li>
        </ul>
      </div>
    </React.Fragment>

  )
}