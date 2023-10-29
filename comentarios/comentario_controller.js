const Comentario = require('./comentario_dao');
/** @function createComentario */
// Create the specific elements for comentarios in mongo. 

//comentarios 
exports.createComentario = (req, res, next) => {
    const newComentario = {
        id_CREA: req.body.id_CREA,
        id_estudiante: req.body.id_estudiante,
        comentario: req.body.comentario
    }
    
    Comentario.create(newComentario, (err, comentario) => {
        if (err) return res.json({ Estado: "Error Crear Comentarios" });
        res.send({ comentario });
    })
}

exports.loadComentarios = async (req, res) => {
    const id = parseInt(req.params.id_CREA);
    const comments = await Comentario.find({ id_CREA: id });
    if (comments) {
        res.status(200).json(
            comments
        )
    } else {
        res.status(404)
        throw new Error('Comment not found')
    }
}