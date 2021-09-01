const masum = {
    id: 01,
    money: 3000,
    name: 'Md Masum Hossain',
    treat: function(expense){
        this.money = this.money - expense;
        console.log(this)
        return this.money;
    }
}
const mirAli = {
    id: 02,
    money: 4000,
    name: 'Mir Ali'
}
masum.treat(100);
masum.treat(100);
masum.treat(100);

const mirTreat = masum.treat.bind(mirAli);

mirTreat(300);
mirTreat(300);