import { Row, Col } from 'react-bootstrap';
import SignUpForm from "../components/form";
import React, { useState } from "react";
import axios from 'axios';
import Upload from "../components/Upload"
import "./style.css"
import QR from "../components/QR"

import { useEffect } from 'react';

function SignUp() {
    const [name,setName] = useState("")
    const [URL,setURL] = useState("");
    const [CheckIn,setCheckIn] = useState(0)
    const [profile, setProfile] = useState('');
    const [location,setlocation] = useState('');
    const [showQRpopUp,setshowQRpopUp] = useState(false);
    const [getUrlcheckIn,setgetUrlcheckIn] = useState("");
    const [getUrlcheckOut,setUrlcheckOut] = useState("");

    function clearstate() {
        setName("")
        setURL("")
        setProfile("")
        setlocation("")
    }

    function handleclick() {
        axios.post("http://localhost:3000/location/register", { amountOfCheckIn: Number(CheckIn), location: URL, name: name, picture:profile, address:location })
            .then(function (response) {
                alert("success")
                console.log("post success")
                setshowQRpopUp(true);
                setgetUrlcheckIn(response.data.checkInURL);
                setUrlcheckOut(response.data.checkOutURL);
            }).catch(function (error) {
                console.log("post failed")
                console.log(error)
                alert("กรุณากรอกข้อมูลให้ครบถ้วน")
            });
        
    }

    function handleClose(){
        setshowQRpopUp(false)
        clearstate();
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
                        {/* <SignUpForm name="Amount of checkIn" val={CheckIn} type="number" onChange={setCheckIn} /> */}
                        <p>Upload Picture</p>
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
            {showQRpopUp? <QR handleClose={() => {handleClose()}} getUrlcheckIn={getUrlcheckIn} getUrlcheckOut={getUrlcheckOut}/>:null}
        </div>
    )
}

export default SignUp;