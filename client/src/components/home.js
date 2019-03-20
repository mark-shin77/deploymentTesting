import React, {Component} from 'react';
import Header from "./header";
import Main from "./main";

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}
export default Home;