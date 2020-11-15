//alert('Tee');
//let age = 20;
//alert('AGE = '+age);
//console.log("Hello Tee")

//let x ;
//let y = 5 ;
//let z ;
//x = 10 ;
//z =x+y ;
//console.log(z);

//let x =10;
//let z = "5";
//แปลงตัวอักษรเป็นตัวเลข
//let y = Number(z);
//แปลงเป็นตัวเลข
//let v = String(z);
//console.log(x+y+v)

//let p = true
//let q = false
//let a1 = p && q; //และand //false
//let a2 = p || q; //หรือor //true
//let a3 = !p; //not //false

//let score = 69;
//if(score >= 80){
//    console.log("Grade A");
//}
//else if(score >= 70){
//    console.log("Grade B")
//}
//else{
//    console.log("Grade F")
//}

//for(let i =1; i<=15; i++){
    //if(i%2 === 0){
    //    continue;
    //}
//    if(i%10 === 0){
//        break;
//    }
//    let answer = i **2;
//    console.log(+i+"power2 =" +answer);
//}

//function getPyramidArea(length,width,height){
    //let length = 2;
    //let width = 3;
    //let height = 4;
//    let base = length * width;
//    let pyramidVolume = 1/3 * base * height
//    return pyramidVolume
//}
//let area1 = getPyramidArea(2,3,4);
//let area2 = getPyramidArea(4,5,6);
//console.log("Area1 ="+area1)
//console.log("Area2 ="+area2)

//ON WEBSITE

let content1 = document.getElementById('content-1');
let texthtml = "<b> Hello </b>";
content1.innerHTML = texthtml;

let discountbutton = document.getElementById("discount-button")
let message = document.getElementById("message");

function showMessage(){
    message.innerHTML = 'Time out'
}

discountbutton.addEventListener('click',showMessage);

//Arrowfunction
function say1(){
//    console.log('Hello')
}
let say2 = () => {
//    console.log('Tee')
}
say1();
say2();

let saybutton = document.getElementById('say-button')
//function say3(){
//    console.log("Hello Tee");
//}
saybutton.addEventListener('click',() => {
//    console.log("Hello Tee");
});

//Array
let fruits = ['Apple','Banna','Orange']
//fruits[1] = "Watermelon";
//console.log(fruits);
//unshiftเพิ่มด้านขวา,shiftลดด้านขวา  pushเพื่มด้านซ้าย,popลดด้านซ้าย
fruits.push('Water')
//console.log(fruits);
fruits.pop();
//console.log(fruits);
//splice(ตำแหน่ง,จำนวนที่ต้องการลบ,ข้อมูลที่จะใส่เพิ่ม)
//add
fruits.splice(1,0,"World")
//console.log(fruits)
//delete
fruits.splice(1,1)
//console.log(fruits)
//console.log(fruits.length);

//Array x loop
let score = [10,20,30,40,50,60,70];
let passedCount = 0; 
// for(let i =0; i < score.length; i++){
//     if(score[i] >= 50){
//         passedCount++;
//     }
// }
score.forEach((score) => {
    if(score >= 50){
        passedCount++
    }
})
// console.log(passedCount)

//Array map filter reduce
let scores = [10,20,30,40,50,60,70];
let passfailscore = scores.map((score) => {
    if (score >= 50){
        return 'passed'
    }
    return 'fail'
})
// console.log(scores);
// console.log(passfailscore);
let passScore = scores.filter((score) => {
    return score >= 50;
});
// console.log(scores);
// console.log(passScore);
let sumScores = scores.reduce((sum,score) => {
    return score+sum;
});
// console.log(scores);
// console.log(sumScores);

//Array find findindex every some  ใช้ตรวจสอบข้อมูลในarray
let scoress = [80,70,10,20,30,40,50,60,70];
//หาข้อมูลตัวเเรกที่ตรงเงื่อนไข
let failesScore = scoress.find((score) => {
    return score < 50;
})
//ตำแหน่งของข้อมูลตัวแรกที่ตรงเงื่อนไข
// console.log(failesScore);
let failesScoree = scoress.findIndex((score) => {
    return score < 50;
})
// console.log(failesScoree);
//checkทุกคนว่าตรงหรือไม่ตรงคืนค่า true or false
let everyonePassed = scoress.every((score) => {
    return score >= 50;
});
// console.log(everyonePassed)
//checkแค่บางตัวถ้ามีตัวที่ตรงเงื่อนไขก็จะ true ถ้าไม่ตรงสักตัวถึงจะ false
let someonePassed = scoress.some((score) => {
    return score >= 50;
});
// console.log(someonePassed);

//Object
// let rabbits = [
//     {
//         name : "Min",
//         breed : "Lion",
//         color : "Black",
//         weight : 1.2
//     },
//     {
//         name : "Elect",
//         breed : "Gorila",
//         color : "white",
//         weight : 1.7
//     }
// ]
// console.log(rabbits)
// rabbits.forEach((rabbit) =>{
//     console.log(rabbit.name + ',' + rabbit.color)
// })
// let rabbit = {
//     name : "Min",
//     breed : "Lion",
//     color : "Black",
//     weight : 1.2
// };
// console.log(rabbit);
// console.log(rabbit.name);
// rabbit.name = "TT";
// console.log(rabbit);
// console.log(rabbit.name);

//Object method
// let rabbit = {
//     name : "Min",
//     breed : "Lion",
//     color : "Black",
//     weight : 2.5,
//     talk(){
//         console.log(this.name+', Oung');
//     },
//     weightDetail(){
//         if(this.weight < 1){
//             return "Thin";
//         }
//         else if(this.weight >2){
//             return "Fat";
//         }
//         return "Good";
//     }
// };
// console.log(rabbit.weightDetail());

//object constuctor
function Rabbit(name,breed,color,weight){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.weight = weight;
    //method
    this.talk = function(){
        console.log(this.name + " Oung Oung")
    }
}
let rabbit1 = new Rabbit('Min','Lion','Black',2.8);
// let rabbit1 = {
//     name : "Min",
//     breed : "Lion",
//     color : "Black",
//     weight : 2.8
// };
let rabbit2 = new Rabbit("Mo","Electric","Yellow",1.2)
// rabbit1.talk();
// rabbit2.talk();
// console.log(rabbit1);
// console.log(rabbit2);

//var let const
//let ตัวแปรที่ปรับค่าได้ สามารถจำกัดพท.ของตัวแปรได้ให้อยู่ใน{}
//const ตัวแปรที่เปลี่ยนค่าไม่ได้
//var ทำให้ทุกตัววแปลเป็น Gobal

//setTimeout setInterval
let randomArray = ["<b> Hello </b>","<b> My </b>","<b> Master </b>"]
let randomButton = document.getElementById('random-button');
let output = document.getElementById('output');
//TIME DELAY
// randomButton.addEventListener('click',() => {
//     // console.log(1);
//     setTimeout(() => {
//         // console.log(2);
//         let n = randomArray.length;
//         let index = Math.floor(Math.random() *n);
//         let random = randomArray[index];
//         output.innerHTML = random;
//     },3000)
//     // console.log(3);
// })
let stopbutton = document.getElementById('stop-button')
let timeoutID = 0;
randomButton.addEventListener('click',() => {
    // console.log(1);
    timeoutID = setInterval(() => {
        // console.log(2);
        let n = randomArray.length;
        let index = Math.floor(Math.random() *n);
        let random = randomArray[index];
        output.innerHTML = random;
    },1000)
    // console.log(3);
});
//clearTimeout clearInterval
stopbutton.addEventListener('click',() => {
    clearInterval(timeoutID);
});

