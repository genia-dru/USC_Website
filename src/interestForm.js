//import { render } from '@testing-library/react';
//import 'semantic-ui-css';
//import { render } from '@testing-library/react';
import React from 'react';
import { Button, Form, Container, Header, Dropdown } from 'semantic-ui-react';
import './interestForm.css';



// const InterestForm = () => {
export default function InterestForm () {

    return (
        <Container fluid className="form-container">
        <Header as='h2'>Interest Form</Header>
        <Form className="interest-form">
            <Form.Field className="form-field">
                <label>Name</label>
                <input placeholder='Name' />
            </Form.Field>
            <Form.Field className="form-field">
                <label>E-Mail</label>
                <input placeholder='E-mail' />
            </Form.Field>
            <Form.Field className="form-field">
                <label>Current place/country of residence</label>
                <input placeholder='Residence' />
            </Form.Field>
            <Form.Field className="form-field">
                <label>Current or most recent affiliation (institution)</label>
                <input placeholder='Institution' />
            </Form.Field>

            {/* dropdown here */}
            <Form.Field className="form-field">
                
                <label>Current Position</label>
                <div class="ui selection dropdown">
                    <input type="hidden" name="gender"></input>
                    <i class="dropdown icon"></i>
                    <div class="default text">Position</div>
                    <div class="menu">
                        <div class="item" data-value="0">Faculty</div>
                        <div class="item" data-value="1">Postdoctorates</div>
                        <div class="item" data-value="2">PhD Student</div>
                        <div class="item" data-value="3">Masters Student</div>
                        <div class="item" data-value="4">Undergraduate Student</div>
                        <div class="item" data-value="5">Other</div>
                    </div>
                </div>
            </Form.Field>

            <Form.Field className="form-field">
                <label>Your primary area(s) of interest</label>
                <input placeholder='Interests' />
            </Form.Field>
            <Form.Field className="form-field">
                <label>Your primary choise of School/Department/Program at USC</label>
                <input placeholder='School/Department' />
            </Form.Field>
            <Form.Field className="form-field">
                <label>Your Message</label>
                <textarea rows="3" className="message-field" placeholder='Please tell us a little about yourself and what kinds of opportunities you are looking for' />
            </Form.Field>
            
            <Button className="submit-button" type='submit'>Submit</Button>
        </Form>
        </Container>
    )



}
// export default InterestForm; 
