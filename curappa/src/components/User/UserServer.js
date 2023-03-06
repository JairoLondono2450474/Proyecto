const API_URL = "http://localhost:8000/api/users/";

export const listUsers = async () => {
    return await fetch(API_URL);
};

export const getUser = async (userId) => {
    return await fetch(`${API_URL}${userId}`);
};


export const registerUser = async (newUser) => {
    return await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": String(newUser.email).trim(),
            "password": String(newUser.password),
            "nick": String(newUser.nick).trim(),
            "name": String(newUser.name).trim(),
        })
    });
};

export const updateUser = async (userId, updatedUser) => {
    return await fetch(`${API_URL}${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": String(updatedUser.email).trim(),
            "password": String(updatedUser.password),
            "nick": String(updatedUser.nick).trim(),
            "name": String(updatedUser.name).trim(),
        })
    });
};

export const deleteUser = async (userId) => {
    return await fetch(`${API_URL}${userId}`,
        {
            method: "DELETE",
        });
};