import Nav from './navbar'
import Footer from './footer'
// import Latar from './background'
import Background from './background'
import Konten from './konten'
import Footer1 from './footer1'

const Beranda = () => {
    return ( 
        <>
        <Nav/>
       <Background/>
       <Konten/>
        <Footer/>
        <Footer1/>
        </>
     );
}
 
export default Beranda;