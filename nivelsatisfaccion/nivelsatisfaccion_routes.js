const NivelSatisfaccion = require('./nivelsatisfaccion_controller');
/** @function RoutesNivelSatisfaccion */
// Routes for Countent
module.exports=(router)=> {
    router.post('/createNivelSatisfaccion', NivelSatisfaccion.createNivelSatisfaccion);
    router.post('/loadNivelSatisfaccionUsuario',NivelSatisfaccion.loadNivelSatisfaccionUsuario);
    router.get('/loadCalificaciones/:id_CREA', NivelSatisfaccion.loadCalificaciones);
}