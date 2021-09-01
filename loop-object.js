const laptop = {
    name: 'Acer',
    price: 38000,
    ram: '4gb',
    isColorBlack: true
};

/* for(let i = 0; i <= 10; i++){}
for(const num of numbers){}
for(const sum in number){} */

for(const key in laptop){
    // console.log(key,':',laptop[key]);
}

const keys = Object.keys(laptop)
// console.log(keys);
for(const key of keys){
    // console.log(key, laptop[key])
}

const entries = Object.entries(laptop);
// console.log(entries)
for(const [key, value] of Object.entries(laptop)){
    // console.log(key, value)
}

const mobile = {
    name: 'samsung',
    price: 8000,
    ram: '1gb',
    isColorBlack: false
};

for(const key in mobile){
    // console.log(key, mobile[key]);
}
const mobileKey = Object.keys(mobile);
for(const mKey of mobileKey){
    // console.log(mKey);
};

const mobileValue = Object.values(mobile);
for(const value of mobileValue){
    // console.log(value)
};

const mobileEntries = Object.entries(mobile);
for(const entries of mobileEntries){
    console.log(entries);
}
