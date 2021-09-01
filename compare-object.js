
const first = {a: 1};
const second = {a: 1};
const third = first;
if(first == second){
    // console.log('true');
}
else{
    // console.log('false');
}

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if(JSON.stringify(first2) === JSON.stringify(second2)){
    console.log('true')
}

function compareObjects(objOne, objTwo){
    if(Object.keys(objOne).length !== Object.keys(objTwo).length){
        return false;
    }
    for(const res in objOne){
        if(objOne[res] !== objTwo[res]){
            return false;
        }
    }
}
