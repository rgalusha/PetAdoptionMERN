import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditPet = (props) => {
    const [petInfo, setPetInfo] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.petid}`)
            .then(res => {
                setPetInfo(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    const changeHandler = e => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props.petid}`, petInfo)
            .then(res => {
                if (res.data.results) {
                    navigate("/")
                } else {
                    console.log("Error on form submission");
                    console.log(res)
                    setFormErrors(res.data.err.errors)
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h1>Pet Shelter</h1>
                <Link to="/" className="d-inlineblock">back to home</Link>
            </div>
            <h3 className="text-left mt-4">Edit {petInfo.name}</h3>
            <div className="border mt-4">
                <form onSubmit={ submitHandler } className="form">
                    <div className="row m-3">
                        <div className="col">
                            <h6>Pet Information (required)</h6>
                            <label htmlFor="name" className="control-label">Name: </label>
                            <input onChange={ changeHandler } type="text" className="form-control" name="name" value={petInfo.name} />
                            {formErrors.name ? <p className="text-danger">{formErrors.name.message}</p>: ""}
                        </div>
                        <div className="col">
                            <h6>Skills (optional)</h6>
                            <label htmlFor="skillOne" className="control-label">Skill 1: </label>
                            <input onChange={ changeHandler } type="text" className="form-control" name="skillOne" value={petInfo.skillOne} />
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <label htmlFor="type" className="control-label">Type: </label>
                            <input onChange={ changeHandler } type="text" className="form-control" name="type" value={petInfo.type} />
                            {formErrors.type ? <p className="text-danger">{formErrors.type.message}</p>: ""}
                        </div>
                        <div className="col">
                            <label htmlFor="skillTwo" className="control-label">Skill 2: </label>
                            <input onChange={ changeHandler } type="text" className="form-control" name="skillTwo" value={petInfo.skillTwo} />
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <label htmlFor="description" className="control-label">Description: </label>
                            <input onChange={ changeHandler } type="text" className="form-control" name="description" value={petInfo.description} />
                            {formErrors.description ? <p className="text-danger">{formErrors.description.message}</p>: ""}
                        </div>
                        <div className="col">
                            <label htmlFor="skillThree" className="control-label">Skill 3: </label>
                            <input onChange={ changeHandler } type="text" className="form-control" name="skillThree" value={petInfo.skillThree} />
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <input className="btn btn-lg btn-primary" type="submit" value="Edit Pet" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EditPet;