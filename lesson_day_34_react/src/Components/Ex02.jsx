import { useEffect, useState } from "react";

function Ex02 (){
    const  [users, setUsers] = useState([]);

    useEffect (() =>{
       const fetchUsers = async() => {
        const response = await  fetch ('https://jsonplaceholder.typicode.com/users')
        const jsonData = await response.json ();
       
        setUsers (jsonData);
       };
 
       fetchUsers()
    },[])
    if (!users) return <div>Loading...</div>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );

}

export default Ex02;