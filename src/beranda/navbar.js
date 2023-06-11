import './navbar.css'
import logo from './logodeal.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="logo">
                <img src={logo} alt=''/>
            </div>
            <div className='link'>
            <Link className='navigasi' to="/">Beranda</Link>
            <Link className='navigasi' to="/tentang">Tentang Kami</Link>
            <Link className='navigasi' to="/layanan">Layanan</Link>
            <Link className='navigasi' to="/tekido">Tekido</Link>
            <Link className='navigasi' to="/hubungi">Hubungi Kami</Link> 
           </div>
        </div>
     );
}
 
export default Navbar;