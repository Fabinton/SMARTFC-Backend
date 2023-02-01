const NivelSatisfaccion = require('./nivelsatisfaccion_dao');
/** @function createNivelSatisfaccion */
// Create the specific elements for comentarios in mongo. 

//nivel satisfaccion
exports.createNivelSatisfaccion = (req, res, next) => {
    const newNivelSatisfaccion = {
        id_CREA: req.body.id_CREA,
        id_estudiante: req.body.id_estudiante,
        contenido: req.body.contenido,
        calidad: req.body.calidad,
        diseño: req.body.diseño,
        motivacion: req.body.motivacion,
        sonido: req.body.sonido      
    }
    
    NivelSatisfaccion.create(newNivelSatisfaccion, (err, nivelsatisfaccion) => {
        if (err) return res.json({ Estado: "Error Crear nivelsatisfaccion" });
            return res.send({ nivelsatisfaccion });
    })
}

/** @function loadNivelSatisfaccionUsuario */
// Load the specific elements for nivelsatisfaccionin mongo. 

exports.loadNivelSatisfaccionUsuario = (req,res,next)=>{
    const nivelSatisfaccionData={
        id_CREA: req.body.id_CREA,
        id_estudiante: req.body.id_estudiante
    }
    NivelSatisfaccion.findOne({id_CREA: nivelSatisfaccionData.id_CREA,id_estudiante: nivelSatisfaccionData.id_estudiante},(err, nivelsatisfaccion)=>{
        if(err) return res.status(500).send('Server Error');
        if(!nivelsatisfaccion){
            return res.status(409).send({message:`No existe ${err}`});
        }else{
            return res.send({nivelsatisfaccion});
        }
    })
}


exports.loadCalificaciones = async (req, res) => {
    const id = parseInt(req.params.id_CREA);
    const reviews = await NivelSatisfaccion.find({ id_CREA: id });
    if (reviews) {
        reviewSend = {
            "contenido": 0,
            "calidad": 0,
            "diseño": 0,
            "motivacion": 0,
            "sonido": 0
        }
        review = {
            "id_contenido": 0,
            "rating": 0
        }
        lista = [];
        for (let i = 0; i < reviews.length; i++) {
            reviewSend.contenido = reviewSend.contenido + reviews[i].contenido;
            reviewSend.calidad = reviewSend.calidad + reviews[i].calidad;
            reviewSend.diseño = reviewSend.diseño + reviews[i].diseño;
            reviewSend.motivacion = reviewSend.motivacion + reviews[i].motivacion;
            reviewSend.sonido = reviewSend.sonido + reviews[i].sonido;
        }
        reviewSend.contenido = Math.round(reviewSend.contenido / reviews.length);
        reviewSend.calidad = Math.round(reviewSend.calidad / reviews.length);
        reviewSend.diseño = Math.round(reviewSend.diseño / reviews.length);
        reviewSend.motivacion = Math.round(reviewSend.motivacion / reviews.length);
        reviewSend.sonido = Math.round(reviewSend.sonido / reviews.length);
        lista[0] = { "rating": reviewSend.contenido, "item": "contenido" }
        lista[1] = { "rating": reviewSend.calidad, "item": "calidad" }
        lista[2] = { "rating": reviewSend.diseño, "item": "diseño" }
        lista[3] = { "rating": reviewSend.motivacion, "item": "motivacion" }
        lista[4] = { "rating": reviewSend.sonido, "item": "sonido" }
        res.status(200).json(
            lista
        )
    } else {
        res.status(404)
        throw new Error('Review not found')

    }
}
