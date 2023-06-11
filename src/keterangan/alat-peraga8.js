import Nav from '../beranda/navbar'
import Footer from '../beranda/footer'
import Footer1 from '../beranda/footer1'
import Background from './background33'
import './alatperaga.css'
import Alatperaga from './sembilan.jpg'
import './alatperaga1.css'


const AlatPeraga = () => {
    return ( 
     <div className='semua'>
        <Nav/>
        <Background/>
        <h1>SMART WATERING</h1>
        <div className='semua1'>
          
         
          <img src={Alatperaga} alt=''/>
          <div className='semua2'>
          
          <h2>Pengertian</h2>
          <p>Smart Watering adalah prototipe sistem perawatan tanaman secara otomatis, dimana sistem monitoringnya dirancang melalui Web Perancangan prototipe ini dimaksudkan untuk membantu pengontrolan sistem perawatan tanaman berjenis tomat pada tingkat perorangan (personal user).</p>
            <h2>Fungsi</h2>
            <p>Smart Watering merupakan solusi untuk pengambilan tindakan yang tepat disaat cuaca ekstrem dan mengurangi kesalahan pada manusia (human error). Oleh sebab itu, akan dibuat prototipe Smart Watering yang dapat melakukan penyiraman secara otomatis dengan melihat kondisi pada tanah sebagai media tanamnya.</p>
            <h2>Tanggal Pembuatan</h2>
          <p>Kamis 23/10/2022</p>
          </div>
        </div>
        <Footer1/>
       
     </div>
      
     );
}
 
export default AlatPeraga ;