import './App.css';

 import React, { useEffect, useState } from 'react';
 
function App() {
  const [city, setCity] = useState("")
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},USA&APPID=cfe0b2658aec5af16bf8115cfd986eca`
  

  const handleChange = (e) => {
    setCity(e.target.value) 
    console.log(city); 
  }

  const handleSubmit = (e) => {
     fetch(api)
     .then (res => res.json())
     .then(data => {
      console.log(data)
     })

  }

  return (
    <>
      <div className="banner">
        <h1> Weather Dashboard </h1>
      </div>

      <main className="flex-row justify-space-around">

        <section className="col4 flex-column height itemscenter">

          <div className="align-content-left width">
            <h1 id="searchheading"> Search for a City</h1>
          </div>

          <form id="searchbar" className="full flex-column itemscenter">
            <input className="UIform" type="text" value={city} onChange={handleChange} placeholder="search for your city"/>
          </form>

          <button onClick={handleSubmit} className="search"> Search</button>

          <hr id="line" className="width hide" />

          <div id="container" className="full flex-column itemscenter">
          </div>

        </section>

        <section className="col8">
          <div className="weather height1 flex-column justify-space-evenly">
            <div>  <h1 className="margin marginleft" id="MainCity"></h1> </div>

            <div >
              <p> Temp: <span id="MainTemp"> </span></p>
              <p> Wind: <span id="MainWind"> </span></p>
              <p> Humidity: <span id="MainHumidity"> </span></p>
              <p> UV index: <span id="MainUV">  </span></p>
            </div>
          </div>

          <h1> 5-day Forecast:</h1>
          <div className="flex-row justify-space-between margin">

          </div>
        </section>
      </main>
    </>
  );
}

export default App;
