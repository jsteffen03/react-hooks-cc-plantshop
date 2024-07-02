import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  //states to set data to varibles to create a new object.
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("") 

  //adds a new plant to database on submit
  function submit(e){
    e.preventDefault()
    const new_Plant = {
      name: name,
      image: image,
      price: price
    }
    addPlant(new_Plant)
    //sets them back to blanks for the next time
    setName("")
    setImage("")
    setPrice("")
    }
    
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => {submit(e)}}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
