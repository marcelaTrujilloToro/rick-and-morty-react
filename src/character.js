import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import API from './api';

//crear una instancia de API
const api = new API();

const CharacterStyled = styled.div `

`

function Character() {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        
        //funcion para pedir los datos
        async function getCharacter(){
            setCharacter(await api.getCharacter(1));
        }
        getCharacter();
    }, []);


    return (
        <CharacterStyled>
            {character.name}
        </CharacterStyled>
    )
}

export default Character;
