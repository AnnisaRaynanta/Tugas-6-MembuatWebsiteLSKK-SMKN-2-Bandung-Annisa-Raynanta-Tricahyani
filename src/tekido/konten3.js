import './konten3.css'
import {Link} from 'react-router-dom'
import Alat from './satu.jpg'
import Alat1 from './dua.png'
import Alat2 from './tiga.jpg'
import Alat3 from './empat.jpeg'
import Alat4 from './lima.png'
import Alat5 from './enam.jpg'
import Alat6 from './tujuh.jpg'
import Alat7 from './delapan.jpg'
import Alat8 from './sembilan.jpg'
import Alat9 from './sepuluh.jpg'
import Alat10 from './sebelas.png'
import Alat11 from './duabelas.png'
import Alat12 from './tigabelas.png'
import Alat13 from './empatbelas.png'
import Alat14 from './limabelas.png'



const konten3 = () => {
    return ( 
        <div className='produk'>
            
            <p>Semua Produk</p>
        <div className='produk1'>
           
            <div className='produk2'>
                <Link className='alatperaga' to="/AlatPeraga"><img src={Alat} alt=''/></Link>
                <div className='namaaja'>
                    <h1>Iot Alat Peraga</h1>
                    <p>SMART WATERING</p>
                </div>
            </div>
            <div className='produk2'>
                <Link className='alatperaga' to="/AlatPeraga1"><img src={Alat1} alt=''/></Link>
                <div className='namaaja'>
                    <h1>Iot Stater Kit</h1>
                    <p>HOME AUTO LAMP</p>
                </div>
                </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga2"><img src={Alat2} alt=''/></Link>
                <div className='namaaja'>
                    <h1>Iot Alat Peraga</h1>
                    <p>HOME AUTO</p>
                </div>
            </div>
        </div>
        <div className='produk1'>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga3"><img src={Alat3} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Workshop Kit</h1>
                    <p>ENVIROMENTAL SENSOR</p>
                </div>
            </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga4"><img src={Alat4} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Stater Kit</h1>
                    <p>HOME AUTO STECKER</p>
                </div>
            </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga5"><img src={Alat5} alt=''/></Link>
                <div className='namaaja'>
                    <h1>Iot Alat Peraga</h1>
                    <p>SMART PJU</p>
                </div>
            </div>
        </div>
        <div className='produk1'>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga6"><img src={Alat6} alt=''/></Link>
                <div className='namaaja'>
                    <h1>Iot Alat Peraga</h1>
                    <p>SMART PARKING</p>
                </div>
            </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga7"><img src={Alat7} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Workshop Kit</h1>
                    <p>HOME AUTOMATION</p>
                </div>
            </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga8"><img src={Alat8} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Workshop Kit</h1>
                    <p>SMART WATERING</p>
                </div>
            </div>
        </div>
        <div className='produk1'>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga9"><img src={Alat9} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Workshop Kit</h1>
                    <p>SMARTCARD SAGA</p>
                </div>
            </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga10"><img src={Alat10} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Stater Kit</h1>
                    <p>SOIL MOISTURE</p>
                </div>
            </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga11"><img src={Alat11} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Stater Kit</h1>
                    <p>WATER FLOW SMART WATERING</p>
                </div>
            </div>
        </div>
        <div className='produk1'>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga12"><img src={Alat12} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Stater Kit</h1>
                    <p>WATER LEVEL FLOAT</p>
                </div>
            </div>
            <div className='produk2'>
            <Link className='alatperaga' to="/AlatPeraga13"><img src={Alat13} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Stater Kit</h1>
                    <p>HOME AUTO WATER PUMP</p>
                </div>
            </div>
            <div className='produk2'>
               <Link className='alatperaga' to="/AlatPeraga14"><img src={Alat14} alt=''/></Link>
                <div className='namaaja'>
                    <h1>IoT Stater Kit</h1>
                    <p>HOME AUTO WATERING RELAY</p>
                </div>
            </div>
   </div>
   </div>
        
     );
}
 
export default konten3;