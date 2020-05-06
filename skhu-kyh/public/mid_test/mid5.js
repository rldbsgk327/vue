let a = [ "hello.html", "world.js", "readme.txt" ];

function getExtension(fileName){
    fileName = 
    let b = fileName.indexof('.');
    let result = fileName.slice(b);
    return result;
}

console.log(getExtension(a[0]));

