import React from 'react';
import './StarData.css';


const StarData = (props) => {
  return (
    <li className='details'>
    <h1>This is the star wars branch</h1>
      <li>Name: {props.details.name}</li>
      <li>Height: {props.details.height}</li>
      <li>Eye Color: {props.details.eye_color}</li>
      <li>Birth Year: {props.details.birth_year}</li>
      <li>Gender: {props.details.gender}</li>
      <li>Mass: {props.details.mass}</li>
      <li>Skin: {props.details.skin_color}</li>
      <li>Hair: {props.details.hair_color}</li>
    </li>
  )
}

export default StarData;
