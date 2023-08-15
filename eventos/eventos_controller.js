const Eventos = require('./eventos_dao');
var async  = require('express-async-await')
var fetch = require('node-fetch')
async function  obtenerLast () {
    const last = await fetch('http://0.0.0.0:3000/loadAllEvento');
    const data = await last.json();
    console.log("Comprobando cuantos item tiene")
    console.log(data.length);
    return data.length;
}
/** @function createEventos */
// Create the specific elements for Eventos in mongo. 

exports.createEventos= async(req,res,next)=>  {
    var last = await obtenerLast();
    console.log("El ultimo allado")
    console.log(last);
    var id_evento =req.body.id_evento; 
    console.log("ID Eventos");
    console.log(id_evento);
    last = last+1;
    console.log("Trayendo Last +1")
    console.log(last);
    var idCompleta = id_evento+''+last+'';
    console.log("Imprimiendo IdCompleta");
    console.log(idCompleta);
    var idConvertida = parseInt(idCompleta,10);
    console.log("ID Convertida");
    console.log(idConvertida);
    const newEvento = {
        id_evento: idConvertida,
        count: last,
        data_start: req.body.data_start,
        hour_start: req.body.hour_start,
        data_end: req.body.data_end,
        hour_end: req.body.hour_end,
        id_actividad: req.body.id_actividad,
        id_estudiante: req.body.id_estudiante,
        check_download: req.body.check_download,
        check_inicio: req.body.check_inicio,
        check_fin: req.body.check_fin,
        check_answer: req.body.check_answer,
        count_video: req.body.count_video,
        check_video: req.body.check_video,
        check_document: req.body.check_document,
        check_a1: req.body.check_a1,
        check_a2: req.body.check_a2,
        check_a3: req.body.check_a3,
        check_profile: req.body.check_profile,
        answers: req.body.answers,
        oculto: 0
    }
    //id_evento	data_start	hour_start	data_hours_end	hour_end
    //	id_actividad	id_estudiante	check_download	check_inicio	
    //check_fin	check_answer	count_video	check_video	check_document
    //	check_a1	check_a2	check_a3	check_profile

    console.log(newEvento);
    Eventos.create(newEvento,(err,evento)=>{
        if(err) return res.status(500).send('Server Error');
        res.send(evento);
    })
}
/** @function loadEvento */
// Load the specific elements for Eventos in mongo. 

exports.loadEvento = (req,res,next)=>{
    const eventoData = {
        id_estudiante: req.body.id_estudiante,
    }
    Eventos.findOne({id_estudiante: eventoData.id_estudiante},(err,evento)=>{
        if(err) return res.status(500).send('Server Error');
        if(!evento){
            res.status(409).send({message:'Something Error'});
        }else{
            res.send(evento);
        }
    })
}
/** @function allEventos */
// Load all the specific elements for Eventos in mongo. 

exports.allEventos = async(req,res,next)=>{
    const allEventos = await Eventos.find(function(err, eventStudents){
        if(err) return res.status(500).send('Server Error');
        if(!eventStudents){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(eventStudents);
        }
    })
    
}
/** @function allEventsForAngular */
// Load all the specific elements for Eventos in mongo. 

