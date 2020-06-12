import React from 'react'
import './City.css'

export default props => {
     return (
          <div className="city-container">
               <div className="div-city">
                    <h1 className='city'>{props.cityname}</h1>
               </div>
               <div className="divcountry">
                    <h1 className='country'>{props.countryname}</h1>
               </div>
          </div>
     )
}