'use strict';
// // function bmiCalculator (weight, height) {
// //     var bmi = weight / (height* height);
// //         bmi = Math.round(bmi)
// //     return bmi;
// // }

// // if(bmiCalculator(60,2) < 18.5){
// //     alert("Your BMI is " + bmi + " ,so you are underweight");
// // }

// // if (bmi >24.9){
// //     alert("Your BMI is " + bmi + " ,so you are overweight");
// // }

// // if (bmi === 18.5 && 24.9){
// //     alert("Your BMI is " + bmi + " ,so you are overweight");
// // }

// function bmiCalculator(weight, height) {

//     var interpretation = (weight / Math.pow (height,2));

//     if (interpretation <= 18.5) {

//         return  "Your BMI is "+interpretation+", so you are underweight." ;

//     }

//     else if (interpretation > 18.5 && interpretation <= 24.9){

//         return  "Your BMI is "+interpretation+", so you have a normal weight." ;

//     }

//     else if (interpretation > 24.9){

//         return  "Your BMI is "+interpretation+", so you are overweight." ;

//     }

//     return interpretation;

// }

// const age = 19;

// if(age >= 18){
//     console.log(`jisn can drive coz he is ${age} years old`)
// }else{
//     const jisn = 2021 - 2007;
//     console.log(`he is not capabel to drive ${jisn}`)
// }

// // const marksMass = 78;
// // const marksHeight = 1.78;
// // const marksBMI = marksMass / (marksHeight * marksHeight);

// // const jonsMass = 68;
// // const jonsHeight = 1.75;
// // const jonsBMI = marksMass / (jonsHeight * jonsHeight);

// // console.log(`this is marks BMI ${marksBMI},and this is jons BMI ${jonsBMI}`);

// // if(marksBMI >= jonsBMI){
// //     console.log(`marks is getter then jons`);
// // }else{
// //     console.log(`jon isn getter then mark `)
// }

// const dolphineScore = (96 + 108 + 89)/3;

// const dolphineTotalScore = dolphineScore;

// const kolasScore = (88 + 91 + 110)/3;

// const kolasTotalScore = kolasScore;

// console.log(dolphineTotalScore, kolasTotalScore)

// if(dolphineTotalScore > kolasTotalScore){
//     console.log(`Dolphine team is win the trophy the score is ${dolphineTotalScore} and losser tema get point ${kolasTotalScore}` )
// }else if(dolphineTotalScore === kolasTotalScore){
//     const drow = 100;
//     console.log(`every one get same value`);
// }else if(kolasTotalScore > dolphineTotalScore){
//     console.log('koalas winn the trophy');
// }

// function name(){
//     console.log("my name is jisn");
// }

// name();

// function codeHead(javscript ,java){
//     const fresh = `this case ${javscript} is javaScript and this case ${java} is java`;

//     return fresh;
// }
// console.log(codeHead(5**5,"javascript"))

// function diclaration
/* function tanvir(name , age){
   const about = `My name is ${name} and my age is ${2021 - age} years old`;
   return about;
}

console.log(tanvir(prompt("whats your name"), prompt("your birth Year")));*/

// function expration
/*
const tanvir = function (name,age){
    const hostName = `My name is ${name} and My age is ${2021-age} in this year`; 
    return hostName;
}
const all = tanvir("jishan",1994);
console.log(all);
*/

// Arrow Function

//single line array
/*
const birthday = year => 2021 - year;

console.log(`this is my birthday ${birthday('1994')}`);
*/

/*
//multiline arrow function
const tanvir = (name,year)=>{
    const age = 2037 -year ;
    const bday = `My name is ${name} and My age is ${age}`
    return(bday);
};

console.log(tanvir("jisn", 1994))
*/

