import React, { useState, useEffect } from "react";
 
function AnimalFactsList() {
    const [animalFacts, setAnimalFacts] = useState([]);
    const [animalType, setAnimalType] = useState("cat");
  
    useEffect(() => {
      fetch(
        `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=5`
      )
        .then(response => response.json())
        .then(response => {
          setAnimalFacts(response);
        });
    }, [animalType]);
  
    const facts = animalFacts.map(fact => <p key={fact._id}>{fact.text}</p>);
  
    return (
      <div>
        <h1>Here's some facts about {animalType}s</h1>
        {facts}
        <button onClick={() => setAnimalType("cat")}>Cat</button>
        <button onClick={() => setAnimalType("dog")}>Dog</button>
        
        
      </div>
    );
  }
  export default function Api() {
    return (
      <div className="App">
        <AnimalFactsList />
      </div>
    );
  }