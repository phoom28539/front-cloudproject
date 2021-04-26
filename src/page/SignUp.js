import { Row, Col } from 'react-bootstrap';
import SignUpForm from "../components/form";
import React, { useState } from "react";
import axios from 'axios';
import Upload from "../components/Upload"
import "./style.css"
import MyMapComponent from '../components/MyMapComponent';

import { useEffect } from 'react';

function SignUp() {
    const [name,setName] = useState("")
    const [URL,setURL] = useState("");
    const [CheckIn,setCheckIn] = useState(0)
    const [profile, setProfile] = useState('');
    const [location,setlocation] = useState('');
    
    function handleclick() {
        axios.post("/location/register", { amountOfCheckIn: Number(CheckIn), location: URL, name: name, picture:profile, address:location })
            .then(function (response) {
                alert("success")
                console.log("post success")
            }).catch(function (error) {
                console.log("post failed")
                console.log(error)
            });
    }

    useEffect(()=>{
        console.log(profile)
    },[profile])
    return(
        <div className="bg-color">
            <Row className="justify-content-center" >
                <Col >
                    <center>
                    <h1 className="title-signup">
                        Register
                    </h1>
                    </center>
                </Col>
            </Row>
            <Row className="justify-content-center overflow-hidden" id="margin-regis">
                <Col lg={6} sm={12}>
                    <div className="box-from">
                        <SignUpForm name="Name" val={name} type="text" onChange={setName} />
                        <SignUpForm name="URL" val={URL} type="text" onChange={setURL} />
                        <SignUpForm name="Amount of checkIn" val={CheckIn} type="number" onChange={setCheckIn} />
                        <p>Upload Profile Picture</p>
                        <Upload setData={setProfile}/>
                        <div className="box-pic"><img className="profile-pic-sign-up" src={ profile === "" ? "default.jpg" : profile}></img></div>
                        <SignUpForm name="Location" val={location} type="text" onChange={setlocation} />
                    </div>
                    
                </Col>
            </Row>
            <Row className="justify-content-center" >
                <Col >
                    <center>
                        <div className="btn-sub">
                            <button  onClick={() => {handleclick()}} type="button" class="btn btn-success btn-lg">Submit</button>
                        </div>
                    </center>
                </Col>
            </Row>
        </div>
    )
}

export default SignUp;