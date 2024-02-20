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
