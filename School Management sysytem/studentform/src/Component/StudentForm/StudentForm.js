import React,{Component} from 'react';
import './StudentForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import $ 		from 'jquery';
import jQuery 	from 'jquery';
import validate from "jquery-validation";


export default class StudentForm extends Component{


    constructor(props){
		super(props);

		this.state = {
            submit                  : true,
            FirstName 	            : "",
			MiddleName 	            : "",
			LastName 	            : "",
			Dob                     : "",
			Email                   : "",
			Nationality             : "",
			Admissioninclass        : "",
			studentage              : "",
			Previousschool          :"",
			Admissionsession        : "",
            Residentialaddress      : "",
            buttonText              : "submit"
		}
        console.log("constructor loaded")
    }
    handleChange(event){
        var name = event.currentTarget.name;
        this.setState({[name] : event.currentTarget.value});


    }
    
    componentDidMount(){
        $.validator.addMethod("reglx",function(value,element,regexpr){
            return regexpr.test(value);
        }, "Please enter a valid name");
        $("#validateApplication").validate({
            rules: {
                FirstName:{
                required:true,
                reglx:/^[A-Za-z]+$/

                },
                 MiddleName:{
                 required:true,
                 reglx:/^[A-Za-z]+$/
                 },
                 LastName:{
                    required:true,
                    reglx:/^[A-Za-z]+$/
                    },
                    
                 
                Dob:{
                    required:true,
                    // reglx:"^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$" 

                    },
                Email:{
                    required:true,
                     reglx:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$|^$)/,
                     },
                     
                Nationality:{
                    required:true,
                        reglx:/^[A-Za-z]+$/
                 },
                 studentage:{
                    required:true,
                        reglx:/^[0-9]+$/
                 },
                 Admissioninclass:{
                    required:true,
                        reglx:/^[a-zA-Z0-9]+$/

                 },
                 Previousschool:{
                    required:true,
                    reglx:/^[A-Za-z]+$/
                 },
                 Admissionsession:{
                    required:true,
                        reglx:/^[0-9]+$/
                 },
                 Residentialaddress:{
                    required:true,
                    reglx:/^[A-Za-z]+$/
                 }

               
                
             
            },
            
             errorPlacement : function(error, element)
             {
			 	if(element.attr("Name") === "FirstName"){
					error.insertAfter("#erroralert")
                }
                if(element.attr("Name") ==="MiddleName"){
					error.insertAfter("#erroralert1")
                }
                if(element.attr("Name") === "LastName"){
					error.insertAfter("#erroralert2")
                }
                if(element.attr("Name") === "Dob"){
					error.insertAfter("#erroralert3")
                }
                if(element.attr("Name") === "Email"){
					error.insertAfter("#erroralert4")
                }
                if(element.attr("Name") === "Nationality"){
					error.insertAfter("#erroralert5")
                }
                if(element.attr("Name") === "studentage"){
					error.insertAfter("#erroralert6")
                }
                if(element.attr("Name") === "Admissioninclass"){
					error.insertAfter("#erroralert7")
                }
                if(element.attr("Name") === "Previousschool"){
					error.insertAfter("#erroralert8")
                }
                if(element.attr("Name") === "Admissionsession"){
					error.insertAfter("#erroralert9")
                }
                if(element.attr("Name") === "Residentialaddress"){
					error.insertAfter("#erroralert10")
                }
			}

        })
        
    
    var stud_id = this.props.match.params.stud_id;
		this.setState({stud_id : stud_id});

