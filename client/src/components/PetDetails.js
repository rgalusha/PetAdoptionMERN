import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const PetDetails = (props) => {
    const [petInfo, setPetInfo] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.petid}`)
            .then(res => {
                setPetInfo(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    const deletePet = (e) => {
        axios.delete(`http://localhost:8000/api/pets/${props.petid}`)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h1>Pet Shelter</h1>
                <Link to="/" className="d-inlineblock">back to home</Link>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h3>Details about {petInfo.name}</h3>
                <button onClick={ deletePet } className="btn btn-large btn-danger">Adopt {petInfo.name}</button>
            </div>
            <div className="border mt-3">
                <div className="d-flex align-items-center ml-3 mt-3">
                    <p className="font-weight-bold petinfo">Pet type:</p>
                    <p className="ml-5 petinfo">{petInfo.type}</p>
                </div>
                <div className="d-flex align-items-center ml-3 mt-3">
                    <p className="font-weight-bold petinfo">Description:</p>
                    <p className="ml-3 petinfo">{petInfo.description}</p>
                </div>
                <div className="d-flex align-items-center ml-3 mt-3">
                    <p className="font-weight-bold petinfo">Skills:</p>
                    <div className="d-flex flex-column">
                        <p className="ml-3 petinfo">{petInfo.skillOne}</p>
                        <p className="ml-3 petinfo">{petInfo.skillTwo}</p>
                        <p className="ml-3 petinfo">{petInfo.skillThree}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default PetDetails;