import React from 'react'
import { WithData, withApi, withChildFunction } from '../hoc-helpers'
import ItemList from '../item-list'


const renderName = (item) => <span>{ item.name }</span>
const renderNameDiameter = (item) => <span>{ item.name } Diameter: { item.diameter }</span>


const methodPersonsToProps = (apiService) => {
  return {
    getData: apiService.getAllPeople
  }
}
const methodPlanetsToProps = (apiService) => {
  return {
    getData: apiService.getAllPlanets
  }
}
const methodStarshipsToProps = (apiService) => {
  return {
    getData: apiService.getAllShips
  }
}

const compose = (...fncs) => (component) => {
  return fncs.reduceRight((prevResult, fn) => {
    return fn(prevResult)
  }, component)
}
const PersonList =  compose(
                      withApi(methodPersonsToProps),
                      WithData,
                      withChildFunction(renderName)
                    )(ItemList)
                    
const PlanetList =  compose(
                      withApi(methodPlanetsToProps),
                      WithData,
                      withChildFunction(renderNameDiameter)
                    )(ItemList)
                    
                        
const StarshipList =  compose(
                        withApi(methodStarshipsToProps),
                        WithData,
                        withChildFunction(renderName)
                      )(ItemList) 

export {
  PersonList,
  PlanetList,
  StarshipList
}