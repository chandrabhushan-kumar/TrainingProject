import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeftSide             from    '../LeftSide/LeftSide.js';
import Header               from     '../Header/Header.js';
import Home                 from      '../Home/Home.js';
import StudentForm          from       '../StudentForm/StudentForm.js';
import StudentList          from      '../StudentList/StudentList.js';
import DashBoard            from      '../../DashBoard/DashBoard.js';
import Signup               from      '../../Signup/Signup.js';
import Login                from      '../../Signup/Login.js';
import './Layout.css';
import Studentprofile from '../Studentprofile/Studentprofile.js';



export default class Layout extends Component{
    render(){
        return(
            <div>
            <Router>
		    	 <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Header />
                    </div>
                </div> 
                 <div className="row">
                 <div className="col-lg-2 col-md-2 col-sm-2 xs-12hidden">
						<LeftSide />
					</div>
                   
                    
                        <div className="col-lg-10  col-md-10 col-sm-10 col-xs-10 page">

				    		<Switch>
				    		    <Route exact path="/"                        component={Home} />
				    		    <Route exact path="/studentform"             component={StudentForm} /> 
                                <Route exact path="/studentform/:stud_id"    component={StudentForm} /> //for go to student form whenever click on edit
							    <Route exact path="/studentlist"             component={StudentList} />
                                <Route exact path="/dashboard"               component={DashBoard} />
                                <Route exact path="/signup"                  component={Signup} />
                                <Route exact path="/login"                   component={Login} />
                                <Route exact path="/studentprofile/:stud_id" component={Studentprofile} />
                                   
							
							</Switch>

			    		</div>
                 </div>   
                       
                    
                 
                     
			    	
					
			    
			</Router>
            </div>

        
        )

    }

}