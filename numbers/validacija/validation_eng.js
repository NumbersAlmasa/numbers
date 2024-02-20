// OVAJ FAJL JE NAMENJEN SAMO ZA login.html, ovde je ceo javascript samo za tu stranicu i ovde koristim funkciju za regex validaciju i gasenje dugmeta ukoliko korisnik ne popuni podatke za prijavu na svoj nalog.
// ova funkcija validateLogin(), kao i sve funkcije, pozivamo ih u html fajlu. Cesto to bude na nekom dugmetu, da bi se sve ovo izvrsilo ja moram to da pozovem u html fajl login.html.
// function validateLogin() {
//     var email = document.getElementById('email').value; // kupi vrednosti od email-a
//     var password = document.getElementById('password').value; // kupi vrednosti od lozinke

//     // Regex validation for email
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert('Pogresna email adresa!');
//         return;
//     }

//     // regex za lozinku, mora da ima najmanje 6 karaktera, bar jedno veliko slovo i specijalne karaktere.
//     var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{6,}$/;
//     if (!passwordRegex.test(password)) {
//         alert('Neispravna lozinka. Minimum 6 karaktera, bar jedno veliko slovo i jedan specijalni karakter.');
//         return;
//     }

// //    obavestenje da je logovanje uspelo preko pop-up prozora u ptretrazivac.
//     alert('Logovanje je uspelo!');
// }


// Ova funkcija ne dozvoljava da se stisne dugme kod stranice Login.html ukoliko korisni knije popunio svoje podatke.
document.addEventListener("DOMContentLoaded", function() {
    // Selektujemo input elemente
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var loginButton = document.querySelector('button[type="submit"]');

    // Dodajemo event listener na input elemente
    emailInput.addEventListener('input', toggleLoginButton);
    passwordInput.addEventListener('input', toggleLoginButton);

    // Funkcija koja menja status dugmeta za prijavu (disabled/enabled)
    function toggleLoginButton() {
        // Proveravamo da li su oba polja popunjena
        if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginButton.disabled = false; // Omogućavamo dugme ako su oba polja popunjena
        } else {
            loginButton.disabled = true; // Onemogućavamo dugme ako neka od polja nije popunjena
        }
    }
});

// Na input passwrod da ima ikonica oko, koja kada se stisne prikaze sifru koju smo upisali
document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('password');
    const showPasswordIcon = document.getElementById('show-password');
  
    showPasswordIcon.addEventListener('click', function () {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordIcon.innerHTML = '<i class="ri-eye-off-fill"></i>'; // Ikonica za skrivanje lozinke
      } else {
        passwordField.type = 'password';
        showPasswordIcon.innerHTML = '<i class="ri-eye-fill"></i>'; // Ikonica za prikazivanje lozinke
      }
    });
  });