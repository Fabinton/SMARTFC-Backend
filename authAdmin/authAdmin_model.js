const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);
/** @function adminSchema */
// Model for Schema statics in database
const adminSchema = new Schema({
    id_admin:{
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    tipo_usuario:{
        type: Number,
        required: true,
        trim: true
    },
    id_colegio:{
        type: Number,
        trim: true
    },
    nombre_usuario:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    contrasena:{
        type: String,
        required: true,
        trim: true
    },
    //id_admin	tipo_usuario	
    //id_colegio	
    //nombre_usuario	contraseña	

},{timestamps: true});

module.exports = adminSchema;
