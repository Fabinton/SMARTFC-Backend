const mongoose = require('mongoose');
const comentarioSchema = require('./comentario_model');
/** @function comentarioSchema */
// Dao for Schema statics in database
comentarioSchema.statics={
    create: function(data, cb){
        const comentario = new this(data);
        comentario.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const comentarioModel = mongoose.model('Comentario',comentarioSchema);
module.exports = comentarioModel;