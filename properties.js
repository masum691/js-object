
const smartphone = {
    name: 'samsung',
    model: 'j2',
    price: 9500
}
// getting all properties name
const keys = Object.keys(smartphone);
// console.log(keys)

// getting all values
const values = Object.values(smartphone);
// console.log(values);

const pairs = Object.entries(smartphone);
// console.log(pairs);
// Object.seal(smartphone);
Object.freeze(smartphone);
smartphone.price = 10000;
smartphone.ram = '2gb';
delete smartphone.name;
// console.log(smartphone);


const laptop = {
    price: 36700,
    name: 'acer',
    ram: '4gb'
}
const laptopKey = Object.keys(laptop);
console.log(laptopKey);
const laptopValues = Object.values(laptop);
console.log(laptopValues);
const pair = Object.entries(laptop);
console.log(pair);

// Object.seal(laptop);

// console.log(laptop);

// console.log(laptop);
Object.freeze(laptop);
laptop.price = 38000;
delete laptop.price;
console.log(laptop)
