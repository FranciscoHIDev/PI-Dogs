import React from 'react'
import styled from 'styled-components'

function Nav () {
    return (
       <NavStyled>
       <nav>
        <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/create'>Create</a></li>
        <li><a href='/about'>About</a></li>      
        </ul>
       </nav>
       
       
       </NavStyled>
    )
}

const NavStyled = styled.nav`
background-color: #0e0c0cef;
display:flex;
position: relative;

a {
  text-decoration: none;
  color: #d822cf;
  margin: 10px;
}

a:hover {  
  background-color:#d822cf;  
  border-radius: 3px;
  color:white;
  text-decoration:none;
  padding:8px
}
 
ul {
  display:flex;
  list-style:none; 
}  


li {
  margin:0.5rem;
}  
  
`

export default Nav