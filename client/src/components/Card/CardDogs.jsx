import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



function CardDogs({ id, image, name, temperaments, weight }) {
  return (
  
<Link to={`/details/${id}`}>
    <CardStyled>
      <ImagenStyled src={image} alt={name} ></ImagenStyled>
      <h3>{name}</h3>
      <h3>Temperamento: {temperaments}</h3>
      <h3>Peso: {weight[0]}-{weight[1]} kg</h3>
          
         </CardStyled >
         </Link>
  
  )
}


const CardStyled = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height:450px;
margin:1rem;
margin-left: 1rem;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
border-radius:10px;
padding: 8px;

`

const ImagenStyled = styled.img`
width: 300px;
height: 200px;
border-radius: 20px;




`



export default CardDogs

