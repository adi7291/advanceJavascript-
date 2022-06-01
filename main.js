console.log('hello Ramesh')

const a=10;

function outer(){
    
    const b=20;
    function inner(){
        debugger
        const c=30;
        console.log(a,b,c)
    }
    inner()
}
outer()
//javascript check weather "c" is defined in the inner function scope =>yes 
//it is its value is 30 so 30 is logged in the terminal.It looks for"b",It check weather
// variable "b" is defined in the inner function scope =>it is not So it will go one level up 
//and checks in the outer function scope yes it is so 20 is loged into the terminal. 
//now it checks weather "a" is defined in the inner function scope =>no so it go one level up 
//and check weather variable "a" is defined in the outer function scope =>no so it move one 
//more level up and check in Global scope =>yest and its value is logged in the terminal.
//This is calls lescical scoping when the javascript function are nested to each other.

//CLOSURES

// function outer(){
//     count=0;
//     function inner(){
//         count++
//         console.log(count)
//     }
//     return inner
// }
// outer()()//we are calling outer function first which return inner function and we are calling inner function

// const fn=outer()//we r calling outer function returning inner function 
// fn()//here we are calling inner function it this way we can call inner unction as many times as required.
// fn()
//fn()

// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(2,3,4.5))
// //for function currying sum(2,3,4) should be transformed to sum(2)(3)(4).
//  function curry(fn){
//      return function(d){
//            return function(e){
//                return function(f){
//                    return fn(d,e,f)
//                }
//            }
//      }
     
//  }
//  const curriedSum =curry(sum)
//  console.log(curriedSum(2)(4)(5.78))
const nameMy="Ramesh"
const addNum=(b)=> {
    const nameMy="Vikash"
    var a=444
    let outerVar="This is  Me from India"
    count=0
    inner =()=>{
        console.log(a)
        console.log(outerVar)
        count+=100
        console.log(count)
        console.log(nameMy)
    }
    a=1111
        return inner
}
const returnfunc=addNum("Hello Mr India")
returnfunc()
returnfunc()

var addANum= function (b){
    var a=101
     stringLetter="This is me From India"
     return function inner(){
         console.log(a)
         console.log(stringLetter)
     }
}
addANum()
addANum()

// function roomRent(){

//    var initialRent=8000

//     function incRent (amount){
//         var rent = initialRent + amount
//         console.log("previous year Rent is " ,initialRent)
//         console.log("Current Rent is:",rent)
//     }
//     function decRent (amount){
//         var rent = initialRent  - amount
//         console.log(rent)
//     }
//      incRent(5000) 
// }
// const aae=roomRent()
// aae()

function roomRent(initialRent){
    var rent=initialRent;
    return {
        getRent : function (){
            console.log("This Inital Room rent is:",rent)
        },
        incRent : function(amount){
            rent =rent+amount
            console.log(rent)
        },
        decRent : function (amount){
            rent = rent -amount
            console.log(rent)
        }
    }
}
const needToPay = roomRent(8000)
console.log(needToPay)
needToPay.getRent()
needToPay.incRent(2000)
needToPay.decRent(2000)
needToPay.decRent(2000)


const incDec = ()=>{
    let count=0;
    return {
        incCounter : ()=>{
            count++
            console.log(count)
        },
        decCount : ()=>{
            count --
            console.log(count)
        }
    }
}
const nowCount = incDec()
nowCount.incCounter()
nowCount.incCounter()
nowCount.incCounter()
nowCount.decCount()

const add1=(x)=>{
    return (y)=>{
        return (z)=>{
            console.log(x*y*z)
        }
    }
}
add1(2)(3)(3)
