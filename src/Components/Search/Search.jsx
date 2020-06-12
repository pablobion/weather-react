import React from 'react'
import './search.css'
import {FiSearch } from 'react-icons/fi' 

export default props => {
     return(
          <div className='search-container'>
               <div className="search-search">
                    <input onChange={props.change}></input>
                    <button onClick={props.onclick} ><FiSearch className='search-icon'/></button>
               </div>    
          </div>
     )

}