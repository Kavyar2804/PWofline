





//primitive valus


// let a =10
// let b =a //10

// b =20



let obj ={

name: 'abc',
adress: {

    location: 'Bangalore'
}

}
let ob22=obj
console.log(ob22); //copying same object reference

ob22.name='5555'
console.log(obj);

let ob2 = {...obj} //top level values copied, nested obj/array share same reference

// console.log(ob2);

// ob2.name='xyz'
// ob2.adress.location='mysore' //here changing nested object will affect original object also

// console.log(ob2);
// console.log(obj);

console.log(ob2.adress.location==obj.adress.location);


let arr1 = [1, 2, [3, 4]];
let arr2 = [...arr1];

arr2[2][0] = 99;

// console.log(arr1); // [1, 2, [99, 4]]
// console.log(arr2); // [1, 2, [99, 4]]

//deep copy


let obj3= structuredClone(obj)


obj3.adress.location='qqqqqqqqqqqqqq'
// console.log(obj3);
// console.log(obj);







