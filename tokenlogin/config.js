var mysql      = require('mysql');
var connection = mysql.createConnection({
  //host     : 'umgsm.com',
  host     : 'localhost',
  //user     : 'apimultas_user',
  user     : 'root',
  //password : 'UserMultasDB2018',
  password : '',
  //database : 'apimultas',
  database : 'db_api_multas'
  //port: '3306'
});
connection.connect(function(err){
if(!err) {
    console.log("La base de datos está conectada");
} else {
    console.log("Error al conectarse con la base de datos");
}
});
module.exports = connection;
