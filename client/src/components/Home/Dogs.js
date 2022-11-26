import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllDogs } from './../../redux/actions/index';
import CardDogs from '../Card/CardDogs';

function Dogs() {

  const dispatch = useDispatch()
  const dogs = useSelector((state) => state.dogs)

  React.useEffect(() => {
    dispatch(getAllDogs())

  }, [dispatch])


  return (
    <>
      <h1>Cargando dogs...</h1>
      {dogs.length > 0 &&
        dogs?.map(d => (
          <CardDogs key={d.id}
            id={d.id}
            image={d.image}
            name={d.name}
            weight={d.weight}
            temperaments={d.temperaments.map(t => t + ', ')} />





        ))}
    </>



  )
}

export default Dogs