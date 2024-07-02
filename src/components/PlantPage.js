import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {

  const [search, setSearch] = useState("") //state to set the search to what ever is typed in the search box. 

  function handleChange(e){ // function to handle any change in the search box.
    setSearch(e.target.value)
  }

  function addPlant(newPlant){ //Post function to add a new set of plant data to the database
    fetch("http://localhost:6001/plants",{ 
      method:'POST',
      headers:{"Content-Type": "Application/JSON"},
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>  setPlants([...plants,data]))
  }

  function handleDelete(id){ // delete function to delete select group of data based on the id from database
    fetch(`http://localhost:6001/plants/${id}`,{
    method:'DELETE'
    })
    .then(r=>r.json())
    .then(data=> console.log("Deleted: ",data))
    const removed = plants.filter(indPost=>{
        if(indPost.id === id){
            return false
        }
        return true
    })
    console.log(removed)
    setPlants(removed)
  }

  function handleEdit(id,updatedPlant){ //patch function to change the price of the certain plants based on id. 
    fetch(`http://localhost:6001/plants/${id}`,{
    method:'PATCH',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(updatedPlant)
    })
    .then(r=>r.json())
    .then(data=> {
        const editPlant=[...plants]
        editPlant[id-1] = data
        setPlants(editPlant)
    })
}

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search handleChange={handleChange}/>
      <PlantList search={search} plants={plants} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </main>
  );
}

export default PlantPage;
