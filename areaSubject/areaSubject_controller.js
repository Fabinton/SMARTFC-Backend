const AreaSubject = require('./areaSubject_dao');
/** @function createAreaSubject */
// Create Area Subject in mongoDB
exports.createAreaSubject = async (req, res, next)=>{
    const newAreaSubject = {
        id_areaMateria: req.body.id_areaMateria,
        cont: req.body.cont,
        id_colegio: req.body.id_colegio,
        nombre_areaMateria: req.body.nombre_areaMateria
    }
    //console.log(newAreaSubject);
    await AreaSubject.create(newAreaSubject,(err,areaSubject)=>{
        if(err) return res.json({Estado: "Error Crear Area"});
        res.send({areaSubject});
    })
}
/** @function loadAreaSubject */
// Load Area Subject in mongoDB
exports.loadAreaSubject= (req,res,next)=>{
    const areaSubjectData={
        id_areaMateria: req.body.id_areaMateria
    }
    AreaSubject.findOne({id_areaMateria: areaSubjectData.id_areaMateria},(err, areaSubject)=>{
        if(err) return res.status(500).send('Server Error');
        if(!areaSubject){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({areaSubject});
        }
    })
}
/** @function allAreaSubjects */
// Load all Areas Subject in mongoDB
exports.allAreaSubjects = (req,res,next)=>{
    AreaSubject.find(function(err, areaSubjects){
        if(err) return res.status(500).send('Server Error');
        if(!areaSubjects){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(areaSubjects);
        }
    })
}
/** @function newLoadAreaSubjects */
// Load new Areas Subject in mongoDB

exports.newLoadAreaSubjects = async (req, res) => {
    const areaSubjectsData = await AreaSubject.find();
    res.json(areaSubjectsData);
}
/** @function deleteAreaSubject */
// Delete Area Subject in mongoDB

exports.deleteAreaSubject = async (req, res) => {
    //console.log(req.body)
    const areaSubjectData = {
        id_areaMateria: req.body.id_areaMateria
    }
    await AreaSubject.deleteOne({id_areaMateria: areaSubjectData.id_areaMateria}, (err =>{
        return res.json({Estado: 'Area de Materia Eliminada'});
    }));
}