const Grade = require('./grade_dao');
/** @function createGrade */
// Create the specific elements for Grade in mongo. 

exports.createGrade = async (req, res, next)=>{
    const newGrade = {
        id_grado: req.body.id_grado,
        nombre_grado: req.body.nombre_grado
    }
    //console.log(newGrade);
    await Grade.create(newGrade,(err,grade)=>{
        if(err) return res.json({Estado: "Error Crear Grado"});
        res.send({grade});
    })
}
/** @function loadGrade */
// Load the specific elements for Grade in mongo. 

exports.loadGrade= (req,res,next)=>{
    const gradeData={
        id_grado: req.body.id_grado
    }
    Grade.findOne({id_grado: gradeData.id_grado},(err, grade)=>{
        if(err) return res.status(500).send('Server Error');
        if(!grade){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({grade});
        }
    })
}
/** @function allGrades */
// Load all the specific elements for Grade in mongo. 

exports.allGrades = (req,res,next)=>{
    Grade.find(function(err, grades){
        if(err) return res.status(500).send('Server Error');
        if(!grades){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(grades);
        }
    })
}
/** @function newLoadGrades */
// Load all the specific elements for Grade in mongo. 
exports.newLoadGrades = async (req, res) => {
    const gradesData = await Grade.find();
    res.json(gradesData);
}
/** @function deleteGrade */
// Delete the specific elements for Grade in mongo. 

exports.deleteGrade = async (req, res) => {
    //console.log(req.body)
    const gradeData = {
        id_grado: req.body.id_grado
    }
    await Grade.deleteOne({id_grado: gradeData.id_grado}, (err =>{
        return res.json({Estado: 'Grado Eliminada' });
    }));
}

//id_grado	

//nombre_grado		
