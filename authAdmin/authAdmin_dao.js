const mongoose = require('mongoose');
const adminSchema = require('./authAdmin_model');
/** @function adminSchema */
// Dao for Schema statics in database

adminSchema.statics={
    create: function(data, cb){
        const admin = new this(data);
        admin.save(cb);
    },
    login: function(query,cb){
        this.find(query,cb);
    }
}
const adminModel = mongoose.model('Admin',adminSchema);

module.exports = adminModel;