import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [comp, setComp] = useState("");
    const [skills, setSkills] = useState("");
    const [location, setLocation] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc || !comp || !skills || !location) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc , comp, skills, location);
            setTitle("");
            setDesc("");
            setComp("");
            setSkills("");
            setLocation("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Post your Web3/Web2 Job</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Position</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Job Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="comp" className="form-label">Company Name</label>
                    <input type="text" value={comp} onChange={(e) => setComp (e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="skills" className="form-label">Skills Required</label>
                    <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add Job</button>
            </form>
        </div>
    )
}
