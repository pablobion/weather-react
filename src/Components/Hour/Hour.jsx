import React from 'react'
import './Hour.css'

export default props => {
    if(!props.hour){
      return false
    }

     let hour =  props.hour[0].split(':') // Cria array separando as horas dos minutos
     let period = hour[0] < 12 ?  'am' :  'pm'// verifica se a hora é menor que 12, se sim aplica 'am' ao periodo

     hour = `${hour[0]}:${hour[1]}`

     if(hour === 'L:undefined'){ // se tiver sem geolocation nao mostra nada
       hour = ''
       period = ''
     }

     return(
      <div className='hour-container'>
          <div className='hour-hours'>
            <h1>{hour}</h1>
          </div>
          <div className="hour-period">
            <h6>{period}</h6>
          </div>     
      </div>
     )

}