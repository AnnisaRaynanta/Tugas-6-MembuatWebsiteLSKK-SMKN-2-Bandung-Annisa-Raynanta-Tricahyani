import './visi.css'
import Visi from './desktop.png'
import Misi from './globe.png'

const visi = () => {
    return (
        <div className='visi'>
            <h1>Visi dan Misi</h1>
            <div className='semua22'>


            <div className='visi1'>
                <div className='judul1'>
                <img src={Visi} alt=''/>
           <p >Visi</p>
           </div>
            <p>Menjadi perusahaan penyedia sistem berbasis teknologi canggih yang dapat diandalka</p>
            </div>
            <div className='misi1'>
                <div className='judul1'>
                <img src={Misi} alt=''/>
                <p>Misi</p>
                </div>
               
                <p>1. Memberikan sistem yang cukup baik bagi pengguna untuk berhasil menjalankan misi merek</p>
                <p >2. Menjadi wahana bagi penerapan kepakaran di bidang teknik secara professional untuk meningkatkan daya saing global dan kesejahteraan Bangsa Indonesia</p>
                

            </div>
            </div>
            
        </div>
    )
}

export default visi;