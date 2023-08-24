import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import ProductBanner from "../components/ProductBanner"

const Root=()=>{
    return <>   
     <Header/>
     <ProductBanner/>
    <main>
        <Outlet/>
    </main>
    </>

}

export default Root