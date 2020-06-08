const mongoose = require('mongoose');

const SchoolmanagementSchema = mongoose.Schema({
	_id 		                : mongoose.Schema.Types.ObjectId,
	fName 		                : String,
	mName 		                : String,
	lName 		                : String,
	dob   		                : String,
	email 		                : String,
	nationality 		        : String,
	admissioninclass           	: Number,
	studentage 		            : Number,
	previousschool 	            : String,
    admissionsession  	        :Number,
    residentialaddress  	    :String,
	createdAt 	                : Date,
	createdBy 	                : String
});

module.exports = mongoose.model('student', SchoolmanagementSchema);