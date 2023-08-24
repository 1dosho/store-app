import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

import './Header.css'
import MyItems from './MyItems'
import { useNavigate } from 'react-router-dom'



const Header=()=>{
    const navigate = useNavigate();
    return <header className="header">
        <div className='logo'>
          <FontAwesomeIcon icon={faHouseChimney} className='icon'onClick={() => navigate("/")}/>
        </div>
        <div className='about'>
            <h2>ABOUT US</h2>
        </div>
        <div className='contact'>
            <h2>CONTACT US</h2>
        </div>
        <div>
            <h2 className='bump' onClick={()=>navigate('/cart')}>Items(<MyItems/>)</h2>
        </div>
    </header>
}

export default Header