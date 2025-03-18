function jugar() {
    console.log("Funció jugar() executada"); // Depuració
    const textos = [
        "Aquest text ha estat generat per una IA.",
        "Aquest text ha estat escrit per un humà."
    ];
    
    const aleatori = Math.floor(Math.random() * textos.length);
    console.log("Text seleccionat:", textos[aleatori]); // Depuració
    document.getElementById("resultat").innerText = textos[aleatori];
}

function actualitzarCompteEnrere() {
    const dataFinal = new Date("June 1, 2025 00:00:00").getTime();
    const ara = new Date().getTime();
    const diferencia = dataFinal - ara;

    const dies = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const hores = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuts = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segons = Math.floor((diferencia % (1000 * 60)) / 1000);

    console.log("Compte enrere actualitzat:", `${dies}d ${hores}h ${minuts}m ${segons}s`); // Depuració
    document.getElementById("countdown").innerHTML = 
        `${dies}d ${hores}h ${minuts}m ${segons}s`;

    if (diferencia < 0) {
        document.getElementById("countdown").innerHTML = "El curs ha acabat!";
    }
}

// Actualitzar el compte enrere cada segon
console.log("Iniciant compte enrere..."); // Depuració
setInterval(actualitzarCompteEnrere, 1000);
