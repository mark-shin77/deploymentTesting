import React , {Component} from 'react';
import Button from "react-bootstrap/Button"
import NewForm from './newForm';
import "./main.css"
import Employee from './Employee';
import Container from 'react-bootstrap/Container';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            view: false,
            add: false,
            modal:false
        }
        this.viewEmp = this.viewEmp.bind(this);
        this.addEmp = this.addEmp.bind(this);
    }
    
    //changes the page to employee view
    viewEmp = ()=>{
        this.setState({view: true});
        //local storage set to keep the page view if the page refreshes
        localStorage.setItem('view', true);
        };
    //changes the page to the add employee view
    addEmp  = ()=>{
        this.setState({add: true});
        //local storage set to keep the page view if the page refreshes
        localStorage.setItem("add", true);
    }
	render() {
        if(!this.state.view && !this.state.add && !localStorage.add && !localStorage.view){

		    return (
			    <Container>
				    <section className="feature major">
					    {/* <ScrollableAnchor id={'one'} > */}
                        <div className="row">
                            <div className="col-2"><img src="../../public/images/logo.PNG" alt=""/></div>
							    <h2 className="col-9 topper" style={{color:"#89206e"}} >Inside Out Development Employee Management</h2>
                                <div className="mainText">
                                <div className="row">
                                <div className="col-4"></div>
                                <div className="col-8 secondlogo">
                                <h3>Welcome to Employee Tracker </h3>
                                </div>
                            </div>
                            <p className="bodyText">
                            This simple employee CRUD management app allows the user to view exisiting employees, 
                            add new employess, and update employee information in an SQL database. Click <a href="https://github.com/maxwilets/InsideOutCRUD">Here </a>
                            to learn more
                            </p>
                            </div>
						</div>
                        <Button className="button1 left" onClick={this.viewEmp}>View Employees</Button>
                        <Button className="button1 right" onClick={this.addEmp}>Add New Employee</Button>

					
				</section>
            </Container>
		);
    };
    if(this.state.add || localStorage.add){
        return(
            <div>
                <NewForm/>
            </div>

        )
    };
    if(localStorage.view || this.state.view){
        return(
            <div>
                <Employee/>
            </div>
            )
        }
   
    };

};

export default Main;