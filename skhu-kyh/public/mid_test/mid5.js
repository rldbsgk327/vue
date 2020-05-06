let a = [ "hello.html", "world.js", "readme.txt" ];

function getExtension(fileName){
    let b = fileName.indexof('.');
    let result = fileName.slice(b);
    return result;
}



for(let i=0; i<3; i++){
    fileName = a[i];
    console.log(getExtension(fileName));
}
