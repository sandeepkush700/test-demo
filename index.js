// function getData(dataId, getnextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (getnextData) {
//             getnextData()
//         }
//     }, 2000);
// }

// -----------------call back hell


// getData(1, () => {
//     console.log("wating for ...")
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })

// promise --------------

// let promise = new Promise((resove, reject) => {
//     console.log("i am promise")
// })


// function getData(dataId, getnextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("done")
//             if (getnextData) {
//                 getnextData()
//             }
//         }, 2000);
//     })

// }


///----------promise chaning---------

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1")
//             resolve("success")
//         }, 4000);
//     })

// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2")
//             resolve("success")
//         }, 4000);
//     })

// }

// const promise = asyncFunc1()
// promise.then((result) => {
//     console.log(result)
//     p2 = asyncFunc2();
//     p2.then((result) => {
//         console.log(result)
//     })

// })

// promise.catch((ere) => {
//     console.log(ere)
// })


//-------------Async await---------------


// function geTdata(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID)
//             resolve()
//         }, 2000);
//     })
// }

// (async function () {
//     console.log("getting 1 data")
//     await geTdata(1)// 1st
//     console.log("getting 2nd data")
//     await geTdata(2)// 2nd
//     console.log("getting 3nd data")

//     await geTdata(3)// 2nd
//     console.log("getting 4nd data")

//     await geTdata(4)// 2nd
//     console.log("getting 5nd data")

//     await geTdata(5)// 2nd
// })()



// ------------classes and object------
// let a={
//     fullname:"shardha",
//     marks:97.8,
//     printmarks:function()
//     {
//         console.log(a.marks)
//     }
// }


// class ToyotaCar {
//     constructor(brand, milege) {
//         this.brand = brand,
//             this.milege = milege
//     }
// }

// let fortuner = new ToyotaCar('fortuner', 50);
// console.log(fortuner)
// let lexus = new ToyotaCar('lexus', 50);
// console.log(lexus)


// -----inheritancee------

// class Parent {
//     hello(){
//         console.log("hello")
//     }
// }

// class child extends Parent{

// }
// let obj=new child()
// console.log(obj)

//----------Dom-----------


// const a = document.getElementsByClassName("para")
// console.log(a)

// const all = document.querySelectorAll(".para");

// for (const element of all) {
//     element.innerText = element.innerText + " append some text";

//     console.log(element.innerText);
// }

console.log("value",a);
var a=20;
console.log("value",a)

