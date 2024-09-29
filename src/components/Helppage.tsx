import React, { useState } from 'react';
import './Helppage.css';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { basedUrl } from './index';
import axios from 'axios';

interface IFormData {
    firstName: string;
    lastName: string;
    email: string;
    topic: string;
    description: string;
}

const initialState:IFormData = {
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    description: ""
}

function Helppage() {
    const [input, setInput] = useState<IFormData>(initialState);
    const { firstName, lastName, email, topic, description } = input;
    const [load, setLoad] = useState<boolean>(false);

    const nav = useNavigate();
    const fetchApi = async () => {
        try {
            setLoad(true);
            const formsData = new FormData();
            formsData.append("title", firstName+lastName+email);
            formsData.append("body", topic+description);
            const res = await axios.post(`${basedUrl}posts`, formsData);
            if(res.status === 201) {
                nav('/Thankyou');
                setInput(initialState);
                setLoad(false);
            }
        }catch(e) {
            alert("Failed to send request");
            setInput(initialState);
        }
    }

    return (
        <div className="form">
            <h1>Support Ticket Form</h1>
            <form action="">
                <div className="contain1">
                <div className="name">
                    <div className="label">
                        <p className="namelabel">Name</p>
                        <p className="must">*</p>
                    </div>
                    <input type="text" id="firstname" value={firstName} onChange={(e) => {setInput({...input, firstName:e.target.value})}} />
                    <input type="text" id="lastname" value={lastName} onChange={(e) => {setInput({...input, lastName:e.target.value})}} />
                    <div className="bottomlabel">
                        <p className="first">First</p>
                        <p className="last">Last</p>
                    </div>
                </div>
                <div className="email">
                    <div className="label">
                        <p className="emaillabel">Email</p>
                        <p className="must">*</p>
                    </div>
                    <input type="text" id="email" value={email} onChange={(e) => {setInput({...input, email:e.target.value})}} />
                </div>
                <div className="topic">
                    <div className="label">
                        <p className="topiclabel">Topic</p>
                        <p className="must">*</p>
                    </div>
                    <div className="cont">
                        <p>What can we help you today?</p>
                        <div className="radio">
                            <div className="general">
                                <input type="radio" name="topics" value="general" onChange={(e) => {setInput({...input, topic:e.target.value})}} />
                                <p>General</p>
                            </div>
                            <div className="bug">
                                <input type="radio" name="topics" value="bug" onChange={(e) => {setInput({...input, topic:e.target.value})}}/>
                                <p>Bug</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="contain2">
                    <div className="description">
                        <div className="label">
                            <p className="desclabel">Description</p>
                            <p className="optional">optional</p>
                        </div>
                        <textarea name="desc" id="desc" placeholder="Description Report" value={description} onChange={(e) => {setInput({...input, description:e.target.value})}}></textarea>
                    </div>
                </div>
            </form>
            <button className="send" onClick={fetchApi} disabled={firstName.length<1||lastName.length<1||email.length<1||topic.length<1||load===true} style={firstName.length<1||lastName.length<1||email.length<1||topic.length<1||load?{backgroundColor:"grey", cursor:"auto"}:{backgroundColor:"orange"}}>SEND</button>
        </div>
    );
}

export default Helppage;