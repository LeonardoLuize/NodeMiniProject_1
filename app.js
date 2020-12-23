const sharp = require('sharp');

// image directory
let path = process.argv[3];
//new image width
let width = Number(process.argv[4]);

function compressAndResize(x, y){

    if(process.argv[2] == "c"){

        sharp(x).jpeg({quality: y}).toFile('./compressed/output_compress.jpg', (error) =>{
            if(error){
                console.log(error);
            }else{
                console.log("Arquivo comprimido com sucesso!!! :D")
            }
        })

    }else if(process.argv[2] == "r"){
    
        sharp(path).resize({width: width}).toFile('./temp/output_resize.jpg',(error) => {
            if(error){
                console.log(error);
            }else{
                console.log("imagem redimensionada com sucesso!!! :D")
            }
        })

    }else{
        console.log("Opção inválida...")
    }

}

compressAndResize(path, width);