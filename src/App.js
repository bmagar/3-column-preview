import "./App.css";

function App() {
  return (
    <>
      <section className="main-section">
        <div className="col item-1">
          <img src="/images/icon-sedans.svg" />
          <h1>Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="seadans-button">Learn More</button>
        </div>

        <div className="col item-2">
          <img src="/images/icon-suvs.svg" />
          <h1>SUVs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="suv-button">Learn More</button>
        </div>

        <div className="col item-3">
          <img src="/images/icon-luxury.svg" />
          <h1>Luxury</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="luxury">Learn More</button>
        </div>
      </section>
    </>
  );
}

export default App;
