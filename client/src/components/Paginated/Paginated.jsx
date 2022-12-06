import React from 'react'
import styled from 'styled-components'
//import '../styles/styles.css'

function Paginated({ dogsPage, allDogs, paginado}) {
const pages = []
console.log(pages)
const numberPages = Math.ceil(allDogs / dogsPage)

for(let i = 0; i < numberPages; i++) {
pages.push(i + 1)

}
return (
  
  <NavStyled >
     

        {pages?.map((num) => (
              <ButtonStyled key={crypto.randomUUID()} onClick={() => paginado(num) }>
                {num} 
              </ButtonStyled>
             

        ))}
    

    </NavStyled>
  )
}


const NavStyled = styled.nav`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid #d822cf;
    border-radius:15px;
    margin-top:10px;
   

`
 const ButtonStyled = styled.button`
    background-color: #1d1c1d;
    border: 1px solid transparent;
    border-radius:20px;
    margin:5px;
    border-color: white;
    cursor:pointer;
    color: rgb(247, 241, 241)  ;
    min-height: 35px;
    max-height: 50px;
    min-width: 35px;
    max-width: 50px;

    .button:hover {  
  background-color:#e6576e; 
    }
  

  

 `


export default Paginated