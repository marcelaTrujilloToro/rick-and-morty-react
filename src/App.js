import React, {useState, useEffect} from 'react';
import './App.css';
import API from './api';
import Character from './character';
import CharacterName from './character-name';
import CharacterImage from './character-image';
import CharacterDescription from './character-description';
import CharacterPlaceholder from './character-placeholder';

//crear una instancia de API
const api = new API();

function App() {

  const [character, setCharacter] = useState({});

    useEffect(() => {
        
        //funcion para pedir los datos
        async function getCharacter(){
            setCharacter(await api.getCharacter(1));
        }
        getCharacter();
    }, []);

  return (
    
    <div classNameName="App">

        <CharacterPlaceholder name = {character.name}></CharacterPlaceholder>
      
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img className="logo" src="./static/images/logo@2x.png" width="280" alt=""/>
        <div className="social">
          <a href="https://www.instagram.com/marcela_t_t/">
            <img src="./static/images/instagram.svg" alt=""/>
          </a>
          <a href="https://web.facebook.com/marces.trujiltoro/">
            <img src="./static/images/facebook.svg" alt=""/>
          </a>
          <a href="https://twitter.com/?lang=es">
            <img src="./static/images/twitter.svg" alt=""/>
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>

        <CharacterName name= {character.name}></CharacterName>
        
        <CharacterImage image= {character.image} name={character.name}></CharacterImage>

        <div className="navigation about">
          <a href="#">About</a>
        </div>

        <CharacterDescription gender = {character.gender} species={character.species} status = {character.status}></CharacterDescription>
        
        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>

        <div className="arrow" id="load-next"></div>

      </div>
    </div>
  );
}

export default App;
