import React, {Component} from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';

import './Profile.css';

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
			studentDetails : [],
		}

    }

    componentDidMount(){
        this.getStudData();
    }
    getStudData(){

        Axios.get("http://localhost:3003/api/student/get/list")
        .then((response)=>{
            console.log("response = ",response);
            if(response.data.student){
                this.setState({
                   studentDetails : response.data.student,
                });
            }
        })
        .catch((error)=>{
            console.log("Error during get Data = ", error);
            Swal.fire("Oops...","Something went wrong! <br/>"+error, "error");
        });
       }

    render(){
        return(
            <section>
                <h4 className="text-left col-lg-2 titlehead">Students Profile </h4>
                <div className="col-lg-12 row profilebg">{
                    this.state.studentDetails.length > 0
                    ?
                        this.state.studentDetails.map((stud,index)=>{
                            return(

                            <div className="col-lg-12  profile">
                       
                        <div className="col-lg-12">
                            <div className="col-lg-4 col-lg-offset-1 profileImg">
                              
                            </div>
                            <div className="col-lg-9  profileInfo">
                                <div className="row">
                                <div className="col-lg-11">
                                    <h3>{stud.fName+"  "+stud.lName} </h3>
                                    <div className="profileactions"><span className="edit"><i className="fas fa-edit"></i></span> | <span className="delete"><i className="fas fa-trash"></i></span></div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <div>
                                            <h5>Birth Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>:  {moment(stud.dob).format("Do MMM YYYY")}.</span></h5></div>
                                            <h5>School&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.school}.</span></h5>
                                            <h5>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.email}.</span></h5>
                                            <h5>Mobil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.phone}.</span></h5>
                                            <h5>Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.standard}.</span></h5>
                                        
                                        </div>
                                        <div className="col-lg-6">
                                        <div> 
                                            <h5>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.address}.</span></h5></div>
                                            <h5>Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.country}.</span></h5>
                                            <h5>State &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.state}.</span></h5>
                                            <h5>City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.city}.</span></h5>
                                            <h5>Pincode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>: {stud.pincode}.</span></h5>
                                        </div>
                                        
                                    </div>
                                   
                                  </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                )
            })
        :
           <table>
               <tbody>
                <tr> 
                     <td colSpan="9"> Sorry... No Data available! </td>
                </tr>
           </tbody>
           </table>

                }
                   </div> 
            </section>
        )
    }
}