import React, {useContext} from 'react'
import styled from 'styled-components'
import CharacterContext from './character-context';
import api from './api';
import NProgress from 'nprogress';


const NextStyled = styled.div`
    cursor: pointer;
    background-image: url('./Images/arrow.svg');
    background-repeat: no-repeat;
    background-position: left  bottom ;
    flex: 1;
    
    @media screen and (max-width: 1024px) {
        user-select: none;
        height: 50px;
        background-position: center;
  }
`

function Next() {
  
    const context = useContext(CharacterContext);

    async function handleClick(){
        NProgress.start();
        context.setCharacter(await api.getCharacter(context.character.id + 1))
        NProgress.done();
    }

    return (
        <NextStyled onClick = {handleClick}>
        </NextStyled>

    );
}

export default Next