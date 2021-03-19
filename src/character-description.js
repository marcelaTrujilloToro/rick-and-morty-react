import React from 'react'
import styled from 'styled-components';

const CharacterDescriptionStyled = styled.div `
    grid-area: character-description;
    
    .character-label {
        background: #685128;
        padding: 1em;
        color: white;
        border-radius: 10px;
        text-align: left;
        font-size: 25px;
        font-weight: 400;
    }

`

function CharacterDescription({status, gender, species}) {

    return (
        <div>
            <CharacterDescriptionStyled>
                <div class="character-labels">
                    <h3 class="character-label">Género: {gender}</h3>
                    <h3 class="character-label">Especie: {species} </h3>
                    <h3 class="character-label">Status: {status}</h3>
                </div>
            </CharacterDescriptionStyled>       
        </div>
    )
}

export default  CharacterDescription;
