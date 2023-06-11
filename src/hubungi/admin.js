import axios from "axios";
import { useEffect, useState } from "react";

export default function Kontakdata() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/lskk/user').then(function(responses) {
            console.log(responses.data);
            setUsers(responses.data);
        });

    }
    
    return (
        <>
        
        <div className="md:px-32 py-8 w-full">
            <h1 className="text-center text-2xl mb-20">LIST DATA STARTUP</h1>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                        <th>Nama depan</th>
                        <th>Nama Belakang</th>
                        <th>Email</th>
                        <th>Pesan</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 ">
                        {users.map((user, key) => 
                            <tr key={key} className="text-center">
                                <td>{user.nama_depan}</td>
                                <td>{user.nama_belakang}</td>
                                <td>{user.email}</td>
                                <td>{user.pesan}</td>
                            </tr>

                        )}
                    
                    </tbody>
                </table>
            </div>
        </div>  
        </>
    )
}