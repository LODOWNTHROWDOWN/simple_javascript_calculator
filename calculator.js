function welcome() {
    alert("Welcome!");
    let person = prompt("Please enter your name", "");
    if (person != null) {
        alert("Welcome " + person + "!")
    }
    addNumbers();
}

function addNumbers() {
    let numbers = prompt("Please enter a list of numbers (positive and negative numbers are allowed). Separate the numbers with a comma.", "");
    if (numbers != null) {
        let array = numbers.split(",")
        let newArray = array.map(function(str){
            return parseInt(str);
        })
        console.log(newArray);
        compare(newArray)
    }
}

function compare(arr) {
    let result = [];
    arr.forEach(function (item, index) {
        if ((arr[index] >= arr[index + 1]) || (arr[index + 1] === undefined)) {
            result.push(arr[index])
        }
    })
    console.log(result)

    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i]
    }

    alert("The sum of the numbers is: " + sum);
    if (sum > 50) {
        alert("That is a big number.");
    } else {
        alert("That is a small number.");
    }

    let answer = prompt("Would you like to continue adding numbers (yes or no)?");
    while (answer.toLowerCase() === "yes") {
        addNumbers();
    }
    alert("Thank you for using the JavaScript Calculator!");
}