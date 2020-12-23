const sharp = require('sharp');

let path = process.argv[2];
let width = Number(process.argv[3]);

function resize(path, width){
    
    sharp(path).resize({width: width}).toFile('./temp/output_resize.jpg',(error) => {
        if(error){
            console.log(error);
        }else{
            console.log("imagem redimensionada com sucesso!!! :D")
        }
    })

}

resize(path, width);