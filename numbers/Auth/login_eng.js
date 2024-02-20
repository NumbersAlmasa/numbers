
// Funkcija za čuvanje korisnika u localStorage
function saveUser(email, password) {
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  const shaObj = new jsSHA('SHA-256', 'TEXT');
  shaObj.update(password);
  const hashedPassword = shaObj.getHash('HEX');

  users.push({ email, password: hashedPassword });

  localStorage.setItem('users', JSON.stringify(users));
}
// Funkcija za proveru korisničkih podataka prilikom logina
function loginUser(email, password) {
  // userPassword je hesirani pass
  const userPassword = localStorage.getItem(email);
  if (!userPassword) {
    return alert('The user account does not exist.');
  }
  // Heširanje lozinke
  const shaObj = new jsSHA('SHA-256', 'TEXT');
  shaObj.update(password);
  const hashedPassword = shaObj.getHash('HEX');

  localStorage.setItem('currentUser', email);

  return userPassword === hashedPassword;

}

// Proverava da li su polja inputa prazna, ako jesu onda je dugme uagseno i ne moze da se stisne na dugme.
document.addEventListener('DOMContentLoaded', function() {
  // Dodajemo event listenere unutar funkcije DOMContentLoaded kako bi osigurali da se kod izvrši tek nakon učitavanja celog HTML dokumenta

  // Funkcija za proveru popunjenosti polja i omogućavanje/disabliranje dugmeta za prijavu
  function validateLogin() {
      const emailValue = document.getElementById('email').value.trim();
      const passwordValue = document.getElementById('password').value.trim();
      const loginButton = document.querySelector('button[type="submit"]');

      // Ako su oba polja popunjena, omogući dugme za prijavu, inače disabliraj ga
      if (emailValue !== '' && passwordValue !== '') {
          loginButton.disabled = false;
      } else {
          loginButton.disabled = true;
      }
  }

  // Pratimo unos korisnika u poljima email i password
  document.getElementById('email').addEventListener('input', validateLogin);
  document.getElementById('password').addEventListener('input', validateLogin);

  // Dodajemo event listener za submit forme
  document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Provera korisničkih podataka prilikom logina
      if (loginUser(email, password)) {
          alert('Successfully logged!');
          // Preusmeravanje na index.html nakon uspešnog logina
          window.location.href = '../engleski/index_eng.html';
      } else {
          alert('Wrong email or password!');
      }
  });
});

