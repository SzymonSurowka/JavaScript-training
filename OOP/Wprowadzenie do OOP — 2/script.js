// Prototyp - bez użycia
const Animal = function (name) {
  this.name = name;
  this.children = [];
  this.addChildren = function (childName) {
    this.children.push(childName);
  };
};

const hamster = new Animal("bobik");
hamster.addChildren("romuś");
