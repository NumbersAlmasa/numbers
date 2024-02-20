// Ova funkcija sluzi da izbrise ulogovanog korisnika sa local storage-a odnosno pretrazivaca (Google) kome smo zadali da se cuva currentUser.
// To je ustvari logika za Log out dugme koje odjavi korisnika sa svog naloga.
function logout() {
    localStorage.removeItem('currentUser');
    location.reload(); // ovo sluzi da restartuje stranicu nakon uklanjanja korisnika iz local storage-a.
}