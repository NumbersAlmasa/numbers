// ovo je funkcija koja radi validaciju za formu koju koristimo da registrujemo korisnika. Ova funkcija se zove validateRegistration().
// Nesto vise o regex-u mozes da pogledas na sajtu https://regex101.com/. Ovde mozes da vidis kako se to koristi, kako se proverava neki string(slova), int(brojevi-celi brojevi bez decimalnog zapisa) u JS. 
function validateRegistration() {
    clearErrorMessages(); // Briše postojeće poruke o greškama
// kreiramo kontante i uzimamo element iz html dokumenta po njegovom id-u, tj uzimamo njegovu vrednost koju je korisnik uneo.
// ovo sve imamo u formi za registraciju, samo izvlacimo vrednosti od inputa kako bi manipulisali njima u JavaScript-u.
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Validacija za ime (dozvoljava samo slova, najmanje 3 karaktera)
// ^: Označava početak stringa.
// [a-zA-Z]: Definiše skup karaktera koji su dozvoljeni u tekstu, u ovom slučaju sva mala i velika slova engleske abecede.
// {3,}: Specifikacija minimalnog broja ponavljanja karaktera iz prethodnog seta. U ovom slučaju, {3,} znači da se očekuje minimalno 3 karaktera iz prethodno definisanog skupa, ali može biti i više.
// $: Označava kraj stringa.
    const nameRegex = /^[a-zA-Z]{3,}$/;
    if (!nameRegex.test(firstName)) {
        displayErrorMessage('firstName', 'Invalid first name. Only constters allowed, minimum 3 characters.');
        return false;
    }

    // Validacija za prezime (dozvoljava samo slova, najmanje 3 karaktera)
    if (!nameRegex.test(lastName)) {
        displayErrorMessage('lastName', 'Invalid last name. Only constters allowed, minimum 3 characters.');
        return false;
    }

    // Validacija za email
// ^: Početak stringa.
// [a-zA-Z0-9._-]+: Ovo označava deo adrese koji se sastoji od jednog ili više karaktera koji mogu biti mala slova (a-z), velika slova (A-Z), brojevi (0-9), tačka (.), donja crta (_) ili crtica (-). Ovo je deo pre znaka '@'.
// @: Znak '@'.
// [a-zA-Z0-9.-]+: Ovo označava deo adrese nakon znaka '@'. Sastoji se od jednog ili više karaktera koji mogu biti mala slova (a-z), velika slova (A-Z), brojevi (0-9), tačka (.) ili crtica (-).
// \.: Ovo označava tačku (.) koja se koristi za razdvajanje imena domena.
// [a-zA-Z]{2,4}: Ovo označava poslednji deo adrese, tj. domen. Sastoji se od 2 do 4 karaktera koji mogu biti mala slova (a-z) ili velika slova (A-Z). Na primer, ".com", ".net", ".org" su validni domeni.
// $: Kraj stringa.
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        displayErrorMessage('email', 'Invalid email address format. Must be in the format "example@example.com".');
        return false;
    }

    // Validacija za password (najmanje 6 karaktera, bar jedno veliko slovo, jedan specijalni karakter)
// ^: Označava početak stringa.
// (?=.*[A-Z]): Pozitivna lookahead (gleda unapred) - Ovo znači da mora postojati bar jedno veliko slovo (A-Z) u šifri.
// (?=.*[!@#$%^&*]): Pozitivna lookahead - Moraju postojati bar jedan specijalni karakter iz navedenog skupa: !@#$%^&*.
// (?=.*[a-z]): Pozitivna lookahead - Moraju postojati bar jedno malo slovo (a-z) u šifri.
// (?=.*[0-9]): Pozitivna lookahead - Moraju postojati bar jedna cifra (0-9) u šifri.
// .{6,}: Očekuje se da šifra ima najmanje 6 karaktera. . predstavlja bilo koji karakter, a {6,} znači minimalno 6 ponavljanja prethodnog karaktera.
// $: Označava kraj stringa.
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
        displayErrorMessage('password', 'Invalid password. Minimum 6 characters, at least one uppercase constter, and one special character.');
        return false;
    }

    // Validacija za broj telefona (mora sadržavati 10 cifara)
// ^: Označava početak stringa.
// \+?: Opciono, može sadržavati znak plus (+) na početku broja.
// [0-9]{10}: Očekuje se tačno 10 cifara od 0 do 9.
// $: Označava kraj stringa.
    const phoneRegex = /^\+?[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        displayErrorMessage('phoneNumber', 'Invalid phone number. Must contain 10 digits.');
        return false;
    }


    // ako se nije javila greska vrati true 
  return true
}


// Funkcija displayErrorMessage(inputId, errorMessage) postavlja tekstualnu poruku o grešci za određeni unos na formi.
// Prima dva argumenta:
// - inputId: ID elementa na formi za koji se postavlja poruka o grešci.
// - errorMessage: Tekst poruke o grešci koji se postavlja.
function displayErrorMessage(inputId, errorMessage) {
    // Pronalazi element koji prikazuje poruku o grešci na osnovu ID-ja unosa
    const errorParagraph = document.getElementById(inputId + 'Error');
    // Postavlja tekst poruke o grešci na pronađeni element
    errorParagraph.textContent = errorMessage;
}

// Funkcija clearErrorMessages() briše sve postojeće tekstualne poruke o grešci na formi.
function clearErrorMessages() {
    // Pronalazi sve elemente sa klasom 'text-danger' koji prikazuju poruke o grešci
    const errorMessages = document.querySelectorAll('.text-danger');
    // Iterira kroz sve pronađene elemente i postavlja im prazan tekst
    errorMessages.forEach(function (errorMessage) {
        errorMessage.textContent = '';
    });
}

// Na input passwrod da ima ikonica oko, koja kada se stisne prikaze sifru koju smo upisali
document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('password');
    const showPasswordIcon = document.getElementById('show-password');
  
    showPasswordIcon.addEventListener('click', function () {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordIcon.innerHTML = '<i class="ri-eye-fill"></i>'; // Ikonica za skrivanje lozinke
      } else {
        passwordField.type = 'password';
        showPasswordIcon.innerHTML = ' <i class="ri-eye-off-fill"></i>'; // Ikonica za prikazivanje lozinke
      }
    });
  });
  
 

