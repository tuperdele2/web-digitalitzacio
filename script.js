function saludar() {
    let nom = document.getElementById("nom").value;
    if (nom) {
        document.getElementById("missatge").innerText = "Hola, " + nom + "! Gràcies per visitar la meva web.";
    } else {
        document.getElementById("missatge").innerText = "Si us plau, escriu el teu nom.";
    }
}
