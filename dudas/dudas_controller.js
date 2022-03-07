const Duda = require('./dudas_dao');
/** @function createDuda */
// Create the specific elements for Duda in mongo. 
exports.createDuda = async (req, res, next)=>{
    const newDuda = {
        id_duda: req.body.id_duda,
        id_actividad: req.body.id_actividad,
        id_estudiante: req.body.id_estudiante,
        pregunta: req.body.pregunta,
        respuesta: req.body.respuesta,
        estado_duda: req.body.estado_duda
    }
    console.log(newDuda);
    await Duda.create(newDuda,(err,duda)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({duda});
    })
}
/** @function loadDuda */
// Load the specific elements for Duda in mongo. 
exports.loadDuda= (req,res,next)=>{
    const dudaData={
        id_duda: req.body.id_duda
    }
    Duda.findOne({id_duda: dudaData.id_duda},(err, duda)=>{
        if(err) return res.status(500).send('Server Error');
        if(!duda){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({duda});
        }
    })
}
/** @function loadDudaStudent */
// Load the specific elements for Duda in mongo. 
exports.loadDudaStudent= (req,res,next)=>{
    const dudaData={
        id_estudiante: req.body.id_estudiante
    }
    Duda.find({id_estudiante: dudaData.id_estudiante},(err, duda)=>{
        if(err) return res.status(500).send('Server Error');
        if(!duda){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send(duda);
        }
    })
}
/** @function allDudas */
// Load all the specific elements for Duda in mongo. 

exports.allDudas = (req,res,next)=>{
    Duda.find(function(err, dudas){
        if(err) return res.status(500).send('Server Error');
        if(!dudas){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(dudas);
        }
    })
}
/** @function uploadRespuestaDuda */
// Upload the specific elements for Duda in mongo. 

exports.uploadRespuestaDuda = async (req, res) => {
    const dudaData = {
        id_duda: req.body.id_duda
    }
    const dudaNewData = {
        respuesta: req.body.respuesta,
        estado_duda: req.body.estado_duda
    }
    await Duda.updateOne({id_duda: dudaData.id_duda}, {$set: dudaNewData});
    res.json({status: 'Informacion Duda Actualizado'});
}
/** @function uploadEstadoDuda */
// Upload the specific elements for Duda in mongo. 

exports.uploadEstadoDuda = async (req, res) => {
    const dudaData = {
        id_duda: req.body.id_duda
    }
    const dudaNewData = {
        estado_duda: req.body.estado_duda
    }
    await Duda.updateOne({id_duda: dudaData.id_duda}, {$set: dudaNewData});
    res.json({status: 'Informacion Duda Actualizada'});
}
/** @function deleteDuda */
// Delete the specific elements for Duda in mongo. 

exports.deleteDuda = async (req, res) => {
    //console.log(req.body)
    const dudaData = {
        id_duda: req.body.id_duda
    }
    await Duda.deleteOne({id_duda: dudaData.id_duda});
    res.json({Estado: 'Duda Eliminada' })
}

//id_duda  id_actividad  id_estudiante  estado_duda	
//pregunta  respuesta  