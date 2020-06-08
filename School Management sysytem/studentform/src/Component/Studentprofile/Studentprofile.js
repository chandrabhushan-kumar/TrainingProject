import React,{Component} from 'react';
import './Studentprofile.css';
import Axios from 'axios';

export default class Studentprofile extends Component{
    constructor(props){
    super(props);
    this.state={
        Stud_id         :"",
        StudentData 	: {}
        
		}

    }
    componentDidMount(){
		console.log("Props = ", this.props.match.params.stud_id);
		if(this.props.match.params.stud_id){
			this.setState({Stud_id : this.props.match.params.stud_id});
			this.getOneStudent(this.props.match.params.stud_id);
		}
    }
    getOneStudent(Stud_id){
		Axios.get("http://localhost:3009/api/student/get/"+Stud_id)
			 .then(response =>{
			 	this.setState({
                    StudentData : response.data.student,
			 	});
			 	console.log("Student data : ", this.state.StudentData);
			 })
			 .catch(error =>{
			 	console.log("Some Error Occured While Getting One Student Data");
			 });
	}



    render(){
        return(
            <div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pagewrapper">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <img src="/school.jpg" alt="profile-back.jpg" className="bgimg" />
                            </div>
                        </div>
                    </div>
                </div> 
             </div>   
                   
             <div className="row">
                <div className="studimg">    
                    <div className=" col-lg-4 col-lg-offset-4">
                        <img src="/child.jpg" alt="profile-back.jpg" className="studentimage" />
                            
                            {
                                this.state.StudentData
                                ?
                                    
                                  
                                    <h3>{this.state.StudentData.fName + " " +this.state.StudentData.mName+ " " + this.state.StudentData.lName}</h3> 
                                                            
                                    
                                :
                                    null
                            }
                            
                        </div>
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="studentINfo">
                            <div className="col-lg-4">
                                <div className="name">Student Name<i class="fas fa-user"></i>
                                <h2>{this.state.StudentData.fName + " " +this.state.StudentData.mName + " " + this.state.StudentData.lName}</h2></div>
                                <div className="dob1">Date of Birth<i class="fas fa-calendar-week"></i>
                                    <h2>{this.state.StudentData.dob}</h2></div>
                                <div className="Email1">Email<i class="fas fa-envelope-square"></i>    
                                    <h2>{this.state.StudentData.email}</h2></div>
                                <div className="nationality">Nationality <i class="fas fa-user"></i>  
                                    <h2>{this.state.StudentData.nationality}</h2></div>
                             </div>
                            <div className="col-lg-4">     
                                <div className="Admissioninclass1">Admission in class <i class="fas fa-school"></i>   
                                    <h2>{this.state.StudentData.admissioninclass}</h2></div>
                                <div className="Studentage">Student age<i class="fas fa-user"></i>   
                                    <h2>{this.state.StudentData.studentage}</h2></div>
                                <div className="Previousschool">Previous school<i class="fas fa-school"></i>
                                    <h2>{this.state.StudentData.previousschool}</h2></div>
                                <div className="Admissionsession">Admission session<i class="fas fa-calendar-week"></i>
                                    <h2>{this.state.StudentData.admissionsession}</h2></div> 
                             </div> 
                             <div className="col-lg-4">        
                                    <div className="residentialaddress">Residential Address<i class="fas fa-home"></i>
                                    <h2>{this.state.StudentData.residentialaddress}</h2></div>
                            </div>        
                        </div>
                     </div>
                 </div>
             </div>
        </div>     
    )

  }

}