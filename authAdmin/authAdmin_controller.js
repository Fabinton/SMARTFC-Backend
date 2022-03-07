const Admin = require('./authAdmin_dao');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const SECRET_KEY = 'secretkey1234'

/** @function createAdmin */
// Create the specific elements for admin in mongo. 

exports.createAdmin = async (req, res, next)=>{
    const newAdmin = {
        id_admin: req.body.id_admin,
        tipo_usuario: req.body.tipo_usuario,
        id_colegio: req.body.id_colegio,
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena
    }
    //console.log(newAdmin);
    await Admin.create(newAdmin,(err,admin)=>{
        if (err) return res.status(500).send(`Server Error ${err}`);
        res.json({Estado: 'Admin Creado' })
    })
}
/** @function loadAdmin */
// Load the specific elements for admin in mongo. 


exports.loginAdmin = (req, res, next)=>{
    //console.log('Entra al Bucle');
    const adminData = {
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena
    }
    //console.log(adminData);
    Admin.findOne({nombre_usuario: adminData.nombre_usuario}, (err, admin)=>{
        if(err) return res.json({Estado: "Error Servidor"});
        if(!admin){
            res.json({Estado: "Error Login"});
        }else{
            const resultContrasena = adminData.contrasena;
            if(resultContrasena == admin.contrasena){
                const expiresInA = 24 * 60 * 60;
                const accessToken = jwt.sign({ id_admin: adminData.id_admin }, SECRET_KEY, { expiresIn: expiresInA });
                const dataAdmin = {
                    id_admin: admin.id_admin,
                    tipo_usuario: admin.tipo_usuario,
                    id_colegio: admin.id_colegio,
                    nombre_usuario: admin.nombre_usuario,
                    contrasena: admin.contrasena,
                    accessToken: accessToken,
                    expiresIn: expiresInA
                }
                res.send({dataAdmin});
            }else{
                res.json({Estado: "Error Login"});
            }
        }
    })
}

exports.loginAdminMovil = (req, res, next)=>{
    console.log('Entra al Bucle');
    const adminData = {
        nombre_usuario: req.body.nombre_usuario,
        contrasena: req.body.contrasena
    }
    //console.log(adminData);
    Admin.findOne({nombre_usuario: adminData.nombre_usuario}, (err, admin)=>{
        if(err) return res.status(500).send(`Server Error`);
        if(!admin){
            res.status(409).send({message:'Something Error'});
        }else{
            const resultContrasena = adminData.contrasena;
            if(resultContrasena == admin.contrasena){
                const expiresInA = 24 * 60 * 60;
                const accessToken = jwt.sign({ id_admin: adminData.id_admin }, SECRET_KEY, { expiresIn: expiresInA });
                const dataAdmin = {
                    id_admin: admin.id_admin,
                    tipo_usuario: admin.tipo_usuario,
                    id_colegio: admin.id_colegio,
                    nombre_usuario: admin.nombre_usuario,
                    contrasena: admin.contrasena,
                    accessToken: accessToken,
                    expiresIn: expiresInA
                }
                res.send([dataAdmin]);
            }else{
                res.status(409).send({message: 'Something Wrong'});
            }
        }
    })
}


exports.loadAdmin = (req,res,next)=>{
    const adminData = {
        id_admin: req.body.id_admin
    }
    Admin.findOne({id_admin: adminData.id_admin},(err, admin)=>{
        if(err) return res.status(500).send('Server Error');
        if(!admin){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({admin});
        }
    })
}

exports.allAdmin = (req,res,next)=>{
    Admin.find(function(err, admin){
        if(err) return res.status(500).send('Server Error');
        if(!admin){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(admin);
        }
    })
}

exports.uploadInfoLoginAdmin = async (req, res) => {
    const adminData = {
        id_admin: req.body.id_admin
    }
    const adminNewData = {
        contrasena: req.body.contrasena
    }
    await Admin.updateOne({id_admin: adminData.id_admin}, {$set: adminNewData}, {new: true}, (err =>{
        return res.json({status: 'Contraseña Actualizada'});
    }));
}

exports.deleteAdmin = async (req, res) => {
    //console.log(req.body)
    const adminData = {
        id_admin: req.body.id_admin
    }
    await Admin.deleteOne({id_admin: adminData.id_admin});
    res.json({Estado: 'Admin Eliminado' })
}