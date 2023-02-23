const Comentario = require('./comentario_controller');
/** @function RoutesComentario */
// Routes for Countent
module.exports=(router)=> {
    router.post('/createComentario', Comentario.createComentario);
    router.get('/loadComentarios/:id_CREA', Comentario.loadComentarios);
}