		if(stud_id){
            this.setState({buttonText : "Update"});
            
            Axios.get("http://localhost:3009/api/student/get/"+stud_id)
				.then(studdata=>{
					var stud = studdata.data.student; 
					console.log("stud = ",stud);

					this.setState({
						FirstName           : stud.fName,
						MiddleName          : stud.mName,
						LastName            : stud.lName,
						Dob                 : stud.dob,
						Email               : stud.email,
						Nationality         : stud.nationality,
						Admissioninclass    : stud.admissioninclass,
						studentage          : stud.studentage,
						Previousschool      : stud.previousschool,
                        Admissionsession    : stud.admissionsession,
                         Residentialaddress  :stud.residentialaddress
					});
				})
				.catch((error)=>{
					console.log("Error while getting studData = ", error);
					Swal.fire("Oops...","Something went wrong <br/>"+error,"error");
				});

		}else{
			this.setState({buttonText : "submit"});
		}
	}


        
    
    handleSubmit(event){
        event.preventDefault();
        console.log("event")
        var submit =true;

        
        if(submit && this.state.submit){

            var formValues = {
                "fName"  	             : this.state.FirstName,
                "mName"  	             : this.state.MiddleName,
                "lName"  	             : this.state.LastName,
                "dob"  		             : this.state.Dob,
                "email"  	             : this.state.Email,
                "nationality"            : this.state.Nationality,
                "admissioninclass"       : this.state.Admissioninclass,
                "studentage"  	         : this.state.studentage,
                "previousschool"         : this.state.Previousschool,
                "admissionsession"       : this.state.Admissionsession,
                "residentialaddress"	 : this.state.Residentialaddress,
                "type"		             : this.state.buttonText,
		        "stud_id" 	             : this.state.stud_id
                
                
           
            };
        
        
    
            console.log("formValues = ",formValues);
        
            if($("#validateApplication").valid()){
            Axios
                .post("http://localhost:3009/api/student/post",formValues)
                .then((response)=>{
                    console.log("Response from API = ", response);
                    if(this.state.buttonText ==="submit"){
                         Swal.fire("Congrats","student data submitted successfully");

                    }
                    else{
                    Swal.fire("Congrats!","student Data updated Successfully");
                         this.props.history.push("/studentList");

                    } 
                })
                .catch((error)=>{
                    console.log("Error while inserting Form = ", error);
                    Swal.fire("Oops...","Something went wrong <br/>"+error,"error");
                });
    
            }
        }
    }
            
    


    render(){
        return(
            <div>
                <section className="wrapper"> 
                <section className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Sinfo">Student Information</section>
                <br/><br/><br/><br/><br/>
                <form className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="validateApplication">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group" >
                                    <label htmlFor="FirstName" className="fname">First Name <span className="asterik">*</span></label>
                                        <div className="input-group" id="erroralert">
                                            <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                                <input  type="text" className="form-control"placeholder="First Name" name="FirstName" 
                                                defaultValue = {this.state.FirstName}
                                                onChange    = {this.handleChange.bind(this)}
                                                ></input>
                                </div>
                         </div>
                    </div>
                    
                    <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label htmlFor="MiddleName" className="Mname">Middle Name <span className="asterik">*</span></label>
                                        <div className="input-group" id="erroralert1">
                                            <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                                <input  type="text" className="form-control"placeholder="Middle Name" name="MiddleName"
                                                defaultValue = {this.state.MiddleName}
                                                onChange    = {this.handleChange.bind(this)}

                                                
                                                ></input>
                                </div>
                         </div>
                    </div>
                    <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label htmlFor="LastName" className="lname">Last Name <span className="asterik">*</span></label>
                                        <div className="input-group" id="erroralert2">
                                            <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                                <input  type="text" className="form-control"placeholder="Last Name" name="LastName"
                                                defaultValue = {this.state.LastName}
                                                onChange    = {this.handleChange.bind(this)}

                                                
                                                ></input>
                                    </div>
                            </div>
                         </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    
                        <div className="formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label htmlFor="dob" className="dob"> Date of Birth <span className="asterik">*</span></label>
                                        <div className="input-group"id="erroralert3">
                                            <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                                <input  type="date" className="form-control" name="Dob"
                                                defaultValue = {this.state.Dob}
                                                onChange    = {this.handleChange.bind(this)}

                                                ></input> 
                                        </div>
                                </div>
                            </div>

                            <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="form-group">
								<label htmlFor="email" className="email"> Email <span className="asterik">*</span></label>
								<div className="input-group" id="erroralert4">
									<span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
									<input  type="email" className="form-control" name="Email"
                                    defaultValue = {this.state.Email}
                                    onChange    = {this.handleChange.bind(this)}

                                    
                                    ></input>
                                </div>
                            </div>
                       </div>
                       <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="form-group">
								<label htmlFor="Nationality" className="Nationality"> Nationality <span className="asterik">*</span></label>
								<div className="input-group" id="erroralert5">
									<span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
									<input  type="text" className="form-control" name="Nationality"
                                    defaultValue = {this.state.Nationality}
                                    onChange    = {this.handleChange.bind(this)}

                                    ></input>
                                </div>
                            </div>
                       </div> 
                    </div> 
                    <br/><br/><br/><br/><br/><br/>
                    <div className="formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label htmlFor="Admissioninclass" className="Admissioninclass">Admission in Class <span className="asterik">*</span></label>
                                        <div className="input-group" id="erroralert7">
                                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                                <input  type="text" className="form-control" name="Admissioninclass"
                                                 defaultValue = {this.state.Admissioninclass}
                                                 onChange    ={this.handleChange.bind(this)}
             
                                                ></input> 
                                     </div>
                            </div>
                        </div>

                        <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
							<div className="form-group">
								<label htmlFor="studentage" className="dob">Student's age <span className="asterik">*</span></label> 
                                <div className="input-group"id="erroralert6">
                                    <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                         <input  type="text" className="form-control" name="studentage"
                                            defaultValue = {this.state.studentage}
                                            onChange    = {this.handleChange.bind(this)}
             
                                        ></input> 
                                </div>
						    </div>
						</div>

                        <div className="field col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="form-group">
                                    <label htmlFor="pschool" className="pschool">Previous School <span className="asterik">*</span></label>
                                        <div className="input-group" id="erroralert8">
                                            <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                                <input  type="text" className="form-control" name="Previousschool"
                                                 defaultValue = {this.state.Previousschool}
                                                 onChange    = {this.handleChange.bind(this)}
             
                                                ></input> 
                                     </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div className="formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="field col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="Asession" className="Asession">Admission Session <span className="asterik">*</span></label>
                                        <div className="input-group" id="erroralert9">
                                            <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                                <input  type="text" className="form-control" name="Admissionsession"
                                                 defaultValue = {this.state.Admissionsession}
                                                 onChange    = {this.handleChange.bind(this)}
             
                                                
                                                ></input> 
                                     </div>
                            </div>
                        </div>

                        <div className="field col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="Raddress" className="Raddress">Residential Address <span className="asterik">*</span></label>
                                        <div className="input-group" id="erroralert10">
                                            <span className="input-group-addon"> <i className="fa fa-user"> </i> </span>
                                                <input  type="text" className="form-control" name="Residentialaddress"
                                                 defaultValue = {this.state.Residentialaddress}
                                                 onChange    = {this.handleChange.bind(this)}
             
                                                
                                                ></input> 
                                     </div>
                            </div>
                        </div>
                    </div> 
                    
				<button className="btn btn-primary col-lg-3 subButton pull-right" onClick={this.handleSubmit.bind(this)}> {this.state.buttonText}</button>
											
             </form>
         </section>
          
            
    </div>
            
        )
    }
}
