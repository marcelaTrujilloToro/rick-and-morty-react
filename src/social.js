import React from "react";
import styled from "styled-components";

const SocialStyled = styled.div`
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    a {
      margin-left: 2em;
    }
    a:first-child {
      margin-left: 0;
    }
  }
`;

function Social() {
  return (
    <SocialStyled>
      <a href="https://www.instagram.com/marcela_t_t/">
        <img src="./Images/instagram.svg" alt="" />
      </a>
      <a href="https://web.facebook.com/marces.trujiltoro/">
        <img src="./Images/facebook.svg" alt="" />
      </a>
      <a href="https://twitter.com/?lang=es">
        <img src="./Images/twitter.svg" alt="" />
      </a>
    </SocialStyled>
  );
}

export default Social;
