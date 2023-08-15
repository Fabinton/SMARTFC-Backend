const Activities = require('./activities_dao');
/** @function createActivity */
// Create the specific elements for activity in mongo. 
exports.createActivity = (req,res,next)=>{
    const newActivities = {
        id_actividad: req.body.id_actividad,
        cont: req.body.cont,
        id_colegio: req.body.id_colegio,
        id_docente: req.body.id_docente,
        id_materia: req.body.id_materia,
        id_grado: req.body.id_grado,
        id_materiaActiva: req.body.id_materiaActiva,
        id_competencia: req.body.id_competencia,
        titulo_actividad: req.body.titulo_actividad,
        descripcion_actividad: req.body.descripcion_actividad,
        id_contenidoREA: req.body.id_contenidoREA,
        video: req.body.video,
        urlvideo: req.body.urlvideo,
        documento: req.body.documento,
        urldocumento: req.body.urldocumento,
        audio: req.body.audio,
        urlaudio: req.body.urlaudio,
        html: req.body.html,
        urlhtml: req.body.urlhtml,
        id_taller: req.body.id_taller,
        taller: req.body.taller,
        urltaller: req.body.urltaller,
        id_retrotaller: req.body.id_retrotaller,
        urlretrotaller: req.body.urlretrotaller,
        descripcion_test: req.body.descripcion_test,
        Q1: req.body.Q1,
        A11: req.body.A11,
        A12: req.body.A12,
        A13: req.body.A13,
        A14: req.body.A14,
        CA1: req.body.CA1,
        RQ1: req.body.RQ1,
        Q2: req.body.Q2,
        A21: req.body.A21,
        A22: req.body.A22,
        A23: req.body.A23,
        A24: req.body.A24,
        CA2: req.body.CA2,
        RQ2: req.body.RQ2,
        Q3: req.body.Q3,
        A31: req.body.A31,
        A32: req.body.A32,
        A33: req.body.A33,
        A34: req.body.A34,
        CA3: req.body.CA3,
        RQ3: req.body.RQ3,
        evaluacion: req.body.evaluacion,
        descripcion_evaluacion: req.body.descripcion_evaluacion,
        questions: req.body.questions,
        autor: req.body.autor,
        id_autor: req.body.id_autor,
        retroalimentacion: req.body.retroalimentacion,
    }
    //console.log(newActivities);
    Activities.create(newActivities,(err,activity)=>{
        if (err) return res.json({Estado: "Error Crear Actividad"});
        res.send({activity});
    })
}
/** @function loadActivity */
// Load the specific elements for activity in mongo. 

exports.loadActivity = (req, res, next)=>{
    const activityData={
        id_actividad: req.body.id_actividad,
    }
    //console.log(activityData);
    Activities.findOne({id_actividad: activityData.id_actividad}, (err, activity)=>{
        if(err) return res.status(500).send('Server Error');
        if(!activity){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send({activity});
        }
    })
}
/** @function allActivities */
// Load all activities of mongo. 

exports.allActivities = (req,res,next)=>{
    Activities.find(function(err, activities){
        if(err) return res.status(500).send('Server Error');
        if(!activities){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(activities);
        }
    })
}
/** @function allActivitiesMovil */
// Load all activities of mongo for devices mobile. 
exports.allActivitiesMovil = async(req,res,next)=>{
    const studentData = {
        id_grado: req.body.id_grado,
        id_colegio: req.body.id_colegio
    }
    const data = await Activities.find(function(err, activities){
        if(err) return res.status(500).send('Server Error');
        if(!activities){
            res.status(409).send({message:'Something Error'});
        } else{
            //res.send(activities);
        }
    })
    console.log(data.length);
        arrayColegio = [];
        arrayFilterFinal= [];
        arrayFilterMateria=[];
        for (var i=0; i< data.length; i++) {
            if (data[i].id_colegio == studentData.id_colegio){
                arrayColegio.push(data[i]);
            }
        }
        console.log(arrayColegio[0].id_grado);
        for (var j=0; j<arrayColegio.length;j++){
            if (arrayColegio[j].id_grado == studentData.id_grado){
                arrayFilterFinal.push(arrayColegio[j]);
            }
        }
        res.send(arrayFilterFinal);
}
/** @function uploadActivity */
// Update activity of mongo for app web. 
exports.uploadActivity = async (req, res) => {
    const activityData={
        id_actividad: req.body.id_actividad,
    }
    const activityNewData = {
        id_colegio: req.body.id_colegio,
        id_docente: req.body.id_docente,
        id_materia: req.body.id_materia,
        id_competencia: req.body.id_competencia,
        titulo_actividad: req.body.titulo_actividad,
        descripcion_actividad: req.body.descripcion_actividad,
        id_grado: req.body.id_grado,
        id_materiaActiva: req.body.id_materiaActiva,
        id_contenidoREA: req.body.id_contenidoREA,
        video: req.body.video,
        urlvideo: req.body.urlvideo,
        documento: req.body.documento,
        urldocumento: req.body.urldocumento,
        audio: req.body.audio,
        urlaudio: req.body.urlaudio,
        html: req.body.html,
        urlhtml: req.body.urlhtml,
        id_taller: req.body.id_taller,
        taller: req.body.taller,
        urltaller: req.body.urltaller,
        id_retrotaller: req.body.id_retrotaller,
        urlretrotaller: req.body.urlretrotaller,
        descripcion_test: req.body.descripcion_test,
        Q1: req.body.Q1,
        A11: req.body.A11,
        A12: req.body.A12,
        A13: req.body.A13,
        A14: req.body.A14,
        CA1: req.body.CA1,
        RQ1: req.body.RQ1,
        Q2: req.body.Q2,
        A21: req.body.A21,
        A22: req.body.A22,
        A23: req.body.A23,
        A24: req.body.A24,
        CA2: req.body.CA2,
        RQ2: req.body.RQ2,
        Q3: req.body.Q3,
        A31: req.body.A31,
        A32: req.body.A32,
        A33: req.body.A33,
        A34: req.body.A34,
        CA3: req.body.CA3,
        RQ3: req.body.RQ3,
        evaluacion: req.body.evaluacion,
        descripcion_evaluacion: req.body.descripcion_evaluacion,
        questions : req.body.questions,
        retroalimentacion: req.body.retroalimentacion
    }
    await Activities.updateOne({id_actividad: activityData.id_actividad}, {$set: activityNewData}, {new: true}, (err =>{
        return res.json({status: 'Actividad Actualizada'});
    }));
}
/** @function updloadSectionsActivity */
// Update activity of mongo for app web. 
exports.uploadSectionsActivity = async (req, res) => {
    const activityData={
        id_actividad: req.body.id_actividad,
    }
    const activityNewData = {
        taller: req.body.taller,
        evaluacion: req.body.evaluacion,
        retroalimentacion : req.body.retroalimentacion
    }
    await Activities.updateOne({id_actividad: activityData.id_actividad}, {$set: activityNewData}, {new: true}, (err =>{
        return res.json({status: 'Seccion de la Actividad Actualizada'});
    }));
}
/** @function deleteActivity */
// Delete activity of mongo for app web. 
exports.deleteActivity = async (req, res) => {
    //console.log(req.body)
    const activityData = {
        id_actividad: req.body.id_actividad
    }
    await Activities.deleteOne({id_actividad: activityData.id_actividad}, (err =>{
        return res.json({Estado: 'Actividad Eliminada' });
    }));
}


//id_actividad	id_colegio	id_docente	id_materia	id_competencia	titulo_actividad	
//descripcion_materia	video	urlvideo	lectura	urllectura	test	html	urlhtml	grado
