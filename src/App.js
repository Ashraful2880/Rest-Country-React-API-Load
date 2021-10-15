import { useEffect, useState } from 'react/cjs/react.development';
import './App.css';

function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])

  return (
    <div className="App">
      <h1>This is React Basic API Load Website</h1> 
      <div className="search-area">
          <input className="search-field" type="text" placeholder="Search Here" />
          <input className="btn-search" type="button" value="Search" />
        </div>
       <div className='container'>
          {
            countries.map(country=><ShowCountry 
              country={country}
              ></ShowCountry>)
          }
       </div>
    </div>
  );
}

function ShowCountry(props){
  const{population,capital}=props.country;
  const name=(props.country.name.common);
  const flag=(props.country.flags.png);
  return(
      <div className="countryStyle">
        <h1>Country Details</h1>
        <h2>Name: {name}</h2>
        <h3>Capital: {capital}</h3>
        <img src={flag} alt="Country Flag" />
        <h4>Population: {population} Person</h4>
      </div>
  );
}
export default App;
