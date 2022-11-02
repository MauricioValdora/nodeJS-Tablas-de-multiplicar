const fs = require('fs');

const crearArchivoTabla=async(base=5,listar=false,hasta)=>{

    try { 
    
    let salida =''; 
        for(i=0;i<=hasta;i++){
            cuenta = base*i;
            salida +=`${base} X ${i} = ${base*i} \n`;
        }

        if(listar) {  
            console.log('=======================');
            console.log(`TABLA DE ${ base}`)
            console.log('=======================');
            console.log(salida.rainbow);
            
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
            return `tabla-${base}.txt creado`;
    }

 catch (error) {
    return 'run away'
    }
}

module.exports = {
    crearArchivoTabla
}