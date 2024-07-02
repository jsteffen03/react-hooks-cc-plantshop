import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
//state to set fetched data to
//useEffect to only fetch json data once.
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>setPlants(data))
  }
  ,[])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants}/> {/*sending the data and states down as props */}
    </div>
  );
}

export default App;
