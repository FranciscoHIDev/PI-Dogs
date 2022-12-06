import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  getAllDogs, getAllTemps, orderName,orderWeight,filterByTemp  } from '../../redux/actions/index';
import CardDogs from '../Card/CardDogs';
import Nav from '../Nav/Nav.jsx'
import Paginated from '../Paginated/Paginated.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx'
import Footer from '../Footer/Footer.jsx'
import styled from 'styled-components'


function Dogs() {

  const dispatch = useDispatch()
  const allDogs = useSelector((state) => state.dogs)
  const Temps = useSelector((state) => state.temperaments)


  // ----------> paginado <---------- //

  const [page, setPage] = useState(1)
  const [dogsPage, setDogsPage] = useState(8)
  const [orden, setOrden] = useState("")

  const lastDog = page * dogsPage
  const firstDog = lastDog - dogsPage
  const currentDogs = allDogs.slice(firstDog, lastDog)
  const paginado = (pageNumber) => {
    setPage(pageNumber)
  }




  // ----------> Ciclos de vida <---------- //
  React.useEffect(() => {
    dispatch(getAllDogs())
  }, [dispatch])


    React.useEffect(() => {
      dispatch(getAllTemps())
   }, [dispatch])

  // ----------> Filtros <---------- //

  function handleFilterTemp(e){
    dispatch(filterByTemp(e.target.value))
    setPage(1)
  }

  function handleOrderName(e){
    e.preventDefault()
    dispatch(orderName(e.target.value))
    setPage(1)
    setOrden(`Sorted ${e.target.value}`)
  }

  function handleOrderWeight(e){
    e.preventDefault()
    dispatch(orderWeight(e.target.value))
    setPage(1)
    setOrden(`Sorted ${e.target.value}`)
  }

 
// ----------> Renderizado <---------- //
  return (
    <>
    <Nav/>
      <div>
        <SearchBar setPage={setPage} />
      </div>
      <select onChange={(e) => handleFilterTemp(e)}>
    <option key={0} value="temperament">Temperamentos</option>
    {Temps?.map((t)=> {
      return (
        <option key={t.id} value={t.name}> {t.name}</option>
      )})}
  </select>

  <select onChange={(e) => handleOrderName(e)}>
    <option value="asc" >A-Z</option>
    <option value="desc">Z-A</option>
  </select>

  <select onChange={(e) => handleOrderWeight(e)}>
    <option value="weightMin" >Menor peso</option>
    <option value="weightMax">Mayor peso</option>
  </select>
  
  <div>
        <Paginated
          dogsPage={dogsPage}
          allDogs={allDogs.length}
          paginado={paginado} />
  </div>
  
     
       

      <ContainerStyled>
        {currentDogs.length > 0 &&
          currentDogs?.map(d => (
            
              <CardDogs key={d.id}
                id={d.id}
                image={d.image}
                name={d.name}
                weight={d.weight}
                temperaments={d.temperaments?.map(t => t + ', ')} />
          

          ))}

      </ContainerStyled>
      <div>
        <Paginated
          dogsPage={dogsPage}
          allDogs={allDogs.length}
          paginado={paginado} />
      </div>
      <Footer/>
    </>
  )
}



const ContainerStyled = styled.div`
 display:flex;
   flex-direction:row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   align-content: center;  
   background-color: OldLace;
   margin-top: 5px;
   padding-top: 20px;
    padding-bottom: 20px;


`


export default Dogs

