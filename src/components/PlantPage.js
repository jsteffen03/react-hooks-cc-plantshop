import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {

  const [search, setSearch] = useState("")

  function handleChange(e){
    setSearch(e.target.value)
  }

  function addPlant(newPlant){
    fetch("http://localhost:6001/plants",{
      method:'POST',
      headers:{"Content-Type": "Application/JSON"},
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>  setPlants([...plants,data]))
  }

  function handleDelete(id){
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

  function handleEdit(id,updatedPlant){
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