// use function to another function
/*
function cutFruts (fruts){
   const prossece = fruts * 4; 
    return prossece;
}

function frutsProcessor(apple,orange){
    const frutsAppleCut = cutFruts(apple);

    const frutsOrangeCut = cutFruts(orange);

    const twicwProcess = `there cut of ${frutsAppleCut} picess apple and there cut of ${frutsOrangeCut} picess orange`;

    return twicwProcess;
}

console.log(frutsProcessor(3,5));*/
/*
//function challnge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;

let DolphinScore = calcAverage(44, 23, 71);

let KoalasScore = calcAverage(65, 54, 49);

console.log(DolphinScore, KoalasScore);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphine win the tophy ${avgDolphins} .vs ${avgKoalas} score`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the tophy ${avgKoalas} .vs ${avgDolphins} score`);
    } else {
        `No Team Winn The Trophy`;
    }
}

checkWinner(DolphinScore,KoalasScore);

checkWinner(100,500);

//test 2

DolphinScore = calcAverage(85,54,41);

KoalasScore = calcAverage(23,34,27);

console.log(DolphinScore,KoalasScore);

checkWinner(DolphinScore,KoalasScore);

*/
/*
// function project

const calcAverage = (a,b,c) => ((a+b+c)/3);

let DolpinScore = calcAverage(44,23,71);

let KolasScore = calcAverage(55,54,49);

function checkWinner (avgDolphine,avgKoalas){
    if(avgDolphine >= 2 * avgKoalas){
       const tj= console.log(`Dolphine Winn the trophy ${avgDolphine} .vs ${avgKoalas}`);
    }else if(avgKoalas >= 2 * avgDolphine){
        const tj =console.log(`Koala Winn the trophy ${avgKoalas} vs ${avgDolphine}`);
    }else{
        // console.log(`No one winn`);
    }
}
checkWinner(DolpinScore,KolasScore);

console.log(checkWinner(400,100));

DolpinScore = calcAverage(85,54,41);

KolasScore = calcAverage(23,34,27);


checkWinner(DolpinScore,KolasScore);
*/

// Array //2 type of array diclaration
/*
function someOneAge (name,birthYear,pesa){
    const age = 2021 - birthYear;
    const aboutMe = [name,age,pesa];
    return `My name is ${aboutMe[0]} and my age is ${aboutMe[1]} years old ,i am javascript ${aboutMe} `;
}

console.log(someOneAge("tj",2000,"programmer"));

const CalsTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

const bills = [125,555,44];

const tip = [CalsTip(bills[0]),CalsTip(bills[1]),CalsTip(bills[2])];

console.log(`yours bill is ${bills} and your tips is ${tip}`);
//method object
const jisn ={
    firstName : 'Tanvir',
    lastName : 'Jisn',
    birthYear : 1994,
    job : 'IT Administrator',
    friends : ['Joans','Brade','Ninja'],
    hasNidCard : true,

    calcAge : function(birthYear){
        const ageCal = 2021 - birthYear; 
        if(ageCal <= 17){
           console.log('you are to young');
        }else{
            console.log('you are adult');
        }
      return ageCal;
    }
};

console.log(`this is your birthday ${jisn['lastName']} and you are ${jisn['calcAge'](2017)} years old`);


const jonas ={
    firstName: 'jonas',
    lastName : 'shamman',
    job : 'teacher',
    birthYear : 1991,
    frineda : ['mike','bike','hike'],
    hasDrivingLicense : true,

    calcAge : function (birthYear){
        this.age = 2037 - birthYear;
        if(this.age >= 18 && this.hasDrivingLicense){
            console.log(`${this.firstName} is a ${this.age}  year old  ${this.job} and he has a drivrs license`);
        }else{
           console.log(`${this.firstName} is a ${this.age}year old ${this.job} and he has no a drivrs license`);
        }

        return this.age;
    }
    console.log(jonas.calcAge(1991));
};

// with tarnery oparetor
const jonas ={
    firstName: 'jonas',
    lastName : 'shamman',
    job : 'teacher',
    birthYear : 1991,
    frineda : ['mike','bike','hike'],
    hasDrivingLicense : false,

    calcAge :function (){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    summaryAge : function(){
        return `${this.firstName} is a ${this.calcAge()} -years old ${this.job} and he has ${this.hasDrivingLicense ? 'a' : 'no' } driving license`;
    }
    };
console.log(jonas.summaryAge());

//object practice

const tanvir ={
    firstName: 'Jishan',
    lastName : 'Tanvir',
    job : 'Programmer',
    birthYear : 1994,
    frineda : ['mike','bike','hike'],
    hasDrivingLicense : true,
calcAge : function(){
    this.age = 2021- this.birthYear;
    return this.age;
},

summaryAge : function (){
    return `${this.firstName} is ${this.calcAge()} -years old ${this.job} and he has  ${this.hasDrivingLicense ? 'a' : 'no'} driving licence for drive`;
}};

console.log(tanvir.summaryAge());

//object challange

const Mark = {
    name : 'Mark',
    mass : 78,
    height : 1.69,

    calcBmi : function (){
        return this.bmi = this.mass / this.height ** 2;
    }
},John = {
    name : 'John',
    mass : 92,
    height : 1.95,

    calcBmi : function (){
        return this.bmi = this.mass / this.height ** 2;
    },

    SummaryCal : function (){
        if(John.calcBmi() > Mark.calcBmi()){
            retutn `${John.name}'s BMI ${John.calcBmi()} is Higher then ${Mark.name}'s ${Mark.calcBmi()}`;
        }else{
            return `${Mark.name}'s BMI ${Mark.calcBmi()} is Higher then ${John.name}'s ${John.calcBmi()}`;
        }
    }
};
console.log(John.SummaryCal());
console.log(`this is Mark BMI ${Mark.calcBmi()}`);
console.log(`this is Mark BMI ${John.calcBmi()}`);
*/
/*
const mark = {
    name : 'Mark',
    mass : 78,
    height : 1.69,
    calcBmi : function (){
        return this.bmi = this.mass / this.height ** 2;
    }

};

const john = {
    name : 'John',
    mass : 92,
    height : 1.95,

    calcBmi : function (){
        return this.bmi = this.mass / this.height ** 2;
    }
};

mark.calcBmi();
john.calcBmi();

if(john.bmi > mark.bmi){
    console.log(`${john.name} BMI ${john.bmi} is Higher then ${mark.name} BMI ${mark.bmi}`);
}else if(mark.bmi > john.bmi){
    console.log(`${mark.name} BMI ${mark.bmi} is Higher then ${john.name} BMI ${john.bmi}`);
};*/

