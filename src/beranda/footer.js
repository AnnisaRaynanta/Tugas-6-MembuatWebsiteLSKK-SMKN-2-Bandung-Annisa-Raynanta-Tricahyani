import {Link} from 'react-router-dom'
import './footer.css'
import Facebook from './facebook.png'
import Youtube from './youtube.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="satu">
                <h1 id='text6'>Tautan Berguna</h1>
                <Link className='link1' to="/">&gt; Beranda</Link>
            <Link className='link1' to="/tentang">&gt;Tentang Kami</Link>
            <Link className='link1' to="layanan">&gt; Layanan</Link>
            <Link className='link1' to="/tekido">&gt;Tekido</Link>
            <Link className='link1' to="/hubungi">&gt;Hubungi Kami</Link> 
            </div>
            <div className="dua">
                <h1 id='text7'>Kantor Utama</h1>
                <p id='text9'>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263
                Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
               <p>Nomer Telfon (Kantor Utama): (022) 7351 6650</p>
               <p>Email: pt.lskk@gmail.com</p>
            </div>
            <div className="tiga">
                <h1 id='text8'>Workshop</h1>
                <p id='textt'>Jl. Punclut No. 516 Ciumbeuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat, 40142</p>
                <p>Nomer Telfon (Workshop): (022) 7302571</p>
               
                <a href='https://www.facebook.com/lskkgroup/' target='_blank'><img id='enam' src={Facebook} alt=''/></a>
                <a href='https://www.youtube.com/channel/UCjLXig1vvaNOwcjNgz9_ZdQ' target='_blank'><img id='lima' src={Youtube} alt=''/></a>
            
            </div>
            
        </div>
     );
}
 
export default Footer;