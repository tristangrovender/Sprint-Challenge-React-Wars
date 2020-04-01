import React, { useState, useEffect } from "react";
import axios from "axios";

import StarWarsCard from "./components/StarWarsCard";

import "./App.css";

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    const [characters, setCharacters] = useState([]);

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    useEffect(() => {
        axios.get("https://swapi.co/api/people").then(response => {
            // console.log(response);
            setCharacters(response.data.results);
        });
    }, []);

    return (
        <div className="App">
            <h1 className="Header">React Wars</h1>
            <div className="card-container">
                {characters.map(character => {
                    return (
                        <StarWarsCard
                            name={character.name}
                            hair_color={character.hair_color}
                            skin_color={character.skin_color}
                            eye_color={character.eye_color}
                            gender={character.gender}
                            key={character.url}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default App;
