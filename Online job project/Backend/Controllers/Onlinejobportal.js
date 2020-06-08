const mongoose = require('mongoose');
const Jobportal = require('../Models/Onlinejobportal.js');
exports.insert_jobportail =(req,res,next)=>{

    

              if(req.body.type==="submit"){

            console.log("inside insert eq.body.type==>",req.body.type);

        
        var jobportail=new Jobportal({
             _id 		            :new mongoose.Types.ObjectId(),
            Jtitle                  :req.body.Jtitle,
            Sreqired                :req.body.Sreqired,
            Nvacancies              :req.body.Nvacancies,
            Jdesc                   :req.body.Jdesc,
            Farea                   :req.body.Farea,
            Heducation              :req.body.Heducation,
            Vfromdate               :req.body.Vfromdate,
            Vuptodate               :req.body.Vuptodate,
            Lapplied                :req.body.Lapplied,
            City                    :req.body.City,
            Etype                   :req.body.Etype,
            Ecatogary               :req.body.Ecatogary,
            State                   :req.body.State
           
           
            });
            
            jobportail
            .save()
            .then((data)=>{
                console.log("inside insert data==>",data);
                res.status(200).json({
                    "message": "Jobportail data inserted Successfully",
                });
            })
            .catch((error)=>{
                res.status(500).json({
                    "message" : "Some error occured while inserting Jobportail",
                    "error"   : error
                })
            });
         }else{
             console.log("update function");
            

            Jobportal.update(
		 			{"_id" : req.body.job_id},
		 			{$set : {
                         Jtitle                  :req.body.Jtitle,
                         Sreqired                :req.body.Sreqired,
                         Nvacancies              :req.body.Nvacancies,
                         Jdesc                   :req.body.Jdesc,
                         Farea                   :req.body.Farea,
                         Vfromdate               :req.body.Vfromdate,
                         Vuptodate               :req.body.Vuptodate,
                         Lapplied                :req.body.Lapplied,
                         City                    :req.body.City,
                         Etype                   :req.body.Etype,
                         Ecatogary               :req.body.Ecatogary,
                         State                   :req.body.State
                      
                     }}
                    
				)
				.then((data)=>{
                     console.log("req.body.Jtitle", data);
		 			console.log("data after update = ",data);
		 	        res.status(200).json({
		 	            "message": "Jobseeker data Updated Successfully",
		 	        });
		 		})
		 		.catch((error)=>{
		 			console.log("error while updating student = ", error);
		 			res.status(500).json({
		 				"message" : "Some error occured while updating student",
		 				"error"   : error
		 			})
		 		});
		 	}

    

 };
  exports.get_onejobseeker = (req,res,next)=>{
     console.log("Inside get_oneStudent function");
     var job_id = req.params.job_id;

     Jobportal 
         .findOne({"_id" : job_id})
         .then((jobportail)=>{
             console.log("jobportail = ", jobportail);
             res.status(200).json({jobportail});
         })
         .catch((error)=>{
             console.log("Error while getting One student data. ", error);
             res.status(500).json({
                 "message" : "Some error occured while getting One student data",
                 "error"   : error
             })
         });
 };


 exports.get_jobportailList = (req,res,next)=>{
     Jobportal
    .find()
        .then((jobportail)=>{   
            res.status(200).json({jobportail});
         })
         .catch((error)=>{
             res.status(500).json({
                 "message" : "Some error occured while getting Jobportal data",
                "error"   : error
         })
        });
 };

    

    

     

     exports.delete_jobportail = (req,res,next)=>{
        var empid = req.params.empid;
        console.log("empid  = ",empid);
    
        Jobportal.remove({"_id" : empid})
                .then(data=>{
                    res.status(200).json(data);
                })
                .catch((error)=>{
                    console.log("Error while deleting Jobseeker = ", error);
                    res.status(500).json({
                        "message" : "Some error occured while deleting Jobseeker data",
                        "error"   : error
                    })
                });
    
    };

     exports.get_employeeType = (req,res,next)=>{
 		console.log("Inside get_employeeType function");
 		var emptype = req.params.emptype;
 		console.log("emptype = ",emptype);

 		if(emptype === "Show All"){
             var selector = {}; 		}
             else{
             var selector = {employeType : emptype};
             console.log("selector = ",selector);
 		}

 		Jobportal
			.find({selector})
			.then((jobportail)=>{
 				console.log("jobportail =>>> ", jobportail);
 		        res.status(200).json({jobportail});
 			})
 			.catch((error)=>{
 				console.log("Error while getting employee Type. ", error);
 				res.status(500).json({
 					"message" : "Some error occured while getting employee type",
 					"error"   : error
 				})
 			});
 };
// exports.get_empHighEduList = (req,res,next)=>{
//     console.log("Inside get_empHighEduList function");
//     var highEdu = req.params.highEdu.replace("-"," ");
//     console.log("highEdu = ",highEdu);

//     if(highEdu === "Show All"){
//         var selector = {};
//     }else{
//         var selector = {highestEdu : highEdu};
//     }

//     Employee
//         .find(selector)
//         .then((employees)=>{
//             console.log("employees = ", employees);
//             res.status(200).json({employees});
//         })
//         .catch((error)=>{
//             console.log("Error while getting employee data. ", error);
//             res.status(500).json({
//                 "message" : "Some error occured while getting employee data",
//                 "error"   : error
//             })
//         });
// };


