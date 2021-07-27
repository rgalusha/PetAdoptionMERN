import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const CreatePet = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/create', {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
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
            <h3 className="text-left mt-4">Know a pet needing a home?</h3>
            <div className="border mt-4">
                <form onSubmit={ submitHandler } className="form">
                    <div className="row m-3">
                        <div className="col">
                            <h6>Pet Information (required)</h6>
                            <label htmlFor="name" className="control-label">Name: </label>
                            <input onChange={ (e) => setName(e.target.value) } type="text" className="form-control" name="name" />
                            {formErrors.name ? <p className="text-danger">{formErrors.name.message}</p>: ""}
                        </div>
                        <div className="col">
                            <h6>Skills (optional)</h6>
                            <label htmlFor="skillOne" className="control-label">Skill 1: </label>
                            <input onChange={ (e) => setSkillOne(e.target.value) } type="text" className="form-control" name="skillOne" />
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <label htmlFor="type" className="control-label">Type: </label>
                            <input onChange={ (e) => setType(e.target.value) } type="text" className="form-control" name="type" />
                            {formErrors.type ? <p className="text-danger">{formErrors.type.message}</p>: ""}
                        </div>
                        <div className="col">
                            <label htmlFor="skillTwo" className="control-label">Skill 2: </label>
                            <input onChange={ (e) => setSkillTwo(e.target.value) } type="text" className="form-control" name="skillTwo" />
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <label htmlFor="description" className="control-label">Description: </label>
                            <input onChange={ (e) => setDescription(e.target.value) } type="text" className="form-control" name="description" />
                            {formErrors.description ? <p className="text-danger">{formErrors.description.message}</p>: ""}
                        </div>
                        <div className="col">
                            <label htmlFor="skillThree" className="control-label">Skill 3: </label>
                            <input onChange={ (e) => setSkillThree(e.target.value) } type="text" className="form-control" name="skillThree" />
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <input className="btn btn-lg btn-primary" type="submit" value="Add Pet" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CreatePet;