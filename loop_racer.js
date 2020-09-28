let sampleData = [
    {
        name:"Alex",
        state:"NSW"
    },
    {
        name:"Nands",
        state:"NSW"
    },
    {
        name:"Zeb",
        state:"VIC"
    },
    {
        name:"Carl",
        state:"VIC"
    },
    {
        name:"Varsha",
        state:"BRI"
    },
    {
        name:"Lav",
        state:"BRI"
    },
];

// Iterate over the sample data above & log the value of each key in each object!
// Note the example below to track the time
// that it took to do the lines of code 
// between each of the Date() lines.
// -------------------------------------------
// // Note when we started:
// let startTime = new Date();
// // Do what we wanna do while counting time:
// console.log("Hello world!")
// // Note the time when we finished:
// let endTime = new Date();
// // Calculate how much time passed between startTime & endTime:
// let timeDiff = endTime - startTime; // duration in milliseconds
// console.log(`Saying hello world took ${timeDiff} milliseconds.`)
// -------------------------------------------
function testForDuration () {

    // // for :
    let startTime = new Date();
    for (let i = 0; i < sampleData.length; i++ ){
        
        console.log(Object.values(sampleData[i]))
    }
    let endTime = new Date();
    let forDuration = (endTime - startTime); 

    // // results :
    console.log(`Iterating through the object using a for loop, took ${forDuration} milliseconds`)
    
    
    
}

function testForEachDuration () {

   
    let startTime = new Date();
    sampleData.forEach(element => console.log(Object.values(element)))
    let endTime = new Date();
    let forEachDuration = (endTime - startTime); 

    // // results :
    console.log(`Iterating through the object using a for each loop, took ${forEachDuration} milliseconds`)
    
}



function testForInDuration() {
    let startTime = new Date();
    for (const index in sampleData){
        console.log(Object.values(sampleData[index]))
    }
    let endTime = new Date();
    let forInDuration = (endTime - startTime);
    
    console.log(`Iterating through the object using a for..in loop took ${forInDuration} milliseconds`)

}

function testForOfDuration() {
    let startTime = new Date();
    for (const element of sampleData){
        console.log(Object.values(element))
    }
    let endTime = new Date();
    let forOfDuration = (endTime - startTime);

    console.log(`Iterating through the object using a for..of loop took ${forOfDuration} milliseconds`)

}

function testWhileDuration() {
    let startTime = new Date();
    let i = 0
    while(i < sampleData.length) {
        console.log(Object.values(sampleData[i]))
        i++
    }
    let endTime = new Date();
    let whileDuration = (endTime - startTime);

    console.log(`Iterating through the object using a while loop took ${whileDuration} milliseconds`)

}


function testDoWhileDuration() {
    let startTime = new Date();
    let i = 0;
    do {
        console.log(Object.values(sampleData[i]))
        i++
    } while (sampleData.length > i)
    let endTime = new Date();
    let doWhileDuration = (endTime - startTime);


    console.log(`Iterating through the object using a do...while loop took ${doWhileDuration} milliseconds`)
}




testForDuration()
testForEachDuration();
testForInDuration()
testForOfDuration()
testWhileDuration()
testDoWhileDuration()





// Pre-declaring variables for cleanliness:
// let startTime = new Date();
// let endTime = new Date();
// // let forDuration = ; 


// let forEachDuration = null; 
// let forInDuration = null;  
// let forOfDuration = null; 
// let whileDuration = null; 
// let doWhileDuration = null; 




// module.exports = {
//     forDuration, 
//     forEachDuration, 
//     forInDuration, 
//     forOfDuration, 
//     whileDuration, 
//     doWhileDuration
// }

