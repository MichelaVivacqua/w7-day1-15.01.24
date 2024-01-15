// Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:- firstName- lastName- age- location Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto. Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  comparaetà(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    } else this.age < otherUser.age;
    {
      return otherUser.firstName + " è più vecchio di " + this.firstName;
    }
  }
}

const user1 = new User("Mario", "Bros", 9, "Nintendo");
console.log(user1);

const user2 = new User("Luigi", "Bros", 11, "Nintendo");
console.log(user2);

const risultatoConfronto = user1.comparaetà(user2);
console.log(risultatoConfronto);

const mimi = new User("Michela", "Vivacqua", 24, "Sommatino");
console.log(mimi);

const chuck = new User("Chuck", "Bass", 25, "Upper East Side");
console.log(chuck);

const risultatoConfronto2 = mimi.comparaetà(chuck);
console.log(risultatoConfronto2);

// Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species // (cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante
const petNameInput = document.getElementById("petName");
const ownerInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const saveButton = document.querySelector("form button");

const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  padroneCondiviso(otherOwner) {
    if (this.ownerName === otherOwner.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const petList = function () {
  const row = document.getElementById("list");
  row.innerHTML = "";
  pets.forEach((pet) => {
    const newCol = document.createElement("div");
    newCol.innerHTML = `
    <p> 
        ${pet.petName} è il cucciolo di
            ${pet.ownerName}, è un
            ${pet.species} di razza
            ${pet.breed}

  
    </p>
    `;
    row.appendChild(newCol);
  });

  petNameInput.value = "";
  ownerInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

// assegno un comportamento all'invio del form
const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", function (e) {
  e.preventDefault(); // fermiamo la pagina dal refresh
  // raccolgo i dati dagli input, e ne creo un oggetto

  const pet = new Pet(
    petNameInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  );

  console.log("LISTA CREATA", pet);
  pets.push(pet);
  petList();
});

const pet1 = new Pet("Yoshi", "Giancarlo", "cane", "shiba");
console.log(pet1);

const pet2 = new Pet("Cash", "Giancarlo", "cane", "shiba");
console.log(pet2);

const risultatopadrone = pet1.padroneCondiviso(pet2);
console.log(risultatopadrone);

const pet3 = new Pet("Emmiris", "Manuel", "gatto", "persiano");

const risultatopadrone2 = pet1.padroneCondiviso(pet3);
console.log(risultatopadrone2);
