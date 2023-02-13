import React from 'react';
import './Form1.css'
import {Col, Form} from 'reactstrap';

const Form1 = () => {
    return <Col lg='12'>
        <div className='form-bar'>
            <Form className='d-flex align-items-center gap-4'>
                <div>
                    <h4  className='form'>Want to know your Bussiness Opportunities?</h4>
                    <label className='form'> Enter Your Email ID: </label><input type="text" className='input' placeholder='Email ID'/>
                    <span className='form1'> * </span>
                    <br/>
                    <a href='/qna' className='form1'>Click Here To Get Started</a>
                    
                </div>
            </Form>
        </div>
    </Col>
};

export default Form1;