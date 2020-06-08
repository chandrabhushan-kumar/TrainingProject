import React,{Component} from 'react';
import './Login.css';

export default class Login extends Component{

    render(){
        return(
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Loginwrapper">
                    <div className="col-lg-4  col-lg-offset-4 col-md-6 col-sm-6 col-xs-6 mainpage">
                         <div className="logo"><i className="far fa-user-circle"></i></div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<div className="Userid"><label htmlFor="userid"> User-Id <span className="asterik">*</span> </label></div>
							    <div className="input-group">
									<span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
										<input  type="email" className="form-control" name="userid"
												placeholder="Enter Your Email"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<div className="pws0"><label htmlFor="password"> Password <span className="asterik">*</span> </label></div>
								<div className="input-group">
									<span className="input-group-addon"> <i className="fa fa-key"> </i> </span>
										<input  type="password" className="form-control" name="password"placeholder="Enter your Secret password" ></input>
							</div>
                        </div>
                    </div>
                     <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center forgotpsw">
                        <span><a href="*">Forgot password?</a></span></div>
                    <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
						<button className="btn btn-primary col-lg-4 col-lg-offset-4">Login</button>
                    </div>
                        
								                 

								
                    </div>
                </div>
            </div>
        )
    }
}