import './tim-kami.css'
import Orang1 from './orang1.jpg'
import Orang2 from './orang2.jpg'
import Orang3 from './orang3.jpg'
import Orang4 from './orang4.jpg'
import Orang5 from './orang5.png'
import Orang6 from './orang6.jpg'
import Orang7 from './orang7.jpg'
import Orang8 from './orang8.jpg'
import Orang9 from './orang9.jpg'
import Orang10 from './orang10.jpg'
import Orang11 from './orang11.jpg'

const tim = () => {
    return (
        <div className='tim'>
            
            <h1>Tim Kami</h1>
            <div className='card'>
                <div className='card1'>
                    <img src={Orang1} alt=''/>
                    <div className='nama'>
                    <p>Ferlin Ashadi</p>
                </div>

                </div>
                <div className='card1'>
                    <img src={Orang2} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Ach. Maulana Habibi Yusuf</p>
                </div>
                </div>
                <div className='card1'>
                    <img src={Orang3} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>M. Fahmi Nurfadilah</p>
               </div>
               </div>
                <div className='card1'>
                    <img src={Orang4} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Nurman Hairyanto</p>
                </div>
                </div>
                
            </div>
            <div className='card'>
            <div className='card1'>
                    <img src={Orang5} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Asep Trisna Setiawan</p>
                </div>
                </div>
                
                <div className='card1'>
                    <img src={Orang6} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Adnan Darwanto</p>
                </div>
                </div>
                <div className='card1'>
                    <img src={Orang7} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Sintia Rahmawati</p>
                </div>
                </div>
                <div className='card1'>
                    <img src={Orang8} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Afanin Ryandana</p>
                </div>
                </div>
            </div>
            <div className='card'>
               
                
                <div className='card1'>
                    <img src={Orang9} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Faiza Kailani Kuswanto</p>
                    </div>
                </div>
                <div className='card1'>
                    <img src={Orang10} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Agung Yusuf Wibowo</p>
                </div>
                </div>
                <div className='card1'>
                    <img src={Orang11} alt=''/>
                    <div className='nama'>
                    <p id='nama1'>Muhammad Rizki Fahreza</p>
                    </div>
                </div>
            </div>
            <div className='card'>
              
              
                
            </div>
        </div>
    )
}

export default tim;