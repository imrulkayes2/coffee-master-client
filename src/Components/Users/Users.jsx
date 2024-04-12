import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
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
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedUser.map(user =>
                                <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{ }</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;