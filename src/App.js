import './App.css';

function App() {
  return (
    <>
      <div className="banner">
        <h1> Weather Dashboard </h1>
      </div>

      <main className="flex-row justify-space-around">

        <section className="col4 flex-column height itemscenter">

          <div className="align-content-left width">
            <H1 id="searchheading"> Search for a City</H1>
          </div>

          <form id="searchbar" className="full flex-column itemscenter">
            <input className="UIform" type="text" placeholder="search for your city"/>
          </form>

          <button className="search"> Search</button>

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
