
// set
// console.log("Hello, World!");
// const newSet=new Set(['kuria','henry','kuria','wanjiru']);
// console.log(newSet)
// console.log(newSet.has('henry'));
// console.log(newSet.has('james'));
// console.log(newSet.delete('kuria'));
// console.log(newSet)
// console.log(newSet.add('john'));
// console.log(newSet)

// maps

// const restMap = new Map();
// restMap.set('name','New Restraunts');
// restMap.set(1, 'Nairobi Kenya');
// restMap.set(2, 'Thika Kenya');
// console.log(restMap.get('name'));
// const question = new Map([
//     ['question','Which is the best IDE for Coding?'],
//     [1,'VSCode'],
//     [2,'Pycharm'],
//     [3,'Notepad'],
//     [3,'Notepad++'],
//     ['correct', 3],
//     [true, 'correct'],
//     [false, "Try Again"],

// ]);

// console.log(question.get('question'))
// for(const [key,value] of question){
//     if(typeof key ==='number') console.log(`Answer ${key}:${value}`)
// }
// const userAnswer = Number(prompt(`What is your answer?`))
// console.log(userAnswer);

// console.log(question.get(question.get('correct')=== userAnswer))


// console.log(...question)



// Strings
const plane = "Quantus Air Bus A320"

console.log(plane.length)
console.log(plane.slice(5,7))
console.log(plane.slice(plane.lastIndexOf(' ')+1))


const middleSeat = function (seat){
    const s = seat.slice(-1)
    if (s === "E"|| s === "C")
        console.log("You got a middle seat😒");
    else
    console.log("You Got Lucky");

}

middleSeat("239E")
middleSeat("239A")
middleSeat("239C")

const string = "AM Coming today";
console.log(string.toLowerCase())
console.log(string.toUpperCase())

const priceUk = '235,95£';
const priceUs = priceUk.replace('£','/Ksh').replace(',','.')

console.log(priceUs);