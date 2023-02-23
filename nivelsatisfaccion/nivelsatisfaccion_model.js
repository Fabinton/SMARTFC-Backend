const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/** @function nivelSatisfaccionSchema */
// Schema in nivelsatisfaccion for model

const nivelSatisfaccionSchema = new Schema({
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
    contenido:{
        type: Number,
        required: true,
        trim: true
    },
    calidad:{
        type: Number,
        required: true,
        trim: true
    },
    diseño:{
        type: Number,
        required: true,
        trim: true
    },
    motivacion:{
        type: Number,
        required: true,
        trim: true
    },
    sonido:{
        type: Number,
        required: true,
        trim: true
    }   
},{timestamps:true});

module.exports = nivelSatisfaccionSchema;
