import './layanan1.css'
import Computer from './computer.png'
import Bag from './bag.png'
import Chart from './chart (1).png'


const layanan1 = () => {
    return (
        <div className='layanan'>
            <div className='layanan1'>
                <img src={Computer} alt=''/>
                <h1>Application Development</h1>
                <p>Tim pengembangan kami adalah platform spesialis yang tidak takut menemukan solusi terbaik untuk setiap kebutuhan bisnis.</p>
            </div>
            <div className='layanan1'>
                <img src={Bag} alt=''/>
                <h1>Software and Hardware</h1>
                <p>Merupakan layanan perusahaan untuk menyediakan solusi di bidang pengadaan hardware seperti laptop (notebook & netbook) dengan berbagai merk, PC (Personal Computer), monitor, printer, LCD Projector, mesin absensi (fingerprint, face detector, proximity, dll), dan lain sebagainya.</p>
            </div>
            <div className='layanan1'>
                <img src={Chart} alt=''/>
                <h1>Business Analytic</h1>
                <p>Analisis bisnis mengacu pada keterampilan, teknologi, dan praktik untuk eksplorasi dan penyelidikan berulang yang berkelanjutan dari kinerja bisnis masa lalu untuk mendapatkan wawasan dan mendorong perencanaan bisnis.</p>
            </div>
        </div>
    )
}

export default layanan1;