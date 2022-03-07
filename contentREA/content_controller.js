const ContentREA = require('./content_dao');
/** @function createContentREA */
// Create the specific elements for content in mongo. 

exports.createContentREA = async (req, res, next)=>{
    const newContentREA = {
        id_CREA: req.body.id_CREA,
        cont: req.body.cont,
        tipo_CREA: req.body.tipo_CREA,
        id_docente: req.body.id_docente,
        id_materia: req.body.id_materia,
        id_grado: req.body.id_grado,
        id_colegio: req.body.id_colegio,
        nombre_CREA: req.body.nombre_CREA,
        urlrepositorio: req.body.urlrepositorio,
        descripcion_CREA: req.body.descripcion_CREA,
        en_uso: 0
    }
    //console.log(newContentREA);
    await ContentREA.create(newContentREA,(err,content)=>{
        if(err) return res.json({Estado: "Error Crear Contenido"});
        res.send({content});
    })
}
/** @function loadContentREA */
// Load the specific elements for content in mongo. 

exports.loadContentREA= (req,res,next)=>{
    const contentData={
        id_CREA: req.body.id_contenidoREA
    }
    ContentREA.findOne({id_CREA: contentData.id_CREA},(err, content)=>{
        if(err) return res.status(500).send('Server Error');
        if(!content){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            //console.log("content",content);
            res.send({content});
        }
    })
}
/** @function allContent */
// Load all the specific elements for content in mongo. 

exports.allContent = (req,res,next)=>{
    ContentREA.find(function(err, contents){
        if(err) return res.status(500).send('Server Error');
        if(!contents){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(contents);
        }
    })
}
/** @function allContentMovilG */
// Load all the specific elements for content in mongo. 

exports.allContentMovilG = async (req,res,next)=>{
    console.log("Entra Aqui");
    var mandaR=0;
    const datosContent = await ContentREA.find(function(err, contents){
        if(err) return res.status(500).send('Server Error');
        if(!contents){
            res.status(409).send({message:'Something Error'});
        } else{
            mandaR =1;
        }
    })
    
    var storageAllInformation = [];
    var filtroDatos = datosContent;
    //console.log();
    for (var i = 0; i<datosContent.length;i++){
        if(filtroDatos[i].tipo_CREA==1){
            storageAllInformation.push(filtroDatos[i]);
        }
    }
    console.log(storageAllInformation);
    res.send(storageAllInformation);
}
/** @function SearchContentREA */
// Search all the specific elements for content in mongo. 

exports.SearchContentREA= (req,res,next)=>{
    const contentData={
        nombre_CREA: req.body.nombre_CREA,
    }
    //contentData.nombre_CREA /^Sumar/i
    ContentREA.find({nombre_CREA: { $regex: contentData.nombre_CREA, $options: "xi" }},(err, content)=>{
        if(err) return res.status(500).send('Server Error');
        if(!content){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({content});
        }
    })
}
/** @function allContentMovil */
// Load all the specific elements for content in mongo. 

exports.allContentMovil = (req,res,next)=>{
    ContentREA.find(function(err, contents){
        if(err) return res.status(500).send('Server Error');
        if(!contents){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send({contents});
        }
    })
}
/** @function newLoadContentREA */
// Load all the specific elements for content in mongo. 

exports.newLoadContentREA = async (req, res) => {
    const contentsData = await ContentREA.find();
    res.json(contentsData);
}
/** @function deleteContentREA */
// Delete the specific elements for content in mongo. 

exports.deleteContentREA = async (req, res) => {
    //console.log(req.body)
    const contentData = {
        id_CREA: req.body.id_CREA
    }
    await ContentREA.deleteOne({id_CREA: contentData.id_CREA}, (err =>{
        return res.json({Estado: 'Contenido Eliminado'});
    }));
}
/** @function uploadEstadoContentREA */
// Upload the specific elements for content in mongo. 


exports.uploadEstadoContentREA = async (req,res) => {
    const contentData = {
        id_CREA: req.body.id_CREA
    }
    const contentNewEstadoData = {
        en_uso: req.body.en_uso
    }
    await ContentREA.updateOne({id_CREA: contentData.id_CREA}, {$set: contentNewEstadoData}, {new: true}, (err =>{
        return res.json({status: 'Estado Contenido Actualizado'});
    }));
} 
/** @function uploadURLContentREA */
// Upload the specific elements for content in mongo. 

exports.uploadURLContentREA = async (req,res) => {
    const contentData = {
        id_CREA: req.body.id_CREA
    }
    const contentNewURLData = {
        urlrepositorio: req.body.urlrepositorio
    }
    await ContentREA.updateOne({id_CREA: contentData.id_CREA}, {$set: contentNewURLData}, {new: true}, (err =>{
        return res.json({status: 'URL Contenido Actualizado'});
    }));
} 

//id_CREA	tipo_CREA	id_materia	grado10	
//grado11	
//nombre_CREA	urlrepositorio	descripcion_CREA
