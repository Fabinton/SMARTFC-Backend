const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/** @function gradeSchema */
// Schema in grade for model

const gradeSchema = new Schema({
    id_grado:{
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    nombre_grado:{
        type: String,
        required: true,
        trim: true
    },
},{timestamps:true});

module.exports = gradeSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_grado	
//nombre_grado