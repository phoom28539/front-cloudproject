import React from 'react';
import {Form} from 'react-bootstrap';


function SignUpForm(props){

    function handleChange(e) {
        props.onChange(e.target.value)
    }
    
    return (

        <Form.Group controlId={props.controlId} className= {props.className}>
            <Form.Label>{props.name}</Form.Label>
            <Form.Control placeholder={props.placeholder} type={props.type} disabled={props.disabled} value={props.val} onChange={handleChange} onClick={handleChange} rows={props.rows} as={props.as}  class={props.class} min={props.min} required/>
        </Form.Group>
    );
}

export default SignUpForm;