//For Loop
/*
for(let tj = 1; tj <= 10;tj++){
console.log(`incress every times ${tj}`);
}*/

// const Jisn = [
//    'jisn',
//     1991,
//     'teacher',
//     ["tj","ph","lj"],
//     true
// ];

// for (let i = 0; i < Jisn.length; i++){
//     console.log(Jisn[i]);
// }

// const year = [1991,1997,2007,2000];

// const age = [];

// for(let i = 0; i < year.length; i++){
//     age.push(2021 - year[i]);
// }

// console.log("age is define as " + " " +age);

//akta loop er moddhe ar akta loop
/*
for (let excersise = 1; excersise <=2; excersise++){
    console.log(`start the Excercise ${excersise}`);

    for(let channel =1; channel <=4; channel++){
        console.log(`start channel ${channel}`);
    }
};

let dice = 1;

while( dice < 6){
    console.log(`here is your code  ${dice}`)
    dice++
};

dice = 5;

while(dice <= 10){
    console.log(`here is your kick ${dice}`)
    dice++;
}*/

//while Loop

// let disk = Math.trunc(Math.random() * 10 )+1;

// while(disk !== 10 ){
//     console.log("Here is randome Number " + `${disk}`);

//     disk++;
// }
/*
const colcTip = function (bill) {
  return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
};
// console.log(colcTip(20,10,400))
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = colcTip(bills[i]);

  tips.push(tip);

  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
*/
// let x = "tow";
// let y = "three";
// let z = y;

// y = x;

// x= z;

// console.log(x);
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let DolpinScore = calcAverage(44, 23, 71);

let KolasScore = calcAverage(55, 54, 49);

function checkWinner(avgDolphine, avgKoalas) {
  if (avgDolphine >= 2 * avgKoalas) {
    const tj = console.log(
      `Dolphine Winn the trophy ${avgDolphine} .vs ${avgKoalas}`
    );
    return tj;
  } else if (avgKoalas >= 2 * avgDolphine) {
    const tj = console.log(
      `Koala Winn the trophy ${avgKoalas} vs ${avgDolphine}`
    );
    return tj;
  } else if (avgKoalas == avgDolphine) {
    const tj = console.log(`No One Wine`);
    return tj;
  }
}
checkWinner(DolpinScore, KolasScore);

checkWinner(100, 300);

DolpinScore = calcAverage(85, 54, 41);

KolasScore = calcAverage(23, 34, 27);
*/

// console.log(document.querySelector('h1').textContent);
