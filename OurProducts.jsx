import { useNavigate } from 'react-router-dom'
import MyItems from './MyItems'
import './OurProducts.css'

const OurProducts = ()=>{
    const navigate = useNavigate();

    return <div className="our-products">
        <h1>Our Products</h1>
        <h2 onClick={() => navigate("/cart")}>My cart(<MyItems/>)</h2>
    </div>
}
export default OurProducts