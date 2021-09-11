import React,{useEffect, useState} from 'react'
import './App.css';
import Sunny from './sunny.jpg'
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import LocationCityIcon from '@material-ui/icons/LocationCity';

function App() {
  let [city , setCity ] = useState(null);
  let [search , setSearch] =useState("Karachi")
  useEffect(() =>{
    const fetchApi = async ()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=4e1b6c0131ea09deaf26b5a86ef689c9`
      const res = await fetch(url)
      const resJson = await res.json();
      console.log(resJson)
      setCity(resJson.main)
      
    }
    fetchApi()
  },[search])
  
  
  return (
    <>
    <div className="wheather-main">
    <div className="weather-content" >
    <input type="search"  onChange={(e) => {setSearch(e.target.value)}}setSearch="" className="search-bar" value={search}/>
    {!city ?(
      <p>No Data Found</p>
    ) :(
      <div>
        {/* <CloudQueueIcon/> */}
       
        <h1 className="country-name"><LocationCityIcon fontSize="large" /> {search}</h1>
        <h1 className="temprature">{city.temp}°C</h1>
        <h3 className="tempfell">Feels Like {city.feels_like}</h3>
        <h3 className="minmax">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
        </div>
    )}
        
    </div>
    </div>
 
     </>
  );
}


export default App;
