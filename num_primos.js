
let primos = [];

for(let i = 1; i < 101; i++) {

    let conteo = 0;

    for(let j = 1; j <= i; j++) {
        if(i % j ===0)
            conteo++;
    }

    if(conteo === 2) {
        primos.push(i);
        // console.log(i)
    }
}

console.log(primos)


