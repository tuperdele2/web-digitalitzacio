function jugar() {
    const textos = [
        "Aquest text ha estat generat per una IA.",
        "Aquest text ha estat escrit per un humà."
    ];
    
    const aleatori = Math.floor(Math.random() * textos.length);
    document.getElementById("resultat").innerText = textos[aleatori];
    
    // Redirigir a una pàgina web
    window.location.href = "https://www.humanornot.ai/"; // Canvia aquesta URL per la que vulguis
}
