//const { argv } = require('process');
//const { option, boolean } = require('yargs');
const{crearArchivoTabla}=require('./helpers/multiplicar')
const argv =require('./config/yargs');
const colors =require('colors');

console.clear();



//console.log(process.argv);
//console.log(argv);

//console.log('base yargs',argv.b)
//const base=3;

// const [,,arg3='base=5']=process.argv

// const[,base=5]= arg3.split('=');

//console.log(base)

crearArchivoTabla(argv.b,argv.l,argv.h)
   .then(nombreArchivo=>console.log(nombreArchivo.yellow,'creado'))
 .catch(err=>console.log(err));
