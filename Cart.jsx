import { useSelector } from 'react-redux';

import Card from '../components/Card';
import './Products.css'


const Cart=()=>{
    const cart = useSelector((state) => state.cart)

            return (<div className='products'>
                {
                cart.map((item) => <Card img={item.img} key={item.id} id={item.id} price={item.price}  isCart={true} description={item.description}/>)
                }
            </div>)
}

export default Cart