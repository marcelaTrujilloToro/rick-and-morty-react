import React from 'react'
import styled from 'styled-components';

const CharacterImageStyled = styled.div `
    
    grid-area: avatar;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        
    }
    
`

function CharacterImage({image, name}) {

    return (
        <div>
            <CharacterImageStyled>
                <img class="character-image" src={image} alt={name}></img>
            </CharacterImageStyled>       
        </div>
    )
}

export default  CharacterImage;