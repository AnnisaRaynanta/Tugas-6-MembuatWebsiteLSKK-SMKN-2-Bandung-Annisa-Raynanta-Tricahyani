
import { Route, Routes } from 'react-router-dom';
import Beranda from './beranda/beranda'
import Tentang from './tentang/tentang'
import Hubungi from './hubungi/hubungi'
import Layanan from './layanan/layanan'
import Tekido from './tekido/tekido'
import Kontakdata from './hubungi/admin';
import AlatPeraga from './keterangan/alat-peraga';
import AlatPeraga1 from './keterangan/alat-peraga1';
import AlatPeraga2 from './keterangan/alat-peraga2';
import AlatPeraga3 from './keterangan/alat-peraga3';
import AlatPeraga4 from './keterangan/alat-peraga4';
import AlatPeraga5 from './keterangan/alat-peraga5';
import AlatPeraga6 from './keterangan/alat-peraga6';
import AlatPeraga7 from './keterangan/alat-peraga7';
import AlatPeraga8 from './keterangan/alat-peraga8';
import AlatPeraga9 from './keterangan/alat-peraga9';
import AlatPeraga10 from './keterangan/alat-peraga10';
import AlatPeraga11 from './keterangan/alat-peraga11';
import AlatPeraga12 from './keterangan/alat-peraga12';
import AlatPeraga13 from './keterangan/alat-peraga13';
import AlatPeraga14 from './keterangan/alat-peraga14';







const App = ()=>{
    return(
       <Routes>
   
    <Route path='/' element={<Beranda/>}/>
    <Route path='/tentang' element={<Tentang/>}/>
    <Route path='/hubungi' element={<Hubungi/>}/>
    <Route path='/layanan' element={<Layanan/>}/>
    <Route path='/admin' element={<Kontakdata/>}/>
    <Route path='/tekido' element={<Tekido/>}/>
    <Route path='/AlatPeraga' element={<AlatPeraga/>}/>
    <Route path='/AlatPeraga1' element={<AlatPeraga1/>}/>
    <Route path='/AlatPeraga2' element={<AlatPeraga3/>}/>
    <Route path='/AlatPeraga3' element={<AlatPeraga3/>}/>
    <Route path='/AlatPeraga4' element={<AlatPeraga4/>}/>
    <Route path='/AlatPeraga5' element={<AlatPeraga5/>}/>
    <Route path='/AlatPeraga6' element={<AlatPeraga6/>}/>
    <Route path='/AlatPeraga7' element={<AlatPeraga7/>}/>
    <Route path='/AlatPeraga8' element={<AlatPeraga8/>}/>
    <Route path='/AlatPeraga9' element={<AlatPeraga9/>}/>
    <Route path='/AlatPeraga10' element={<AlatPeraga10/>}/>
    <Route path='/AlatPeraga11' element={<AlatPeraga11/>}/>
    <Route path='/AlatPeraga12' element={<AlatPeraga12/>}/>
    <Route path='/AlatPeraga13' element={<AlatPeraga13/>}/>
    <Route path='/AlatPeraga14' element={<AlatPeraga14/>}/>
       </Routes>

    )
}

export default App;