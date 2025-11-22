document.getElementById("btnGenerar").addEventListener("click", function () {

    const n = parseInt(document.getElementById("n").value);
    const fizz = parseInt(document.getElementById("fizz").value);
    const buzz = parseInt(document.getElementById("buzz").value);

    const contenedor = document.getElementById("matriz");
    contenedor.innerHTML = "";
    contenedor.style.gridTemplateColumns = `repeat(${n}, 50px)`;

    for (let i = 1; i <= n * n; i++) {

        const celda = document.createElement("div");
        celda.classList.add("celda");
        celda.textContent = i;

        if (i % fizz === 0 && i % buzz === 0) {
            celda.classList.add("fizzbuzz");
        } else if (i % fizz === 0) {
            celda.classList.add("fizz");
        } else if (i % buzz === 0) {
            celda.classList.add("buzz");
        }

        contenedor.appendChild(celda);
    }
});
