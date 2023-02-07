const mongoose = require('mongoose');
const nivelSatisfaccionSchema = require('./nivelsatisfaccion_model');
/** @function nivelSatisfaccionSchema */
// Dao for Schema statics in database
nivelSatisfaccionSchema.statics={
    create: function(data, cb){
        const nivelSatisfaccion = new this(data);
        nivelSatisfaccion.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const nivelSatisfaccionModel = mongoose.model('NivelSatisfaccion',nivelSatisfaccionSchema);
module.exports = nivelSatisfaccionModel;