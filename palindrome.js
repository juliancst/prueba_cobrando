
function palindrome (palabra) {
    let palabraInvertida = palabra.split("").reverse().join("");
    return palabraInvertida === palabra ? console.log("Es palíndrome!") : console.log("No es una palíndrome");
}

palindrome("solos");
