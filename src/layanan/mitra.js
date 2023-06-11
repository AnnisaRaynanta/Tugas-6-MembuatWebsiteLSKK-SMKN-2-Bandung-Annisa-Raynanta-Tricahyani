import './mitra.css'
import Client2 from './client-2.png'
import Client3 from './client-3.png'
import Client4 from './client-4.png'
import Client5 from './client-5.png'

const mitra = () => {
    return (
        <div className='mitra'>
       <h1>Mitra Kami</h1>
       <div className='mitra1'>
        <img src={Client2} alt=''/>
        <img src={Client3} alt=''/>
        <img src={Client4} alt=''/>
        <img src={Client5} alt=''/>
       </div>
        </div>
    )
}

export default mitra;