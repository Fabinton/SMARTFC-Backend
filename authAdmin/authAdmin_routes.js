const Admin = require('./authAdmin_controller');
/** @function RouterAdmin */
// Routes for Activities

module.exports=(router)=> {
    router.post('/createAdmin', Admin.createAdmin);
    router.post('/loginAdmin', Admin.loginAdmin);
    router.post('/loginAdminMovil', Admin.loginAdminMovil);
    router.post('/loadAdmin', Admin.loadAdmin);
    router.get('/loadAllAdmin', Admin.allAdmin);
    router.post('/uploadInfoLoginAdmin', Admin.uploadInfoLoginAdmin);
    router.post('/deleteAdmin', Admin.deleteAdmin);
}