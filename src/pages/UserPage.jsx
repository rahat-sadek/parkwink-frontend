import React, {useState, useEffect} from "react";
import axios from "axios";
const UserPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // axios.get('').then(response => setData(response.data));
    }, []);
    return (
        <>
            <h1>pagina per gli utenti</h1>
            <label>Nome utente</label>
            <input type="text" placeholder="Nome"></input>
            
        </>
    )

};
export default UserPage;