// Tworzenie obiektu - literał obiektu

const user = {
  name: "Janek",
  age: 28,
  showName: function () {
    console.log(`Cześć ${this.name}!`);
  },
  showAge() {
    console.log(`Wiek użytkownika ${this.name}, to ${this.age}`);
  },
};

// Tworzenie obiektu - new + konstruktor Object

const cat = new Object();

cat.name = "fafik";
cat.meow = function () {
  console.log(this.name + ": miau miau!");
};

// Tworzenie KONSTRUKTORA (wzór) - (poprzez wyrażenie funkcyjne)

const Animal = function (name, species) {
  this.name = name;
  this.species = species;
  this.eat = function () {
    console.log(this.name + " auuuu (jakie dobre)");
  };
};

// UTWORZENIE OBIEKTU (INSTANCJI)

const dog = new Animal("azor", "owczarek");
const dog2 = new Animal("muszka", "nikt nie wie");
