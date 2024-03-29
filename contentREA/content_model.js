const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/** @function contentSchema */
// Schema in content for model

const reviewSchema = mongoose.Schema(
    {
      rating: { type: Number, required: true },
      contenido_id:{type:Number, requerid: true}
     },
    {
      timestamps: true,
    }
  )

const contentSchema = new Schema({
    id_CREA:{
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
    tipo_CREA:{
        type: Number,
        required: true,
        trim: true
    },
    id_docente:{
        type: Number,
        required: true,
        trim: true
    },
    id_materia:{
        type: Number,
        required: true,
        trim: true
    },
    id_grado:{
        type: Number,
        required: true,
        trim: true
    },
    id_colegio:{
        type: Number,
        required: true,
        trim: true
    },
    nombre_CREA:{
        type: String,
        required: true,
        trim: true
    },
    urlrepositorio:{
        type: String,
        required: true,
        trim: true
    },
    descripcion_CREA:{
        type: String,
        required: true,
        trim: true
    },
    en_uso:{
        type: Number,
        required: true,
        trim: true
    }
},{timestamps:true});

module.exports = contentSchema;
//module.exports = mongoose.model('contents', contentSchema);
//id_CREA  cont  tipo_CREA	 id_materia	 grado10  id_colegio	
//grado11	
//nombre_CREA	urlrepositorio	descripcion_CREA