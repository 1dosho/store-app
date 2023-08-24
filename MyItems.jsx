import { useSelector } from 'react-redux';


const MyItems = ()=>{
    const cart = useSelector((state) => state.cart)

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })

        return total
    }

  return <>{getTotalQuantity() || 0}</>
}

export default MyItems