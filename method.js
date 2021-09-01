
const student = {
    name: 'Masum',
    id: 01,
    major: 'ICT',
    isPassed: true,
    money: 3000,
    subjects: ['bangla', 'english', 'math', 'economics'],
    bestFriend: {
        name: 'Sakil',
        major: 'English'
    },
    takeExam: function(){
        console.log(this.name, 'Examiner')
    },
    treat: function(expense, tips){
        this.money = this.money - expense - tips;
        return this.money;
    }
}
student.takeExam();
const remaining1 = student.treat(100, 200);
const remaining2 = student.treat(200, 300);
// console.log(remaining1);
// console.log(remaining2);


const products = {
    name: 'Laptop',
    brand: 'Acer',
    price: 36700,
    showroom: {
        location: 'Mymensingh',
        country: 'Bangladesh'
    },
    reCheck: function(){
        console.log(this.name);
    },
    checkLocation: function(){
        console.log(this.showroom.location);
    },
    addPrice: function(keyboard, mouse, webcam, headphone){
        console.log(this.price = this.price + keyboard + mouse + webcam + headphone);
    }
}
products.reCheck();
products.checkLocation();
products.addPrice(200,100,400,100);
