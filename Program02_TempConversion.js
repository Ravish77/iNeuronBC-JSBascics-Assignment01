function farToCelConverter(farTemp){

    return (farTemp-32)*(5/9);

}

function celToFarConverter(celsiusTemp){

    return (celsiusTemp*1.8)+32;

}


let tempInFar = celToFarConverter(60);
console.log("temparature in Fahrenheit is "+tempInFar+" F");

let tempInCel = farToCelConverter(45);
console.log("temparature in Celsius is "+tempInCel+" C");
