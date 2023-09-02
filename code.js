// var text = +"10"
// console.log(typeof(text))
// var candies = {
//     chocolate: 10,
//     lollipops: null,
//     sourStrips: undefined,
//     jellyBeans: 8,
//     licorice: null

// }
// var Hi = "gummyBears";
// console.log(candies.lollipops ?? Hi );
// new task
// var Restaurant = {
//     meat: 2,
//     chick: 3,
// }
// function Mohamed (name, age){
//     if (age >= 20){
//         console.log(`Age: ${age} : ${"sandwich.meat"}`);
//     } else {
//         console.log(`Age: ${age} : ${"sandwich.chicken"}`);
//     }
// }
// Mohamed("moody", 20)
// Mohamed("Ali", 18)

// new task

function calculate (num1, num2, method){
    if (method === "sum"){
        var result = num1 + num2;
        console.log(result);
    } else if (method === "sub"){
        var result2 = num1 - num2;
        console.log(result2);
    } else if (method === "multi"){
        var result3 = num1 * num2;
        console.log(result3);
    } else if (method === "division"){
        var result4 = num1 / num2;
        console.log(result4);
    } else {
        console.log("Unknown Method, Try Again");
    }
}

calculate (1,2, "sum")
calculate (1,2, "sub")
calculate (1,2, "multi")
calculate (1,2, "division")
calculate (1,2, "frhygrhf")


// search task 
// 1- Switch 
let day = 2;
let dayName = "";
switch (day){
    case 1:
    dayName = 'الاحد';
    break;
    case 2:
    dayName = 'الاثنين';
    break;
    case 3:
    dayName = 'الثلاثاء';
    break;
    case 4:
    dayName = 'الاربعاء';
    break;
    case 5:
    dayName = 'الخميس';
    break;
    case 6:
    dayName = 'الجمعة';
    break;
    case 7:
    dayName = 'السبت';
    break;
}
console.log(dayName);

