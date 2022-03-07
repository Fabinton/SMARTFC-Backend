const Docente = require('./authD_controller');
/** @function RoutesDocente */
// Routes for Docente
module.exports=(router)=> {
    router.post('/createDocente', Docente.createDocente);
    router.post('/loginDocente', Docente.loginDocente);
    router.post('/loadDocente', Docente.loadDocente);
    router.get('/loadAllDocentes', Docente.allDocente);
    router.post('/uploadDocente', Docente.uploadDocente);
    router.post('/uploadInfoLoginDocente', Docente.uploadInfoLoginDocente);
    router.post('/uploadInfoPersonalDocente', Docente.uploadInfoPersonalDocente);
    router.post('/deleteDocente', Docente.deleteDocente);
}