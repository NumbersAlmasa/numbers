// Funkcija za čuvanje korisnika u localStorage
function saveUser(email, password) {
  // Provera da li postoji već korisnik sa istim email-om
  if (localStorage.getItem(email)) {
    console.error("Email already exists!");
    alert("User with this email alredy !");
    document.getElementById("registerForm").reset(); // Resetovanje polja forme ako korisnik sa tim email-om vec postoji
    return;
  }

  // Heširanje lozinke
  const shaObj = new jsSHA("SHA-256", "TEXT"); // kreiramo objekat za hesiranje koji koristi tekst
  shaObj.update(password); // ovde izmenimo uneti password npr. konvertujemo : "almasa" --> 12xRt.!22tyjK3l - ovo je hesirana lozinka
  const hashedPassword = shaObj.getHash("HEX"); // ovde trazimo hash kod

  // Čuvanje korisnika u localStorage
  localStorage.setItem(email, hashedPassword);
  alert("User saved successfully!");
  window.location.href = "../engleski/login_eng.html";
}

// ova funkcija trazi html element koji se zove "registerForm" i reaguje kada se stisne dugme za registraciju korisnika kada uspesno popuni sve podatke koje se od njega zahtevaju.
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // ovo ne dozvoljava da se stranica osvezava, time se gube podaci kada se prebaci npr na login stranicu.
    const newemail = document.getElementById("email").value; // trazo input sa nazivom name="email" i dohvata njegovu vrednost. A vrednost je ono sto je korisnik uneo u polje koje je vezano za email u ovom slucaju.
    const newPassword = document.getElementById("password").value; // isto kao ovo iznad samo ovo je za lozinku.

    //  proverava da li je funkcija validateRegistration() iz fajla  validateRegistration.js izvrsena, ako jeste onda kreira novog usera.
    if (validateRegistration()) {
      // Sacuva korisnika u localstorage, njegov email i hesiranu lozinku
      saveUser(newemail, newPassword);
    }
  });

// Hesirana lozinka se koristi iz bezbednosnih razloga, uzima se npr. sifra: almasa. funkcija jsSHA uzima te karaktere i nekako matematicki ih
// izmeni i pravi od toga hash password koji mi dobijamo kao rezultat, time otezavamo da se provali korisniku naseg sajta njegova sifra koju on koristi.

// Hesirana lozinka se koristi iz bezbednosnih razloga, uzima se npr. sifra: almasa. funkcija jsSHA uzima te karaktere i nekako matematicki ih
// izmeni i pravi od toga hash password koji mi dobijamo kao rezultat, time otezavamo da se provali korisniku naseg sajta njegova sifra koju on koristi.
