import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );

    return (
      <div>
        <img alt='' src={currentDog.src}></img>
        <h1>{currentDog.name}</h1>
        <h2>{currentDog.age} years old</h2>
        <p>{currentDog.facts}</p>
      </div>
    );
  }
};

export default DogDetails;
