const Estudiante = require('./authE_dao');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const SECRET_KEY = 'secretkey1234'
/** @function createEstudiante */
// Create the specific elements for authE in mongo. 

exports.createEstudiante = (req, res, next)=>{
    const newEstudiante = {
        id_estudiante: req.body.id_estudiante,
        tipo_usuario: req.body.tipo_usuario,
        nombre_estudiante: req.body.nombre_estudiante,
        apellido_estudiante: req.body.apellido_estudiante,
        grado_estudiante: req.body.grado_estudiante,
        curso_estudiante: req.body.curso_estudiante,
        id_colegio: req.body.id_colegio,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        correo_electronico: req.body.correo_electronico
    }
    //console.log(newEstudiante);
    Estudiante.create(newEstudiante,(err,student)=>{
        if (err) return res.status(500).send(`Server Error ${err}`);
        res.send({student})
    })
}
/** @function loginEstudiante */
// Login authEstudiante.
exports.loginEstudiante = (req, res, next)=>{
    //console.log('Entra al Bucle');
    const estudianteData = {
        correo_electronico: req.body.correo_electronico,
        contrasena: req.body.contrasena
    }
    //console.log(estudianteData);
    Estudiante.findOne({correo_electronico: estudianteData.correo_electronico}, (err, student)=>{
        if(err) return res.status(500).send(`Server Error`);
        if(!student){
            res.status(409).send({message:'Something Error'});
        }else{
            const resultContrasena= estudianteData.contrasena;
            if(resultContrasena==student.contrasena){
                res.send({student});
            }else{
                res.status(409).send(null);
            }
        }
    })
}
/** @function allStudents */
// Load all students in platform.
exports.allStudents = (req,res,next)=>{
    Estudiante.find(function(err, Students){
        if(err) return res.status(500).send('Server Error');
        if(!Students){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(Students);
        }
    })
}
/** @function loadStudents */
// Load student in platform.

exports.loadEstudiante = (req,res,next)=>{
    const estudianteData = {
        id_estudiante: req.body.id_estudiante
    }
    Estudiante.findOne({id_estudiante: estudianteData.id_estudiante},(err, student)=>{
        if(err) return res.status(500).send('Server Error');
        if(!student){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({student});
        }
    })
}
/** @function allStudents */
// Load all students in platform.
exports.allStudents = (req,res,next)=>{
    Estudiante.find(function(err, Students){
        if(err) return res.status(500).send('Server Error');
        if(!Students){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(Students);
        }
    })
}
/** @function allStudents */
// Load all students in platform.
exports.allStudents = (req,res,next)=>{
    Estudiante.find(function(err, Students){
        if(err) return res.status(500).send('Server Error');
        if(!Students){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(Students);
        }
    })
}
/** @function allStudents */
// Load all students in platform.
exports.allStudents = (req,res,next)=>{
    Estudiante.find(function(err, Students){
        if(err) return res.status(500).send('Server Error');
        if(!Students){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(Students);
        }
    })
}
/** @function allEstudiantes */
// Load all students in platform.

exports.allEstudiantes = (req,res,next)=>{
    Estudiante.find(function(err, student){
        if(err) return res.status(500).send('Server Error');
        if(!student){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(student);
        }
    })
}
/** @function uploadEstudiante */
// Update student in platform.

exports.uploadEstudiante = async (req, res) => {
    const estudianteData = {
        id_estudiante: req.body.id_estudiante
    }
    const estudianteNewData = {
        nombre_estudiante: req.body.nombre_estudiante,
        apellido_estudiante: req.body.apellido_estudiante,
        grado_estudiante: req.body.grado_estudiante,
        curso_estudiante: req.body.curso_estudiante,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        correo_electronico: req.body.correo_electronico
    }
    await Estudiante.updateOne({id_estudiante: estudianteData.id_estudiante}, {$set: estudianteNewData}, {new: true});
    res.json({status: 'Informacion Estudiante Actualizada'});
}
/** @function deleteEstudiante */
// Delete student in platform.

exports.deleteEstudiante = async (req, res) => {
    //console.log(req.body)
    const estudianteData = {
        id_estudiante: req.body.id_estudiante
    }
    await Estudiante.deleteOne({id_estudiante: estudianteData.id_estudiante});
    res.json({Estado: 'Estudiante Eliminado' })
}
/** @function conectionWithApp */
// Response about 1 for conect with app

exports.conectionWithApp = async (req, res) => {
    //console.log(req.body)
    res.json(1);
}


