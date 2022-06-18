import React, { useState } from 'react';
import './App.css';


function App() {

  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">My trips</a>
        </div>
      </nav >
      <div className="form-wrp">
        <div className="input-group flex-wrap">
          <span className="input-group-text" id="addon-wrapping">Country</span>
          <input type="text"
            className="form-control"
            placeholder="Visited country"
            aria-label="Country"
            aria-describedby="addon-wrapping"
            onChange={(event) => {
              setCountryName(event.target.value);
            }}
          />
        </div>
        <div className="input-group flex-wrap">
          <span className="input-group-text" id="addon-wrapping">City</span>
          <input type="text"
            className="form-control"
            placeholder="Visited city"
            aria-label="City"
            aria-describedby="addon-wrapping"
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          />
        </div>
        <div className="input-group flex-wrap">
          <span className="input-group-text" id="addon-wrapping">Date of visit</span>
          <input type="date"
            className="form-control"
            aria-label="Date"
            aria-describedby="addon-wrapping"
            onChange={(event) => {
              setDate(event.target.value);
            }} />
        </div>
        <button type="button" className="btn btn-outline-success">Add Location</button>
      </div >
    </div >
  );
}

export default App;
