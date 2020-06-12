import React from 'react'
import './Styles.css'
import Icons from './icons.jsx'


export default props => {
     if (!props.forecasts) { // verifica se os dados chegaram antes de iniciar
          return null;     
     }
     
     const forecasts = props.forecasts
     console.log(forecasts)
     const days = forecasts.map((elem, index) => {
          if(index === 0) return   <div key={index} className='firstdivofdays'>
                                        <h1 className='menu-firstday'>{elem.day}</h1>
                                        <div>
                                             <h1 className='menu-graus'>{props.celsius}º</h1>
                                        </div>
                                        <Icons code={elem.code}/>
                                   </div>
               
          if(index < 7){
                    return    <div key={index} className='divofdays'>
                                   <h1 className='menu-days'>{elem.day}</h1>
                                   <div class='menu-max-min'>
                                        <p className='menu-max'>{elem.high}º</p>
                                        <p className='menu-min'>{elem.low}º</p>
                                   </div>
                                   <Icons code={elem.code}/>
                              </div>
               }else{
                    return false
          }
     })
  
     return(
          <div className='WeatherMenu-div'  >
               {days}
          </div>
     )

}
