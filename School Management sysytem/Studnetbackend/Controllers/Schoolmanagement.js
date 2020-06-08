const mongoose = require('mongoose');
const Student = require('../Models/Schoolmanagement.js');

exports.insert_student =(req,res,next)=>{

    console.log("req.body.type", req.body.type);

      if(req.body.type==="submit"){

        console.log("insrt function");
        var student=new Student({
            _id 		          :new mongoose.Types.ObjectId(),
            fName                 :req.body.fName,
            mName                 :req.body.mName,
            lName                 :req.body.lName,
            dob                   :req.body.dob,
            email                 :req.body.email,
            nationality           :req.body.nationality,
            admissioninclass      :req.body.admissioninclass,
            studentage            :req.body.studentage,
            previousschool        :req.body.previousschool,
            admissionsession      :req.body.admissionsession,
            residentialaddress    :req.body.residentialaddress

            });
            
            student
            .save()
            .then((data)=>{
                res.status(200).json({
                    "message": "student data inserted Successfully",
                });
            })
            .catch((error)=>{
                res.status(500).json({
                    "message" : "Some error occured while inserting student",
                    "error"   : error
                })
            });
            
        }else{
            console.log("update function");
            

            Student.update(
					{"_id" : req.body.stud_id},
					{$set : {
							fName 		        : req.body.fName,
							mName 		        : req.body.mName,
							lName 		        : req.body.lName,
							dob 		        : req.body.dob,
							email 		        : req.body.email,
							nationality 		: req.body.nationality,
							admissioninclass 	: req.body.admissioninclass,
							studentage 	        : req.body.studentage,
							previousschool 		: req.body.previousschool,
                            admissionsession 	: req.body.admissionsession,
                            residentialaddress  :req.body.residentialaddress
                            
                    }}
                    
				)
				.then((data)=>{
                    console.log("req.body.fName", data);
					console.log("data after update = ",data);
			        res.status(200).json({
			            "message": "student data Updated Successfully",
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

exports.get_oneStudent = (req,res,next)=>{
    console.log("Inside get_oneStudent function");
    var stud_id = req.params.stud_id;

    Student
        .findOne({"_id" : stud_id})
        .then((student)=>{
            console.log("student = ", student);
            res.status(200).json({student});
        })
        .catch((error)=>{
            console.log("Error while getting One student data. ", error);
            res.status(500).json({
                "message" : "Some error occured while getting One student data",
                "error"   : error
            })
        });
};

        
    

    exports.get_studentList = (req,res,next)=>{
             Student
                .find()
                .then((student)=>{
                    res.status(200).json({student});
                 })
                 .catch((error)=>{
                     res.status(500).json({
                         "message" : "Some error occured while getting stydent data",
                        "error"   : error
                 })
                });
         };
         exports.delete_student = (req,res,next)=>{
            var studid = req.params.studid;
            console.log("studid  = ",studid);
        
            Student.remove({"_id" : studid})
                    .then(data=>{
                        res.status(200).json(data);
                    })
                    .catch((error)=>{
                        console.log("Error while deleting student = ", error);
                        res.status(500).json({
                            "message" : "Some error occured while deleting student data",
                            "error"   : error
                        })
                    });
        
        };
        











        //  exports.delete_student = (req,res,next)=>{
        //      var studlist = req.params.studlist;
            
        
        //  Student.remove({"_list" : studlist})
        //              .then(data=>{
        //                  res.status(200).json(data);
        //              })
        //              .catch((error)=>{
        //                  console.log("Error while deleting studentlist = ", error);
        //                  res.status(500).json({
        //                      "message" : "Some error occured while deleting studentlist data",
        //                      "error"   : error
        //                  })
        //              });
        
        //          };
                    
         
        

         


        