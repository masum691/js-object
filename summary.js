const bottle = {
    name: 'bottle',
    price: 12,
    about: function(){

    }
}
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const entries = Object.entries(bottle);

for(const key in bottle){
    console.log(bottle[key]);
}
const a = {a: 1};
const b = {a: 1};
const c = a;
if(a === b){

}

const bind = bottle.price.bind(b);
bind();
