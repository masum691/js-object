const masum = {
    id: 01,
    money: 3000,
    name: 'Md Masum Hossain',
    treat: function(expense, boksis, vat){
        this.money = this.money - expense - boksis - vat;
        console.log(this)
        return this.money;
    }
}
const mirAli = {
    id: 02,
    money: 4000,
    name: 'Mir Ali'
}
// masum.treat(100);
// masum.treat(100);
// masum.treat(100);

// const mirTreat = masum.treat.bind(mirAli);

// mirTreat(300);
// mirTreat(300);

// masum.treat.call(mirAli,500, 100, 50);
// masum.treat.call(mirAli, 1000, 100, 50);
// masum.treat.call(mirAli, 2000, 100, 50);

masum.treat.apply(mirAli, [1000, 200, 100]);
masum.treat.apply(mirAli, [2000, 250, 160]);

