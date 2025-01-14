import React, {useState, useEffect} from "react";
const [data, setData] = useState([]);

const UserPage = () => {
    useEffect(() => {
        axios.get('/api/v1/user').then(response => setData(response.data));
    }, []);
    return (
        <>
            <h1>pagina per gli utenti</h1>
        </>
    )

};
export default UserPage;