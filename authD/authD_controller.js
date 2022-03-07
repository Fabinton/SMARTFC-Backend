const Docente = require('./authD_dao');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const SECRET_KEY = 'secretkey1234'
/** @function createDocente */
// Create the specific elements for authD in mongo. 

exports.createDocente = async (req, res, next)=>{
    const newDocente = {
        id_docente: req.body.id_docente,
        cont: req.body.cont,
        tipo_usuario: req.body.tipo_usuario,
        nombre_docente: req.body.nombre_docente,
        apellido_docente: req.body.apellido_docente,
        id_colegio: req.body.id_colegio,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        correo_electronico: req.body.correo_electronico
    }
    //console.log(newDocente);
    await Docente.create(newDocente,(err,teacher)=>{
        if (err) return res.json({Estado: "Error Crear Docente"});
        res.json({Estado: 'Docente Creado' })
    })
}
/** @function loginDocente */
// Login authDocente.
exports.loginDocente = (req, res, next)=>{
    //console.log('Entra al Bucle');
    const docenteData = {
        correo_electronico: req.body.correo_electronico,
        contrasena: req.body.contrasena
    }
    //console.log(docenteData);
    Docente.findOne({correo_electronico: docenteData.correo_electronico}, (err, teacher)=>{
        if(err) return res.json({Estado: "Error Servidor"});
        if(!teacher){
            res.json({Estado: "Error Login"});
        }else{
            const resultContrasena= docenteData.contrasena;
            if(resultContrasena==teacher.contrasena){
                const expiresInA = 24 * 60 * 60;
                const accessToken = jwt.sign({ id_docente: docenteData.id_docente }, SECRET_KEY, { expiresIn: expiresInA });
                const dataDocente = {
                    id_docente: teacher.id_docente,
                    cont: teacher.cont,
                    tipo_usuario: teacher.tipo_usuario,
                    nombre_docente: teacher.nombre_docente,
                    apellido_docente: teacher.apellido_docente,
                    id_colegio: teacher.id_colegio,
                    nombre_usuario: teacher.nombre_usuario,
                    contrasena: teacher.contrasena,
                    correo_electronico: teacher.correo_electronico,
                    accessToken: accessToken,
                    expiresIn: expiresInA
                }
                res.send({dataDocente});
            }else{
                res.json({Estado: "Error Login"});
            }
        }
    })
}
/** @function loadDocente */
// Load authDocente.

exports.loadDocente = (req,res,next)=>{
    const docenteData = {
        id_docente: req.body.id_docente
    }
    Docente.findOne({id_docente: docenteData.id_docente},(err, teacher)=>{
        if(err) return res.status(500).send('Server Error');
        if(!teacher){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({teacher});
        }
    })
}
/** @function allDocente */
// Load all teachers in platform.
exports.allDocente = (req,res,next)=>{
    Docente.find(function(err, teachers){
        if(err) return res.status(500).send('Server Error');
        if(!teachers){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(teachers);
        }
    })
}

/** @function uploadInfoPersonalDocente */
// Upgrade information about teachers in platform.
exports.uploadInfoPersonalDocente = async (req, res) => {
    const docenteData = {
        id_docente: req.body.id_docente
    }
    const docenteNewData = {
        nombre_docente: req.body.nombre_docente,
        apellido_docente: req.body.apellido_docente
    }
    await Docente.updateOne({id_docente: docenteData.id_docente}, {$set: docenteNewData}, {new: true}, (err =>{
        return res.json({status: 'Informacion Personal Actualizada'});
    }));
}
/** @function uploadInfoLoginDocente */
// Upgrade information about teachers in platform.

exports.uploadInfoLoginDocente = async (req, res) => {
    const docenteData = {
        id_docente: req.body.id_docente
    }
    const docenteNewData = {
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        correo_electronico: req.body.correo_electronico
    }
    await Docente.updateOne({id_docente: docenteData.id_docente}, {$set: docenteNewData}, {new: true}, (err =>{
        return res.json({status: 'Informacion de Login Actualizada'});
    }));
}
/** @function uploadDocente */
// Upgrade information about teachers in platform.

exports.uploadDocente = async (req, res) => {
    const docenteData = {
        id_docente: req.body.id_docente
    }
    const docenteNewData = {
        nombre_docente: req.body.nombre_docente,
        apellido_docente: req.body.apellido_docente,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena,
        correo_electronico: req.body.correo_electronico
    }
    await Docente.updateOne({id_docente: docenteData.id_docente}, {$set: docenteNewData}, {new: true}, (err =>{
        return res.json({status: 'Informacion Docente Actualizada'});
    }));
}
/** @function deleteDocente */
// Delete information about teachers in platform.

exports.deleteDocente = async (req, res) => {
    //console.log(req.body)
    const docenteData = {
        id_docente: req.body.id_docente
    }
    await Docente.deleteOne({id_docente: docenteData.id_docente}, (err =>{
        return res.json({Estado: 'Docente Eliminado' });
    }));
}

