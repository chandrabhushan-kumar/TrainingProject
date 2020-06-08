import React,{Component} from 'react';

import {Link,} from 'react-router-dom';
import './LeftSide.css';
import { BrowserRouter as Router} from 'react-router-dom';

export default class LeftSide extends Component{
    render(){
        return(

          <Router>
                <div>
                <div className="row>">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Leftside">
                        
                        <ul className="LeftSidemenu">
                            
                            <li><Link to="/">Home</Link></li>
                             <li><Link to="/studentform">StudentForm </Link></li>
                             <li><Link to="/studentlist">StudentList</Link></li>
                             <li><Link to="/dashboard">DashBoard</Link></li>
                             {/* <li><Link to="/studentprofile">Studentprofile</Link></li> */}
                              
                        </ul>
                    </div>
                </div>    
            </div>
          </Router>
        )
    }

}