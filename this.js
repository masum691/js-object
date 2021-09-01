// console.log(this)

const masum = {
    id: 01,
    money: 3000,
    name: 'Md Masum Hossain',
    treatArrow: () => {
        console.log(this)
    },
    treatInside: function(){
        const myArr = () => console.log(this);
        myArr()
    },
    treat: function(expense, boksis, vat){
        this.money = this.money - expense - boksis - vat;
        console.log(this)
        return this.money;
    }
}
// treat(100)

function add(){
    console.log(this)
}