
 ` function calculate (num1, num2, method){
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
 `