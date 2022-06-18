import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState('');
  const [newCountryName, setNewCountryName] = useState('');
  const [countryList, setCountryList] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/read').then((response) => {
      setCountryList(response.data);
    });
  }, []);


  const addToList = () => {
    axios.post('http://localhost:3001/insert', {
      countryName: countryName,
      cityName: cityName,
      date: date,
    });
  };

  const updateCountry = (id) => {
    axios.put('http://localhost:3001/update', {
      id: id,
      newCountryName: newCountryName,
    })
  }

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
        <button type="button" className="btn btn-outline-success" onClick={addToList}>Add Location</button>
      </div >
      <div className="list-wrp">

        <h1 className="list-title text-primary">Countries List</h1>
        <div className="divider"></div>

        {countryList.map((value, key) => {
          return (
            <>
              <div className="container item-wrp">
                <div className="row">
                  <div className="col">
                    <p>{value.countryName}</p>
                  </div>
                  <div className="col">
                    <p>{value.cityName}</p>
                  </div>
                  <div className="col">
                    <p>{value.visitedDate.slice(0, 10)}</p>
                  </div>
                  <div className="col">
                    <input type="text"
                      className="form-control new-input"
                      placeholder="Change country"
                      onChange={(event) => {
                        setNewCountryName(event.target.value)
                      }}
                    >
                    </input>
                    <button type="button" className="btn btn-list btn-outline-primary" onClick={() => updateCountry(value._id)}>Update</button>
                  </div>
                  <div className="col">

                    <button type="button" className="btn btn-list btn-outline-danger ">Delete</button>

                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </>
          );
        })}

      </div>
    </div >
  );
}

export default App;