exports.allEventsForAngular=async(req,res,next)=>{
    var mandaRes = 0;
    const allEventos = await Eventos.find(function(err, eventStudents){
        if(err) return res.status(500).send('Server Error');
        if(!eventStudents){
            res.status(409).send({message:'Something Error'});
        } else{
            //res.send(eventStudents);
            mandaRes = 1;
        }
    })
    if(mandaRes==1){
    var storageAllInformation = [];
    var storageAllInformationWithStudents = [];
    var storageActividad = allEventos.reverse();
    //console.log(storageActividad);
    for (var i = 0; i< allEventos.length;i++){
        resultadoEstudiantes = Array.from(new Set(storageActividad.map(s => s.id_estudiante )))
            .map(id_estudiante => {
              return {
                id_estudiante:id_estudiante,
            };
        });
    }
    console.log(resultadoEstudiantes.length);
    for (var i=0; i<resultadoEstudiantes.length;i++){
        elementos = i;
        storageActividad.filter(function(element){
            if(element.id_estudiante==resultadoEstudiantes[elementos].id_estudiante){
                storageAllInformation.push(element)
            }
        });
        resultadoEstudiantesRep = Array.from(new Set(storageAllInformation.map(s => s.id_actividad )))
            .map(id_actividad => {
              return {
                id_actividad:id_actividad,
                data_start: storageAllInformation.find(s => s.id_actividad === id_actividad).data_start,
                hour_start: storageAllInformation.find(s => s.id_actividad === id_actividad).hour_start,
                data_end: storageAllInformation.find(s => s.id_actividad === id_actividad).data_end,
                hour_end: storageAllInformation.find(s=> s.id_actividad=== id_actividad).hour_end,
                check_download: storageAllInformation.find(s => s.id_actividad === id_actividad).check_download,
                id_estudiante: storageAllInformation.find(s => s.id_actividad === id_actividad).id_estudiante,
                check_inicio: storageAllInformation.find(s => s.id_actividad === id_actividad).check_inicio,
                check_fin: storageAllInformation.find(s => s.id_actividad === id_actividad).check_fin,
                check_answer: storageAllInformation.find(s => s.id_actividad === id_actividad).check_answer,
                count_video: storageAllInformation.find(s => s.id_actividad === id_actividad).count_video,
                check_video: storageAllInformation.find(s => s.id_actividad === id_actividad).check_video,
                check_document: storageAllInformation.find(s => s.id_actividad === id_actividad).check_document,
                check_a1: storageAllInformation.find(s => s.id_actividad === id_actividad).check_a1,
                check_a2: storageAllInformation.find(s => s.id_actividad === id_actividad).check_a2,
                check_a3: storageAllInformation.find(s => s.id_actividad === id_actividad).check_a3,
                check_profile: storageAllInformation.find(s => s.id_actividad === id_actividad).check_profile,
                answers: storageAllInformation.find(s => s.id_actividad === id_actividad).answers,
                id_evento: storageAllInformation.find(s => s.id_actividad === id_actividad).id_evento,
            };
        });
        storageAllInformation = [];
        resultadoEstudiantesRep.filter(function(element){
            storageAllInformationWithStudents.push(element);
        });
        
    }
    res.send(storageAllInformationWithStudents);
    console.log(resultadoEstudiantes);

    }
}
/** @function generateMetrics */
// Generate metrics the specific elements for Eventos in mongo. 

exports.generateMetrics=(req,res,next)=>{
    const contentData={
        id_estudiante: req.body.id_estudiante,
    }
    Eventos.find({id_estudiante: contentData.id_estudiante},(err,eventsMetrics)=>{
        if(err) return res.status(500).send('Server Error');
        if(!eventsMetrics){
            res.status(409).send({message:'Something Error'});
        }else{
            var dataEvents = eventsMetrics;
            console.log(dataEvents);
            res.send(dataEvents);
        }
    })
}
/** @function uploadEvento*/
// Upload the specific elements for Eventos in mongo. 

exports.uploadEvento = async (req, res) => {
    const eventoData={
        id_evento: req.body.id_evento
    }
    const eventoNewData = {
        data_start: req.body.data_start,
        hour_start: req.body.hour_start,
        data_end: req.body.data_end,
        hour_end: req.body.hour_end,
        id_actividad: req.body.id_actividad,
        id_estudiante: req.body.id_estudiante,
        check_download: req.body.check_download,
        check_inicio: req.body.check_inicio,
        check_fin: req.body.check_fin,
        check_answer: req.body.check_answer,
        count_video: req.body.count_video,
        check_video: req.body.check_video,
        check_document: req.body.check_document,
        check_a1: req.body.check_a1,
        check_a2: req.body.check_a2,
        check_a3: req.body.check_a3,
        check_profile: req.body.check_profile,
        answers: req.body.answers,
        oculto: req.body.oculto
    }
    await Eventos.updateOne({id_evento: eventoData.id_evento}, {$set: eventoNewData}, {new: true});
    res.json({status: 'Evento Actualizado'});
}
/** @function uploadEstadoEvento*/
// Upload the specific elements for Eventos in mongo. 

exports.uploadEstadoEvento = async (req, res) => {
    const eventoData={
        id_evento: req.body.id_evento
    }
    const eventoNewData = {
        oculto: req.body.oculto
    }
    await Eventos.updateOne({id_evento: eventoData.id_evento}, {$set: eventoNewData}, {new: true});
    res.json({status: 'Estado Evento Actualizado'});
}
//id_evento	fecha	id_actividad	id_estudiante	
//check_download	check_inicio	check_fin	
//check_answer	count_video	check_video
