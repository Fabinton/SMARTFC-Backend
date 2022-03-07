const mongoose = require('mongoose');
const subjectSchema = require('./subject_model');
/** @function subjectSchema */
// Dao for Schema statics in database
subjectSchema.statics={
    create: function(data, cb){
        const subject = new this(data);
        subject.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const subjectModel = mongoose.model('Subject',subjectSchema);
module.exports = subjectModel;