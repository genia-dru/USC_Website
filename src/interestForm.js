import { render } from 'react-dom';
import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import './interestForm.css';
import axios from 'axios';

class InterestForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Email: '',
            CurrentResidence: '',
            CurrentInstitution: '',
            Position: '',
            Interest: '',
            USCDepartment: '',
            Message: ''
        }
    }

    // SUBMIT HANDLERS
    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        axios.post('https://sheet.best/api/sheets/a185bc92-03fa-4be4-a316-a8a46ddd9e6f', this.state)
        .then(response => {
            console.log(response);
        })
        
        .catch((error) => {
            if (error.response){
                console.log(error.response);
            }else if(error.request){
                console.log(error.request)
            }else if(error.message){
                console.log(error.message)
            }
        })
        this.setState ({
            Name: '',
            Email: '',
            CurrentResidence: '',
            CurrentInstitution: '',
            Position: '',
            Interest: '',
            USCDepartment: '',
            Message: ''
    });
    }

    render() {
        const { Name, Email, CurrentResidence, CurrentInstitution, Position, Interest, USCDepartment, Message} = this.state;
        
        return (
            <Container fluid className="form-container">
            <Form className="interest-form" onSubmit={this.submitHandler}>
                <Form.Field className="form-field">
                    <label>Name</label><br />
                    <input placeholder='Name' type="text" name="Name" value={Name} onChange={this.changeHandler} required />
                </Form.Field>
                <Form.Field className="form-field">
                    <label>E-Mail</label><br />
                    <input placeholder='E-mail' type="text" name="Email" value={Email} onChange={this.changeHandler} required />
                </Form.Field>
                <Form.Field className="form-field">
                    <label>Current place/country of residence</label><br />
                    <input placeholder='Residence' type="text" name="CurrentResidence" value={CurrentResidence} onChange={this.changeHandler} required />
                </Form.Field>
                <Form.Field className="form-field">
                    <label>Current or most recent affiliation (institution)</label><br />
                    <input placeholder='Institution' type="text" name="CurrentInstitution" value={CurrentInstitution} onChange={this.changeHandler} required/>
                </Form.Field>

                <Form.Field className="form-field">
                    <label>Current position</label><br />
                    <select value={Position} name="Position" onChange={this.changeHandler} type="select" class="position" required>
                        <option value="">Select a Position</option>
                        <option value="faculty">Faculty</option>
                        <option value="postDoc">PostDoctorate</option>
                        <option value="phD">PhD Student</option>
                        <option value="masters">Masters Student</option>
                        <option value="undergrad">Undergraduate Student</option>
                        <option value="other">Other</option>
                    </select>
                </Form.Field>

                <Form.Field className="form-field">
                    <label>Your primary area(s) of interest</label><br />
                    <input placeholder='Interests' type="text" name="Interest" value={Interest} onChange={this.changeHandler} required />
                </Form.Field>
                <Form.Field className="form-field">
                    <label>Your primary choice of School/Department/Program at USC</label><br />
                    <input placeholder='School/Department' type="text" name="USCDepartment" value={USCDepartment} onChange={this.changeHandler} required/>
                </Form.Field>
                <Form.Field className="form-field">
                    <label>Message</label><br />
                    <textarea rows="3" className="message-field" 
                        placeholder='Please tell us a little about yourself and what kinds of opportunities you are looking for. If you answered "None" or "Other" for any of the questions above, please explain here.' 
                        type="textarea" name="Message" value={Message} onChange={this.changeHandler} required/>
                </Form.Field>
                
                <Button className="submit-button" type='submit' >Submit</Button>

            </Form>
            </Container>
        )
    }
}

render(<InterestForm />, document.getElementById("root"));
export default InterestForm; 
