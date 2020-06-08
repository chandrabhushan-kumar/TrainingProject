const mongoose=require('mongoose');
const OnlinejobportalSchema =mongoose.Schema({
    _id 		                : mongoose.Schema.Types.ObjectId,
    Jtitle                      :String,
    Sreqired                    :String,
    Nvacancies                  :String,
    Jdesc                       :String,
    Farea                       :String,
    Vfromdate                   :String,
    Vuptodate                   :String,
    Lapplied                    :String,
    City                        :String,
    Etype                       :String,
    Ecatogary                   :String,
    State                       :String,
    createdAt                   :Date,
    createdBy                   :String
})
module.exports = mongoose.model('jobportail', OnlinejobportalSchema);