import React, {Component} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootrap/Button';
class NewForm extends Component{
    //state handles form for submission
    constructor(props){
        super(props)
        this.state={
            eID: "",
            first: "",
            last: "",
            phone: "",
            email: "",
            salary: "",
        }
        this.submitClick = this.submitClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    componentDidMount(){

    }
    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    submitClick =()=>{
        axios({
            method:"POST",
            url: "/api/employees",
            data: {
             eid: this.state.eID,
             first_name: this.state.first,
             last_name: this.state.last,
             phone: this.state.phone,
             email: this.state.email,
             salary: this.state.salary
            }
        }).then(alert("The expense item has been updated!"), this.setState({eID:"",first:"", last:"", phone:"", email:"", salary:""}))
    }
    render(){
        return(

            <div class="container">
                <h3  className="text-center">Add New Employee</h3>
                <Form>
                    <Form.Group controlId="formGroupName1">
                        <Form.Label>eID</Form.Label>
                        <Form.Control type="text" placeholder="eID"
                            name="eID"
                            value={this.state.eID}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                  
                    <Form.Group controlId="formGroupNamel">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" 
                            name="first"
                            value={this.state.first}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
  
                  <Form.Group controlId="formGroupName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name"
                        value={this.state.last} 
                        onChange={this.handleChange}
                        name="last"
                    />
                  </Form.Group>
  
                <Form.Group controlID="formGroupName1"/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                    />
                
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        name="phone"
                    />
                </Form.Group>
  
                <Form.Group>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" placeholder="Salary"
                        value={this.state.salary}
                        onChange={this.handleChange}
                        name="salary"
                    />
    
                </Form.Group>
        </Form>  
            <Button className="button1 subButt" onClick={()=>{this.submitClick()}}>Submit</Button>
            <Button className="button1 tablEx1" onClick={()=>{localStorage.clear() 
                                                       window.location.reload()}}>Exit</Button>
            </div>
          
            
        );
    };
};
export default NewForm;