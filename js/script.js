console.log ("Repo-FizzBuzz")

//CONSEGNA
// Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// 1. Scrivi i numeri da 1 a 100
// 2. SE Multipli di 3
//    - "Fizz" al posto del numero
// 3. ALTRIMENTI SE Multipli di 5
//    - "Buzz" al posto del numero
// 4. ALTRIMENTI Multipli di 3 e di 5
//    - "FizzBuzz" al posto del numero


for (var i = 1; i < 100; i++) {
    if (i % 15 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}


// PROVE ERRATE 

    // for (let i = 0; i < 100; i++){
    //     let num = i + 1
    //     console.log(num) //numero

    // let resto3 = num % 3 //[0,1,2,3]
    // let resto5 = num % 5 //[0,1,2,3,4,5]
    // if (resto3 === 0){
    //     console.log("Fizz") //string
    // } else if (resto5 === 0){
    //     console.log("Buzz") //string
    // } else {num} //numero
    // }

    
    // for (let i = 0; i < 100; i++){
    //     let num = i + 1

    //     let double = num % 2

    //     let resto3 = double % 3 // number [0,1,2,3]
    //     let resto5 = double % 5 // number [0,1,2,3,4,5]

    //     if (resto3 === 0){
    //         console.log ("Fizz")
    //     } else if (resto5 === 0) {
    //         console.log ("Buzz")
    //     } else (resto3 === 0 && resto5 === 0) {
    //         console.log ("FizzBuzz")
    //     }
    // }


    // for (var i = 0; i < 100; i++) {

    //     let num = i+1

    //     if (num % 15 === 0){
    //         console.log("FizzBuzz");
    //     } else if (num % 3 === 0){
    //         console.log("Fizz");
    //     } else if (num % 5 === 0){
    //         console.log("Buzz");
    //     } else{
    //         console.log(i);
    //     }
    // }

