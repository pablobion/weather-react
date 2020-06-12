  import React from 'react'
import cloudy from '../../assets/weather-icons/cloudy.svg'
import cloudyday from '../../assets/weather-icons/cloudyday.svg'
import cloudynight from '../../assets/weather-icons/cloudynight.svg'
import day from '../../assets/weather-icons/day.svg'
import night from '../../assets/weather-icons/night.svg'
import rain from '../../assets/weather-icons/rain.svg'
import snow from '../../assets/weather-icons/snow.svg'
import thunder from '../../assets/weather-icons/thunder.svg'
import weathersprite from '../../assets/weather-icons/weathersprite.svg'

export default props => {

     const obj = {
          0: thunder,
          1: thunder,
          2: thunder,
          3: thunder,
          4: thunder,
          5: rain,
          6: rain,
          7:  snow,
          8:  rain,
          9:  rain,
          10: rain, 
          11: rain,
          12: rain,
          13: snow,
          14: snow,
          15: snow,
          16: snow,
          17: snow,
          18: snow,
          19: cloudy,
          20: cloudy,
          21: cloudy,
          22: cloudy,
          23: cloudy,
          24: cloudy,
          25: cloudy,
          26: cloudy,
          27: cloudynight,
          28: cloudyday,
          29: cloudynight,
          30: cloudyday,
          31: night,
          32: day,
          33: night,
          34: day,
          35: rain,
          36: day,
          37: rain,
          38: thunder,
          39: rain,
          40: thunder,
          41: snow,
          42: snow,
          43: snow,
          44: weathersprite,
          45: rain,
          46: snow,
          47: rain,
     }

     let condition 

     Object.keys(obj).forEach(function(index){ //pega o code que foi passado 
          if(props.code == index){
               condition = obj[index]
          }
     })
     return <img src={condition} ></img>  
}