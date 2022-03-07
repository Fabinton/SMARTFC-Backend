var exec = require('child_process').exec, child;
// Creamos la función y pasamos el string pwd 
// que será nuestro comando a ejecutar
child = exec('rsync -avzh public/ fcunicauca@13.82.209.77:FCUnicauca/server/fcserverunicauca/publicrsync -avzh public/ fcunicauca@13.82.209.77:FCUnicauca/server/fcserverunicauca/public',
// Pasamos los parámetros error, stdout la salida 
// que mostrara el comando
  function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    console.log(stdout);
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
