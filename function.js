function square(number) {
    return number * number
}

function multiple (a,b){
    return a * b
}

console.log(square(4))
console.log(multiple(10,5))

function greeting(name){
    const hello = "Hello"

    return hello + " " + name
}
 console.log(greeting("Udin"))

//  default parameter
 function multiply(a, b =4) {
    return a * b
 }

 console.log(multiply(7))

//  rest parameter
function myFunc(a, b, ...etc){
    console.log("a", b)
    console.log("b", b)
    console.log("etc", etc)
}

myFunc("One", "two", "three", "four")

// nested function

function getMessage(firstName){
    function sayHello() {
        return "Hello" + firstName+ ".";
    }
    function welcomeMessage(){
        return "Welcome to Purwadhika!."
    }
    return sayHello() + " " + welcomeMessage();
}

const message = getMessage("Bambang");
console.log(message);