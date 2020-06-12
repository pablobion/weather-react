import React, {useState} from 'react'
import moment from 'moment-timezone'
import './app.css'

import Date from './Components/Date/Date'
import Hour from './Components/Hour/Hour'
import City from './Components/City/City'
import WeatherMenu from './Components/WeatherMenu/WeatherMenu.jsx'
import Search from './Components/Search/Search.jsx'
import Alert from './Components/Alert/Alert'

const { Api } = require("./apiCall")

function App() {
  
  const [celsius, setCelsius] = useState()
  const [city, setCity] = useState()
  const [mycity, setMycity] = useState()
  const [myCountry, setMyCountry] = useState()
  const [load, setLoad] = useState(false)
  const [date, setDate] = useState()
  const [hour, setHour] = useState('Loading..')
  const [forecasts, setForecasts] = useState()

  const api  = Api()

    const populateState = (json) =>{ //essa função atribui os valores aos states
      setCelsius(json.current_observation.condition.temperature)
      setMycity(json.location.city)
      setMyCountry(json.location.country)
      setForecasts(json.forecasts)

      const hours = moment().tz(json.location.timezone_id).format().match(/([0-1][0-9]|2[0-3]):[0-5][0-9]/g); //2020-05-28T21:54:15-03:00   >  21:54
      const Date = moment().tz(json.location.timezone_id).format("LLLL") /// Thursday, June 4, 2020 11:57 PM    
      setDate(Date)
      setHour(hours)
    }

    if(load === false){ //Roda ao entrar e somente uma vez, com a localização do usuario
      setLoad(true)
      navigator.geolocation.getCurrentPosition(function(position) { 
          api.then(response =>  response.get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&u=c`, null, null, (err, data) => {
            if(data){
              populateState(JSON.parse(data))   
            }     
          }))
      });
    }

    const handleClick = (city) =>{// ao clicar pega cidade do input e pesquisa na api
      if(!city){
        alert('Need a city')
        return false
      }
      navigator.geolocation.getCurrentPosition(function(position) { 
          api.then(response =>  response.get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json&u=c`, null, null, (err, data) => {
            
            const json_verify = JSON.parse(data).forecasts // Pega o array de forecasts onde tem as informações dos dias
            if(json_verify.length === 0){ // se o array for 0 significa que não conseguiu encontrar nenhuma cidade
              alert('error: check the city name')
              return false 
            }

            if(data){
              populateState(JSON.parse(data))   //manda as informações da data para a função populate
            }
          }))
      });
    }

    const handleChange = (e) =>{
        setCity(e.target.value)
    }

  return (
    <div className='container'> 
    <Alert/>
      <div className='painel'>
          <div className="left-side">
            <Hour hour={hour}></Hour>
            <Date date={date}/>
          </div>
          <div className="right-side">
          <Search change={handleChange} onclick={() => handleClick(city)}/>
              <City cityname={mycity} countryname={myCountry}/>
          </div>
      </div>
      <WeatherMenu celsius={celsius} forecasts={forecasts}/>
    </div>
  );
}

export default App;
