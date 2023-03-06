import React, { useEffect, useState } from 'react';

//Components:
import UserItem from './UserItem';

import * as UserServer from './UserServer';

const UserList = () => {
    const [users, setUsers] = useState([]);
    
    const listUsers = async() =>{
        try{
            const res = await UserServer.listUsers();
            const data = await res.json();
            setUsers(data.users);
            console.log(data.users);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        listUsers();
    }, []);
    return (
        <div className='row'> 
            {users.map((user) => (
                <UserItem key={user.id} user={user} listUsers={listUsers}/>
            ))}
        </div>
    )
}

export default UserList;