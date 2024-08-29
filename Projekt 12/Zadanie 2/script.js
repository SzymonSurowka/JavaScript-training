const arr = [34, 219, 109, 2934, 12, 10, 29];
const oddNumbers = arr.filter((number) => number % 2); // liczby nieparzyste
const evenNumbers = arr.filter((number) => !(number % 2)); // liczby parzyste
const numbersBiggerThen100 = arr.filter((number) => number > 100); // liczby większe niż 100

const double = arr.map((number) => number * 2);
const people = arr.map((number) => number + " osób");

arr.forEach((number, index) => (arr[index] = number * 2));
