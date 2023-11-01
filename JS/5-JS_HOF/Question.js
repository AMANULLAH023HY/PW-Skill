let input = "This is PW-Skills Full Stack Web Development Cource";
console.log(input);

function reverseString(){
    let output = input.split(" ").reduce((acc, char) => char + acc, " " );
    console.log(output);
}
setTimeout(reverseString,2000);
