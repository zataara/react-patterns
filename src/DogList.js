import React from 'react';



const DogList = ({ dogs }) => {
  const doggies = dogs.map(dog=> (
    <h3>{dog.name}</h3>
  ))


  return (
    <p>{doggies}</p>
    
  )
}

export default DogList;