import React from "react";
import { useNavigate } from "react-router-dom";

import * as UserServer from "./UserServer";

const UserItem = ({ user, listUsers }) => {
    const navigate = useNavigate();
    // console.log('props.user = ' + props.user + '///');
    console.log(user);
    
    const handleDelete = async (userId) =>{
        //console.log(userId)
        await UserServer.deleteUser(userId);
        listUsers();
    };
    
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-body">
                <h3 className="card-title">Hola {user.name} !<button onClick={()=> navigate(`/updateUser/${user.id}`)} className="ms-2 btn btn-sn btn-info">Update</button></h3>
                <p className="card-text">Correo: <strong>{user.email}</strong></p>
                <p className="card-text">Nombre de Usuario: <strong>{user.nick}</strong></p>
                <button onClick={()=> user.id && handleDelete(user.id)} className="btn btn-danger my-2">Eliminar usuario</button>
            </div>
        </div>
    )
};

export default UserItem;