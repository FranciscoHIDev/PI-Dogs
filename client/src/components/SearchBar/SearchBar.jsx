import React from 'react'
import {getDogName} from '../../redux/actions/index'
import {useDispatch} from 'react-redux'
import {useState} from 'react'


function SearchBar( {setPage}) {
    const dispatch = useDispatch()
    const [name,setName] = useState("")
   
 
    function handleInput(e){
    e.preventDefault()
        setName(e.target.value)
        console.log(e.target.value)  
    }
     
      function handleSubmit(e){
         e.preventDefault()      
         if(!name.length){
            return alert("Ingresa el nombre de la raza a buscar")
         }  else{
            dispatch(getDogName(name)) 
            setPage(1)        
          }                  
        }                
         
      
     return(
    <>
    <input type='text' placeholder='Buscar dog...' onChange={(e) => handleInput(e)} />
   
    <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>    


</>
    )
}

export default SearchBar