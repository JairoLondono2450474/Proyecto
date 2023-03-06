import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as UserServer from "./UserServer";

const UserForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    //console.log(params);

    const initialState = { id: 0, email: "", password: "", nick: "", name: "" };

    const [user, setUser] = useState(initialState);

    const handleInputChange = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(user);
        try {
            if (!params.id) { //Modo de registro
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

                users.map();
            } else {
                await UserServer.updateUser(params.id, user);
            }
            //navigate("/");
        } catch (error) {
            console.log(error);
        }
    };*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('user :')
        console.log(user);
        try {
            let res;
            if (!params.id) { //Modo de registro
                res = await UserServer.getUser(user.email);
                const data = await res.json();
                //console.log(data);
                if (data.message === "Success") {
                    console.log('Usuario encontrado')
                    navigate("/user");
                } else {
                    console.log('Usuario no encontrado')
                }
            }

        } catch (error) {
            console.log(error);
        }
    };

    const getUser = async (userId) => {

        try {
            const res = await UserServer.getUser(userId);
            const data = await res.json();
            //console.log(data);
            const { email, password, nick, name } = data.user;
            setUser({ email, password, nick, name });
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        if (params.id) {
            getUser(params.id);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Log in</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="text" name="email" value={user.email} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" name="password" value={user.password} onChange={handleInputChange} className="form-control" minLength="8" maxLength="50" required />
                </div>
                <div className="d-grid gap-2">
                    {
                        params.id ? (
                            <button type="submit" className="btn btn-block btn-primary">
                                Update
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-block btn-success">
                                Ingresar
                            </button>
                        )}
                </div>
            </form>
        </div>
    )
};

export default UserForm;