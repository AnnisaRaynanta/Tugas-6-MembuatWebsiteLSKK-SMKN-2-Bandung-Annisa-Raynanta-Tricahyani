import Nav from '../beranda/navbar'
import Background1 from './background1'
import Footer from '../beranda/footer'
import Footer1 from '../beranda/footer1'
import Contact from './contact'
 import Maps from './maps'

const hubungi = () => {
    return (
        <>
        <Nav/>
        <Background1/>
        <Contact/>
        { <Maps/> }
        <Footer/>
        <Footer1/>
        </>
    )
}

export default hubungi;