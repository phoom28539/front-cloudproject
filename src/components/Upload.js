import React from 'react';
import { useState} from 'react';
import axios from 'axios';
// import {useForm} from "react-hook-form"

function Upload(props) {

    function handlefile(e) {
        const file = e.target.files[0]
        const formdata = new FormData()

        formdata.append('file', file)

        axios.post("http://localhost:3000/location/upload", formdata)
            .then(function (response) {
                console.log(response.data)
                console.log(response)
                setTimeout(
                    () => props.setData(response.data),500
                )
                
                console.log("set pic success")
            }).catch(function (error) {
                console.log(error);
            });
    }


    return (
        <>
            <input type="file" name="file" onChange={(e) => handlefile(e)}></input>
            {/* <button className="btn-upload" onClick={} type="button">Upload</button> */}
        </>
    );
}

export default Upload;