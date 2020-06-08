import React,{Component} from 'react';
import './Signup.css';

export default class Signup extends Component{

    render(){
        return(
            <div>
                <section className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Pagewrapper">
                    <div className="Sup">Signup </div>
                        <form className="col-lg-6 col-lg-offset-3 col-md-12 col-sm-12 col-xs-12 Signupform">
                            <h3 className="Caccount">Welcome to Signup page</h3>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<label htmlFor="firstName" className="fname0"> First Name <span className="asterik">*</span> </label>
										<div className="input-group">
											<span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
											<input  type="text" className="form-control" name="firstName" ref="firstName"></input> 
							            </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<label htmlFor="lastName" className="lname0"> Last Name <span className="asterik">*</span> </label>
										<div className="input-group">
											<span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
											<input  type="text" className="form-control" name="lastName" ref="lastName"></input> 
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<label htmlFor="email" className="lname0"> Email <span className="asterik">*</span> </label>
										<div className="input-group">
											<span className="input-group-addon"> <i className="fa fa-envelope"> </i> </span>
											<input  type="text" className="form-control" name="email" ref="email"></input> 
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<label htmlFor="mobile" className="lname0"> Mobile Number <span className="asterik">*</span> </label>
										<div className="input-group">
											<span className="input-group-addon"> <i className="fa fa-phone"> </i> </span>
											<input  type="text" className="form-control" name="mobile" ref="mobile"></input> 
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<label htmlFor="password"className="psw"> Password <span className="asterik">*</span> </label>
										<div className="input-group">
											<span className="input-group-addon"> <i className="fa fa-key"> </i> </span>
											<input  type="password" className="form-control" name="password" ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="form-group">
										<label htmlFor="password"className="psw">Conform Password <span className="asterik">*</span> </label>
										<div className="input-group">
											<span className="input-group-addon"> <i className="fa fa-key"> </i> </span>
											<input  type="password" className="form-control" name="password" ></input>
                                        </div>
                                    </div>
                                </div> 
                                 <button type="button" className="btn btn-primary col-lg-3 pull-right">Signup</button>        
                        </form>
                        
        
                    
                    
                </section>
            </div>
        )
    }
}       

        
    

