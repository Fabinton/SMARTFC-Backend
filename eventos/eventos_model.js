const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/** @function eventoSchema */
// Schema in events for model

const eventoSchema = new Schema({
    id_evento:{
        type: mongoose.Schema.Types.Long,
        required: true,
        trim: true,
        unique: true,
        bsonType:"long"
    },
    count:{
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    data_start:{
        type: String,
        trim: true
    },
    hour_start:{
        type: String,
        trim: true
    },
    data_end:{
        type: String,
        trim: true
    },
    hour_end:{
        type: String,
        trim: true
    },
    id_actividad:{
        type:Number,
        required:true,
        trim: true
    },
    id_estudiante:{
        type:Number,
        required: true,
        trim: true
    },
    check_download:{
        type:Number,
        trim: true
    },
    check_inicio:{
        type:Number,
        trim: true
    },
    check_fin:{
        type:Number,
        trim: true
    },
    check_answer:{
        type:Number,
        trim: true
    },
    count_video:{
        type:Number,
        trim: true
    },
    check_video:{
        type:Number,
        trim: true
    },
    check_document:{
        type:Number,
        trim: true
    },
    check_a1:{
        type:Number,
        trim: true
    },
    check_a2:{
        type:Number,
        trim: true
    },
    check_a3:{
        type:Number,
        trim: true
    },
    check_profile:{
        type:Number,
        trim: true
    },
    check_Ea1:{
        type:Number,
        trim: true
    },
    check_Ea2:{
        type:Number,
        trim: true
    },
    check_Ea3:{
        type:Number,
        trim: true
    },
    oculto:{
        type:Number,
        trim: true
    },


})


    //id_evento	data_start	hour_start	data_end	hour_end
    //	id_actividad	id_estudiante	check_download	check_inicio	
    //check_fin	check_answer	count_video	check_video	check_document
    //	check_a1	check_a2	check_a3	check_profile
module.exports = eventoSchema;
//id_evento	fecha	id_actividad	id_estudiante	
//check_download	check_inicio	check_fin	
//check_answer	count_video	check_video
