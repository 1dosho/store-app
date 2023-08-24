import Card from "../components/Card"
import products from '../assets/products.json'
import '../pages/Products.css'
import OurProducts from "../components/OurProducts"

const Products=()=>{
    return (<div>
        <div><OurProducts/></div>
         <div className="products">
        {products.map((product) => {
            return <Card key={product._id} id={product._id} img={product.image} price={product.price} description={product.description}/>
        })}
    </div>
    </div>
   
    )
    
}

export default Products