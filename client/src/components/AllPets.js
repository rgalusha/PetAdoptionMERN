import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Navigate } from '@reach/router';

const AllPets = () => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setAllPets(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h1>Pet Shelter</h1>
                <Link to="/pets/new" className="d-inlineblock">add a pet to the shelter</Link>
            </div>
            <div>
                <h3 className="text-left mt-4">These pets are looking for a good home</h3>
                <table className="table table-hover mt-4">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPets.map((pet, i) => {
                                return <tr key={i}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={ `/pets/${pet._id}`} className="btn btn-medium btn-primary mr-3">details</Link>
                                        <Link to={ `/pets/${pet._id}/edit`} className="btn btn-medium btn-primary">edit</Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default AllPets;