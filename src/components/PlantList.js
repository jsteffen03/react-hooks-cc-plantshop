import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search, handleDelete, handleEdit}) {

  const filteredPlants = plants.filter((plant)=>{
    if(search === "" || search === " "){
      return true
    }
    if(plant.name.toLowerCase().includes(search.toLowerCase())){
      return true
    }
    else {
      return false
    }
  })

  const displayPlants = filteredPlants.map((plant)=>{
    return <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} handleDelete={handleDelete} handleEdit={handleEdit}/>
  })


  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
