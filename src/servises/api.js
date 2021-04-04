export default class ApiService {

  baseOfUrl = 'https://swapi.dev/api/';

  async getResource(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`ooooooy! ${res.status}`)
    }
    return await res.json()
  }

  getAllPeople = async () => {
    const resArr = await this.getResource(`${this.baseOfUrl}people/`)
    return resArr.results.map(person => this._transformPerson(person))
    // .map( item => this._transformPerson(item))
  }

  getPerson = async (id) => {
    const person = await this.getResource(`${this.baseOfUrl}people/${id}`)
    return this._transformPerson(person)
  }

  //PLANETS
  getAllPlanets = async () => {
    const resArr = await this.getResource(`${this.baseOfUrl}planets/`)
    return resArr.results.map(item => this._transformPlanet(item))
  }
  getPlanet = async (id) => {
    const planet = await this.getResource(`${this.baseOfUrl}planets/${id}`)
    return this._transformPlanet(planet)
  }

  // STARSHIPS
  getAllShips = async () => {
    const resArr = await this.getResource(`${this.baseOfUrl}starships/`)
    return resArr.results.map(item => this._transformShip(item))
  }
  getShip = async (id) => {
    const res = await this.getResource(`${this.baseOfUrl}starships/${id}`)
    return this._transformShip(res)
  }

  extractId(item) {
    const regExp = /([0-9]*)\/$/
    return item.url.match(regExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      waterSurfaces: planet.surface_water,
      img: `https://starwars-visualguide.com/assets/img/planets/${this.extractId(planet)}.jpg`
    }
  }
  _transformPerson = (person) => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthday: person.birth_year,
      eyeColor: person.eye_color,
      img: `https://starwars-visualguide.com/assets/img/characters/${this.extractId(person)}.jpg`
    }
  }
  _transformShip = (ship) => {
    return {
      id: this.extractId(ship),
      name: ship.name,
      model: ship.model,
      manufacturer: ship.manufacturer,
      costInCredits: ship.cost_in_credits,
      length: ship.length,
      crew: ship.crew,
      passengers: ship.passengers,
      cargoCopacity: ship.cargoCopacity,
      img: `https://starwars-visualguide.com/assets/img/starships/${this.extractId(ship)}.jpg`
    }
  }

}

// const sw = new ApiService();
// sw.getAllPeople()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err)

//   })