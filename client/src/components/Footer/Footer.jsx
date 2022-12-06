import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <FooterStyled>
      Copyright © 2022 Dog-App-Henry  By FranciscoHIDev.
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.footer`
    background-color: #d822cf;
    padding:40px;
    margin-top: 25px;
    border-radius: 2em 2em 0 0;  
    text-align: left;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.1em;
    `
