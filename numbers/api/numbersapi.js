
// Komunikacija sa serverom i uzimanje podataka sa servera.
function fetchData(apiUrl, resultId) {
    fetch(apiUrl) // apiUrl je link sajta sa kojeg kupimo api 
        .then(response => response.text()) // odgovor je tekstualan
        .then(data => { 
            displayResult(data, resultId); // prikaz tih podataka
        })
        .catch(error => {
            console.error('Greska u dohvatanju podataka:', error);
        });
}

// Komunikacija sa html dokumentom preko id taga div, <p> itd.
// Ovde prikazujes vrednost koju dobijas sa sajta Numbers, ondosno sajt od kojeg koristis api za prikaz podataka koje su ti oni dozvolili
function displayResult(result, resultId) {
    // ovde kreiras konstantu koja iz HTML fajla kupi tag koji u sebi sadrzi id koji se zove resultId. I dodeljuje mu se vrednost.
    const resultContainer = document.getElementById(resultId);
    // ovom komandom unutar HTML-a kazes da u <p> paragraf tag ispise rezultat odnosno vrednost koju dobijas iz tog api-ja.
    resultContainer.innerHTML = `<p>${result}</p>`;
}