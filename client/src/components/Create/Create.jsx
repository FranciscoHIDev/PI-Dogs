import React from 'react'
import validate from './validate'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllTemps, postDog} from '../../redux/actions/index'


export default function Create() {

    const dispatch = useDispatch()
    const temperaments = useSelector((state)=> state.temperaments)

    const [error,setError] = useState({})
    const[temps,setTemps] = useState([])
    const [input, setInput]= useState({
        name: "", 
        heightMin: "",
        heightMax: "",
        weigthMin:"",
        weigthMax: "",
        life_span: "",
        image: "",
        temperament: [],
    })

    React.useEffect(() => {
        dispatch(getAllTemps())
    },[dispatch])
    
    function handleChange (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))  
      }

    function handleSelect(e){
        if(!temps.includes(e.target.value)){
            if(temps.length > 0){
                setTemps([...temps, e.target.value])
            }else{
                setTemps([...temps, e.target.value])
            }
        }
    }

    function handleDelete(e){
        e.preventDefault()
        setTemps(temps.filter((temp)=> temp !== e.target.value))
    }

    function handleSubmit(e){
        if(
            input.name &&
            input.heightMin &&
            input.heightMax &&
            input.weigthMax &&
            input.weigthMin &&
            input.temperament){
                const newDog= {
                    name: input.name,
                    height:[input.heightMin,input.heightMax],
                    weigth: [input.weigthMin, input.weigthMax],
                    life_span:input.life_span+" years",
                   temperament:temps
                }
                e.preventDefault()
                dispatch(postDog(newDog))
                alert("¡Dog creado con éxito!")
            setInput({
            name: "", 
            heightMin: "",
            heightMax: "",
            weigthMin:"",
            weigthMax: "",
            life_span: "",
            image: "",
            temperament: [],              
            })
            setTemps([]);
    } else {return alert(error.map((error) => error))}
    console.log(error)

    }


  return (
    <>
 <form onSubmit={(e)=> handleSubmit(e)}>
    <input required type="text" placeholder="Nombre" value={input.name} name="name" onChange={(e)=> handleChange(e)}/> 
     
       {error.name && (<p>{error.name}</p>)}

    <input required type="number" placeholder="Peso mínimo" value={input.weigthMin} name="weigthMin" onChange={(e)=> handleChange(e)}/>
{/* {error.weigthMin && (<p>{error.weigthMin}</p>)} */}
         
         <input required
        type="number"
        placeholder="Peso máximo"
        value={input.weigthMax} 
        name="weigthMax"
        onChange={(e)=> handleChange(e)}/>
        
        

<input required
        type="number"
        placeholder="Altura mínimo"
        value={input.heightMin}
        name="heightMin"
        onChange={(e)=> handleChange(e)}/>
   


        <input required
        type="number"
        placeholder="Altura máximo"
        value={input.heightMax}
        name="heightMax"
        onChange={(e)=> handleChange(e)}/>
         

        <input required
        type="number"
        placeholder="Años de vida"
        value={input.life_span}
        name="life_span"
        onChange={(e) => handleChange(e)}/>
        

        <select name="temperament" onChange={(e)=> handleSelect(e)} placeholder="Temperamentos">
        {temperaments?.map((temp,id)=> (
            <option key={id} value={null}>
                {temp.name}
            </option>
        ))}      
        </select>
        {temps?.map((temp,id)=> {
            return(
                <React.Fragment key={id}>
                {""}
                {temp}
                <button value={temp} onClick={(e)=> handleDelete(e)}>X</button>
                
                </React.Fragment>
            )

        })}

        <button type= "submit" >Crear Dog</button>

      </form>

      <>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjDd9EDL6VoNdUZyy9TcCDBr9l3X56PvySw&usqp=CAU"} alt={"imagendog"} />
      {<p>Nombre del dog: {input.name}</p>}
      {<p>Peso: {input.weigthMin}-{input.weigthMax}</p>}
      {<p>Altura: {input.heightMin}-{input.heightMax}</p>}      
      {<p>Años de vida: {input.life_span}</p>}
            
      </>
    
    
    </>
  )
}
