import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Update from './Update';
import Button from "react-bootstrap/Button";

class Employee extends Component{

    constructor(props){
        super(props)
      
        this.state={
            employee: [],
            open:false,
            update: ""
        }
    
        this.getEmployee = this.getEmployee.bind(this);
        this.createTable = this.createTable.bind(this);
        this.deleteTable = this.deleteTable.bind(this);
      }

    componentDidMount(){
        this.getEmployee()
      };

    getEmployee=()=>{
        axios({
            method:"GET",
            url: "/api/employees"
        }).then(data=>{this.setState({employee: data.data})})
      };

    deleteTable=id=>{
        this.setState({update:""})
        if(window.confirm("Are You Sure You Want to Delete this Row?")){
                axios({
                    method:"POST",
                    url:"/api/delete",
                    data:{
                        id:id
                    }
                }).then(alert("Employe Has been Deleted"),(window.location.reload()), localStorage.clear())
            }
        else{window.location.href="/"}
        };
    

    updateTable=(id)=>{
        console.log(id)
        this.setState({update:id})
        localStorage.setItem("update", true)
        
    };
    createTable=()=>{
        //builds an array to build a table from state
        const newTable=[];
        //makes sure no undefined values
        if(this.state.employee.length >0){
            for(let i=0; i< this.state.employee.length; i++){
                newTable.push(this.state.employee[i])
            }

            return(
                <div className="container">
                <Table striped bordered hover className="table1">
                <thead>
                    <tr>
                        <td>
                            eID
                        </td>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>
                            Salary
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {newTable.map(table=>{
                        return(
                        
                            <tr>
                                <td>{table.eID}</td>
                                <td>{table.first_name}</td>
                                <td>{table.last_name}</td>
                                <td>{table.email}</td>
                                <td>{table.phone}</td>
                                <td>${table.salary}</td>
                                <td><Button className="update" onClick={()=>{this.updateTable(table.id)}}>Update</Button></td>
                                <td><Button className="zscore" onClick={()=>{this.deleteTable(table.id)}}>X</Button></td>
                            </tr>
                      
                        )
                    })}
                </tbody>
                </Table>
                </div>
            )
        };
    };
    render(){
        if(!this.state.update){
        return(
            <div>
                {this.createTable()}
                <Button className="button1 tablEx" onClick={()=>{localStorage.clear() 
                                                       window.location.reload()}}>Exit</Button>
            </div>
        )
    }
    else if (this.state.update){
        return(
            <div>
                <Update id={this.state.update}/>
            </div>
            )
        }
    };
};
export default Employee;
