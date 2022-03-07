const SubjectActive = require('./subjectActive_dao');
/** @function createSubjectActive */
// Create the specific elements for Subject in mongo. 

exports.createSubjectActive = async (req, res, next)=>{
    const newSubjectActive = {
        id_materiaActiva: req.body.id_materiaActiva,
        count: req.body.count,
        nombre_materiaActiva: req.body.nombre_materiaActiva,
        id_materia: req.body.id_materia,
        id_grado: req.body.id_grado,
        id_docente: req.body.id_docente,
        id_colegio: req.body.id_colegio,
        url_imagen: req.body.url_imagen
    }
    //console.log(newSubjectActive);
    await SubjectActive.create(newSubjectActive,(err,subjectActive)=>{
        if(err) return res.json({Estado: "Error Crear Materia Activa"});
        res.json({Estado: 'Materia Activa Creada' })
    })
}
/** @function loadSubjectActive */
// Load the specific elements for Subject in mongo. 

exports.loadSubjectActive= (req,res,next)=>{
    const subjectActiveData={
        id_materiaActiva: req.body.id_materiaActiva
    }
    SubjectActive.findOne({id_materiaActiva: subjectActiveData.id_materiaActiva},(err, subjectActive)=>{
        if(err) return res.status(500).send('Server Error');
        if(!subjectActive){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({subjectActive});
        }
    })
}
/** @function allSubjectActives */
// Load all the specific elements for Subject in mongo. 

exports.allSubjectActives = (req,res,next)=>{
    SubjectActive.find(function(err, subjectActives){
        if(err) return res.status(500).send('Server Error');
        if(!subjectActives){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(subjectActives);
        }
    })
}
/** @function allSubjectActivesMovil */
// Load all the specific elements for Subject in mongo. 

exports.allSubjectActivesMovil = async(req,res,next)=>{
    const studentData = {
        id_grado: req.body.id_grado,
        id_colegio: req.body.id_colegio
    }
    var activadoSend = 0;
    const data = await SubjectActive.find(function(err, subjectActives){
        if(err) return res.status(500).send('Server Error');
        if(!subjectActives){
            res.status(409).send({message:'Something Error'});
        } else{
            activadoSend = 1;
            //res.send(subjectActives);
        }
    })
    if(activadoSend==1){
        console.log(data.length);
        arrayColegio = [];
        arrayFilterFinal= [];
        for (var i=0; i< data.length; i++) {
            if (data[i].id_colegio == studentData.id_colegio){
                arrayColegio.push(data[i]);
            }
        }
        //console.log(arrayColegio[0].id_grado);
        for (var j=0; j<arrayColegio.length;j++){
            if (arrayColegio[j].id_grado == studentData.id_grado){
                arrayFilterFinal.push(arrayColegio[j]);
            }
        }
        res.send(arrayFilterFinal);
    }
    
}
/** @function newLoadSubjectActives */
// Load all the specific elements for Subject in mongo. 

exports.newLoadSubjectActives = async (req, res) => {
    const subjectActivesData = await SubjectActive.find();
    res.json(subjectActivesData);
}
/** @function deleteSubjectActive */
// Delete the specific elements for Subject in mongo. 

exports.deleteSubjectActive = async (req, res) => {
    //console.log(req.body)
    const subjectActiveData = {
        id_materiaActiva: req.body.id_materiaActiva
    }
    await SubjectActive.deleteOne({id_materiaActiva: subjectActiveData.id_materiaActiva}, (err =>{
        return res.json({Estado: 'Materia Activa Eliminada'});
    }));
}

