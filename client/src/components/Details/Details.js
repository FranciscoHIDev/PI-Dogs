import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogId } from '../../redux/actions/index'
import { Link } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
//import { useParams } from 'react-router-dom'

// Componente Funcional

// function Details() {

//     const { id } = useParams()
//     const dispatch = useDispatch()
//     const dog = useSelector(state => state.dog)

//     React.useEffect(() => {
//         dispatch(getDogId(id))
//     }, [dispatch, id])

//     return (
//         <>

//             {dog ? (

//                 <div>
//                     <img src={dog[0]?.image} alt={dog[0]?.name} />
//                     <h3>Nombre: {dog[0]?.name}</h3>
//                     <h3>Altura: {dog[0]?.height[0]}-{dog[0]?.height[1]} cm</h3>
//                     <h3>Peso: {dog[0]?.weight[0]}-{dog[0]?.weight[1]} kg</h3>
//                     <h3>Años de vida: {dog[0]?.life_span}</h3>
//                     <h3>Temperamento: {dog[0]?.temperaments?.map(t => t + ', ')}</h3>
//                 </div>

//             ) : (
//                 <img src='https://acegif.com/wp-content/uploads/loading-4.gif' alt='loading' />

//             )}
//         </>
//     )
// }
// export default Details

// Compononente de Clase

class Details extends Component {

    componentDidMount() {
        const dog = this.props.match.params.id;
        this.props.getDogId(dog)
    }

    render() {
        return (

            <>

                {this.props.dog ? (

                    <div>
                        <Link to={"/home"}>
                            <button>Back</button>

                        </Link>
                        <img src={this.props.dog[0]?.image} alt={this.props.dog[0]?.name} />
                        <h3>Nombre: {this.props.dog[0]?.name}</h3>
                        <h3>Altura: {this.props.dog[0]?.height[0]}-{this.props.dog[0]?.height[1]} cm</h3>
                        <h3>Peso: {this.props.dog[0]?.weight[0]}-{this.props.dog[0]?.weight[1]} kg</h3>
                        <h3>Años de vida: {this.props.dog[0]?.life_span}</h3>
                        <h3>Temperamento: {this.props.dog[0]?.temperaments?.map(t => t + ', ')}</h3>
                    </div>

                ) : (
                    <img src='https://acegif.com/wp-content/uploads/loading-4.gif' alt='loading' />

                )}
            </>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        dog: state.dog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDogId: id => dispatch(getDogId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)