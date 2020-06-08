import React,{Component} from 'react';
import moment from 'moment';
import './StudentList.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



export default class StudentList extends Component{

    constructor(props){
		super(props);

		this.state = {
			studDetails : []
			
		}
    }
    componentDidMount(){
		this.getstudData();
	}
    
    getstudData(){
		Axios.get("http://localhost:3009/api/student/get")
			 .then((response)=>{
			 	console.log("response = ",response.data);
			 	  if(response.data.student){
			 	  	this.setState({
			 	  		studDetails : response.data.student,
			 	 	});
				  }
				 
			 })
			 .catch((error)=>{
			 	console.log("Error during get Data = ", error);
			 	Swal.fire("Oops...","Something went wrong! <br/>"+error, "error");
			 });		
    }
    deletestud(event){
		event.preventDefault();	
		var studid = event.currentTarget.id.substr(2);
		console.log("studid = ",studid);

		Swal.fire({
		  title: 'Are you sure, you want to Delete this Student?',
		  text: 'You will not be able to recover this record!',
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#d33',
  		  cancelButtonColor: '#3085d6',		  
		  confirmButtonText: 'Yes, delete it!',
		  cancelButtonText: 'No, keep it'
		}).then((result) => {
		  if (result.value) {
		  	Axios.delete("http://localhost:3009/api/student/delete/"+studid)
		  		.then((data)=>{
		  			console.log("data = ",data);
		  			if(data.data.deletedCount > 0){
						this.getstudData();
					    Swal.fire(
					    //   'Deleted!',
					      'student Record has been deleted successfully',
					      'success'
					    )
		  			}else{
					    Swal.fire(
					      'Sorry, Something is Wrong!',
					      'student Record NOT deleted',
					      'error'
					    )		  				
		  			}
		  		})
		  		.catch((err)=>{
		  			console.log("error while deleting  = ",err);
					    Swal.fire(
					      'Some Error Occured!',
					      ''+err,
					      'error'
					    )							  			
		  		});

		  // For more information about handling dismissals please visit
		  // https://sweetalert2.github.io/#handling-dismissals
		  } else if (result.dismiss === Swal.DismissReason.cancel) {
		    Swal.fire(
		      'Cancelled',
		      'Your student Record is NOT Deleted :)',
		      'error'
		    )
		  }
		})		
	}



    render(){
        return(
            <div className="row">
                <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 Studentlist">
                <h1 className="slist">Welcome to Student List</h1>
				<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="Welcome to Student List"
                    sheet="tablexls"
                    buttonText="Download as Excel Sheet"/>
                
					<table id="table-to-xls" className="table table-stripped table-hovered table-bordered"> 
                        <thead>
                            <tr>
                                <th>Sr no</th>
                                <th>Student Name</th>
                                <th>Dob</th>
                                <th>Email</th>
                                <th>Nationality</th>
                                <th>Admission in class</th>
                                <th>Student's age</th>
                                <th>privious School</th>
                                <th>Admission Session</th>
                                <th>Residential Address</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.studDetails.length > 0
                                ?
                                    this.state.studDetails.map((stud,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{stud.fName+" "+stud.mName+" "+stud.lName}</td>
                                                <td>{moment(stud.dob).format("Do MMM YYYY")}</td>
                                                <td>{stud.email}</td>
                                                <td>{stud.nationality}</td>
                                                <td>{stud.admissioninclass}</td>
                                                <td>{stud.studentage}</td>
                                                <td>{stud.previousschool}</td>
                                                <td>{stud.admissionsession}</td>
                                                <td>{stud.residentialaddress}</td>
                                                 <td>  
													<a href={"/StudentForm/"+stud._id}> <i id={"e-"+stud._id} className="fa fa-edit" title="Click to Edit"> </i> </a> &nbsp;&nbsp;
													<a href={"/Studentprofile/"+stud._id} ><i className="fa fa-eye action-icon"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
													<i id={"d-"+stud._id} className="fa fa-trash" title="Click to Delete" onClick={this.deletestud.bind(this)}> </i>
												</td> 


                                            </tr>

                                        )

                                    })
                                :
                                <tr> 
										<td colSpan="12"> Sorry... No Data available! </td>
									</tr>
		
                             }
                        </tbody>

                </table>

                </div>
            </div>
            

        )
    }
}