document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookForm");

    if(form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Verhindert das Standardformular-Submit

            alert("Danke für Ihre Antwort!"); // Ausgabe des Texts

            form.reset(); // nach Durchführung zurücksetzten
        });
    }
})

