import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from "react-bootstrap/Button"
class Update extends Component{
    constructor(props){
        super(props)

        this.state={
            id: this.props.id,
            first: "",
            last: "",
            email:"",
            phone:"",
            salary:""
        }
        this.submitClick= this.submitClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    componentDidMount(){
        axios({
            method: "GET",
            url: `/api/employee/${this.state.id}`
            }).then(data=>{this.setState({
                first:data.data.first_name,
                last: data.data.last_name,
                email: data.data.email,
                phone: data.data.phone,
                salary: data.data.salary
            })
        });
    };
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    submitClick=()=>{
        if(window.confirm("Are you sure you want to update?")){
        
        axios({
            method: "POST",
            url: `/api/employee/${this.state.id}`,
            data: {
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                phone: this.state.phone,
                salary: this.state.salary
            }

        }).then(window.location.reload())
      }
        else{window.location.reload()}
    };
    render(){
        return(
            <div>
                <div class="container">
                <Form>
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
                </Form>;
                <Button className="button1 subButt" onClick={()=>{this.submitClick()}}>Submit</Button>
                <Button className="button1 tablEx1" onClick={()=>{localStorage.clear() 
                                                       window.location.reload()}}>Exit</Button>
            </div>
            
            </div>
        )
    }
   
}
export default Update