
// 1. using object literal
const student = {
    name: 'Musfiq',
    work: 'Student',
    age: 21
};

// 2. constructor
const phone = new Object();
// console.log(phone);

// 3. 
// const human = Object.create(null)
const human = Object.create(student);
console.log(human.name);

class Laptop {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}
const laptop = new Laptop('Laptop', 23);
console.log(laptop);

// 4. function
function Computer(name){
    this.name = name;
}
const pc = new Computer('my pc');
console.log(pc);


const myObject = {
    name: 'Masum',
    age: 21,
    job: {
        work: 'student',
        college: 'Govt. Shahed S.M',
        address: {
            zilla: 'Mymensing',
            country: 'Bangladesh'
        }
    }
};
console.log(myObject.job.address.country);

const aboutMe = Object.create(null);
console.log(aboutMe)

const result = Object.create(myObject);
console.log(result.job);