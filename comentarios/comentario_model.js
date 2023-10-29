const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/** @function comentarioSchema */
// Schema in comentario for model

const comentarioSchema = new Schema({
    id_CREA:{
        type: Number,
        required: true,
        trim: true
    },
    id_estudiante:{
        type: Number,
        required: true,
        trim: true
    },
    comentario:{
        type: String,
        required: true,
        trim: true
    }
},{timestamps:true});

module.exports = comentarioSchema;
