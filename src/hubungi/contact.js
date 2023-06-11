 import './contact.css'
import Lokasi from './location.png'
import Email from './secured.png'
import Phone from './phone.png'
import axios from 'axios'
import { useState } from 'react';

const Contact = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://localhost:80/lskk/user/save', inputs);
        console.log(inputs);
        
    }


    return (
     <div className='contact'>
        
        <div className='contact1'>
        <div className='contact2'>
            <img src={Lokasi} alt=''/>
            <div className='contact3'>
            <h1>Lokasi :</h1>
            <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
            </div>
        </div>
        <div className='contact2'>
            <img src={Email} alt=''/>
            <div className='contact3'>
            <h1>Email :</h1>
            <p>pt.lskk@gmail.com</p>
            </div>
        </div>
        <div className='contact2'>
            <img src={Phone} alt=''/>
            <div className='contact3'>
            <h1>Nomer Telfon :</h1>
            <p>(022) 73516650</p>
            </div>
        </div>
        </div>

        <div className='contact4'>
            <form onSubmit={ handleSubmit}>
                
                <input required onChange={handleChange} name='nama_depan' id='input1' type='text' placeholder='Nama Depan'></input>
                <input required onChange={handleChange} name='nama_belakang' id='input4' type='text' placeholder='Nama Belakang'></input>
                
                <div className='contact5'>
                <input required onChange={handleChange} name='email' id='input2' type='text' placeholder='email'></input>
                <input required onChange={handleChange} name='pesan' id= 'input3' type='text' placeholder='pesan'></input>
                
                </div>   
                <button id='kirim'>Kirim Pesan</button>        
            </form>
        </div>
     </div>
    )
}

export default Contact;