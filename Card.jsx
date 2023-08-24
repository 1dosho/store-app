/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';

import { addToCart } from '../store/cartSlice';
import './Card.css'


const Card = ({id, img, price, description, isCart=false})=>{
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addToCart({
      id, img, price, description
    }))
    }

    return <div className="card-body">
        <img src={img} alt="img"/>
        <h2>price:${price}</h2>
        <p>{description}</p>
        {!isCart && <button onClick={()=> handleClick()}>Add to cart!</button>}
    </div>
}

export default Card