const publicID = "JdjO8B7sECZ0P2V1G";

// Funkcija za slanje mejla
function sendMail() {
  if (!validirajFormu()) {
    return; // prekini izvrsavanje ako forma nije validna
  }

  // Parametri koje izvlacim iz HTML fajla kako bi im pristupila
  const params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  // Ovo je sa sajta EmailJS ovde se nalaze podaci za povezivanje kreiranog kalupa odnosno formata poruke na mejlu
  const serviceID = "service_7jqv57j";
  const templateID = "template_033lf0y";
  emailjs.init(publicID);

  // Ovde saljemo serveru podatke koje on salje na mejl koji je uneo korisnik
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Ovde postavljamo vrednosti polja na prazan string
      document.getElementById("name").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // Provera odgovora servera
      console.log(res);

      // Prozor koji iskace kada je poruka uspešno poslata
      alert("The message has been sent successfully!");
    })
    // Ovo sluzi da se pojavi greska u konzoli pretrazivaca ukoliko slanje poruke nije uspelo
    .catch((err) => console.log(err));
}

//   Validacija forme i njenih inputa gde se unose podaci korisnika
function validirajFormu() {
  const isValid = true;

  const ime = document.getElementById("name").value.trim();
  const prezime = document.getElementById("lastname").value.trim();
  const poruka = document.getElementById("message").value.trim();

  // Validacija imena
  // Provera da li ime počinje velikim slovom (A-Z),
  // sastoji se samo od velikih slova ili belih prostora (\s),
  // i da li je dužine najviše 10 karaktera.
  if (ime === "" || ime.length > 10 || !ime.match(/^[A-Z\s]+$/)) {
    document.getElementById("name-error").textContent =
      "The name must be all uppercase and maximum of 10 characters.";
    isValid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  // Validacija prezimena
  // Provera da li prezime počinje velikim slovom (A-Z),
  // sastoji se samo od velikih slova ili belih prostora (\s),
  // i da li je dužine najviše 18 karaktera.
  if (prezime === "" || prezime.length > 18 || !prezime.match(/^[A-Z\s]+$/)) {
    document.getElementById("lastname-error").textContent =
      "The last name must be all uppercase and maximum of 18 characters.";
    isValid = false;
  } else {
    document.getElementById("lastname-error").textContent = "";
  }

  // Validacija poruke
  // Provera da li je poruka dužine između 100 i 250 karaktera.
  if (poruka.length < 100 || poruka.length > 250) {
    document.getElementById("message-error").textContent =
      "The message must be between 100 and 250 characters.";
    isValid = false;
  } else {
    document.getElementById("message-error").textContent = "";
  }

  return isValid;
}
