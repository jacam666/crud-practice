import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import '../App.css';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post('https://64bad0c25e0670a501d6ad84.mockapi.io/fakeData', {
        firstName,
        lastName,
        checkbox,
    }).then(() => {
        navigate('/read')
    })
    }

    const navigate = useNavigate();



    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button className='button' onClick={postData} type='submit'>Submit</Button>
                <Link to='/read'>
            <Button className='button'>head to read page</Button>
            </Link>
            </Form>
            
        </div>
    )
}