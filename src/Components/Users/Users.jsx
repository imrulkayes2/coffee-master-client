import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    const handleDeleteUser = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('user delete Successfully');
                    const remainingUser = users.filter(user => user._id !== id);
                    setUsers(remainingUser);
                }

            })
    }
    return (
        <div>
            <h2>Totoal User:{loadedUser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>S.L No.</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Loged In</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLogedAt}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;