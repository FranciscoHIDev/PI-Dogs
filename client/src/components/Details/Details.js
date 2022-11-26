import React from 'react'
//import { connect } from 'react-redux'
import { getDogId } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Details() {

    const params = useParams()
    const dispatch = useDispatch()
    const dog = useSelector(state => state.dog)

    React.useEffect(() => {
        dispatch(getDogId(params.id))
    }, [dispatch, params.id])

    return (
        <>

            {dog ? (
                <div>

                    <img src={dog[0].image} alt={dog[0].name} />
                    <h3>Nombre: {dog[0].name}</h3>
                    <h3>Altura: {dog[0].height[0]}-{dog[0].height[1]} cm</h3>
                    <h3>Peso: {dog[0].weight[0]}-{dog[0].weight[1]} kg</h3>
                    <h3>Años de vida: {dog[0].life_span}</h3>
                    <h3>Temperamento: {dog[0].temperaments.map(t => t + ', ')}</h3>
                </div>
            ) : (
                <img src='https://acegif.com/wp-content/uploads/loading-4.gif' alt='loading' />

            )}
        </>
    )
}
export default Details

// class Details extends Component {

//     componentDidMount() {
//         const dogId = this.props.match.params.id;t
//         this.props.getDogId(dogId)
//     }

//     render() {
//         return (
//             <>

//                 <img src={this.props.dog.image} alt={this.props.dog.name} />
//                 <h3>Nombre: {this.props.dog.name}</h3>
//                 <h3>Temperamento: {this.props.dog.temperaments}</h3>
//                 <h3>Altura: {this.props.dog.height}</h3>
//                 <h3>Peso: {this.props.dog.weight}</h3>
//                 <h3>Años de vida: {this.props.dog.life_span}</h3>

//             </>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         dog: state.dogDetails
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getDogId: id => dispatch(getDogId(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Details)