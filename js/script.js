const areaSquare = document.querySelector(".cont-square");

for (let i = 1; i <= 100; i++) {
    let numero = i;
    let multipli3 = i % 3 == 0;
    let multipli5 = i % 5 == 0;
    let bG = 'blue'
    
    if (multipli3) {
        bG = 'green';
        numero = 'Fizz';
    };  

    if (multipli5) {
        bG = 'yellow';
        numero = 'Buzz';
    };

    if (multipli3 && multipli5) {
        bG = 'red';
        numero = 'FizzBuzz';
    };

    areaSquare.innerHTML += `
        <div class="box ${bG}">
            ${numero}
        </div>`;
};