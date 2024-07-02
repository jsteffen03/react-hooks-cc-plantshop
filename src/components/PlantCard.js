import React, {useState} from "react";

function PlantCard({name, image, price, handleDelete, id, handleEdit}) {

  const [stock, setStock] = useState(true)//sets stock to instock or out of stock 
  const [edit, setEdit] = useState(false) //sets the edit state to allow editing
  const [newPrice, setNewPrice] = useState(price)//sets the new price of plant

  function handleClick(){ // function to switch stock status upon click
    stock === true ? setStock(false) : setStock(true)
  }

  function editForm(e){ // function to edit the price of a plant
    e.preventDefault()
    const editedItem = {
        name: name,
        image: image,
        price: newPrice
    }
    setEdit(!edit)
    handleEdit(id,editedItem)
  }

  return (
    <>
    {edit ?
    <li className="card" data-testid="plant-item">
      <form onSubmit={editForm}>
        <label>Price</label>
        <input onChange={(e)=>setNewPrice(e.target.value)} value={newPrice}></input>
        <button type="submit">stop Edit</button>
      </form>
    </li> 
    :
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button className="primary2" onClick={()=>handleDelete(id)}>Remove Plant</button>
      <button onClick={()=>setEdit(!edit)}>Change Price</button>
    </li>}
    </>
  );
}

export default PlantCard;
