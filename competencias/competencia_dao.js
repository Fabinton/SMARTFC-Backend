const mongoose = require('mongoose');
const competenciaSchema = require('./competencia_model');
/** @function competenciaSchema */
// Dao for Schema statics in database
competenciaSchema.statics={
    create: function(data, cb){
        const competencia = new this(data);
        competencia.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const competenciaModel = mongoose.model('Competencia',competenciaSchema);
module.exports = competenciaModel;