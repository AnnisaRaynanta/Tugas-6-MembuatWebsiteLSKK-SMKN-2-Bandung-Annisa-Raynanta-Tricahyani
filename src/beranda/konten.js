import Gambar from './logodeal.png'
import './konten.css'
import {Link} from 'react-router-dom'

const Konten =()=> {
    return(
        <div className='konten'>
            
            <div className='textaja'>
                <h1><span id='biru'>T</span>entang <span id='kuning'>K</span>ami</h1>
                <p>PT. Langgeng Sejahtera Kreasi Komputasi (PT.LSKK) merupakan perusahaan yang berkedudukan di Bandung yang didirikan pada tahun 2016. Berawal dari sebuah grup yang dimulai pada tahun 2008 sebagai subkontraktor Industri Pertahanan dan TI.</p>
                <button><Link className='kotak' to='/tentang'>Lebih Lanjut</Link></button>
            </div>
            <img src={Gambar} alt=''/>
        </div>
    )
}

export default Konten