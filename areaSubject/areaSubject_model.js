const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/** @function areaSubjectSchema */
// Schema in areaSubjectSchema for model

const areaSubjectSchema = new Schema({
    id_areaMateria:{
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    cont:{
        type: Number,
        required: true,
        trim: true
    },
    id_colegio:{
        type: Number,
        required: true,
        trim: true
    },
    nombre_areaMateria:{
        type: String,
        required: true,
        trim: true
    },
},{timestamps:true});

module.exports = areaSubjectSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_Materia	
//nombre_Materia