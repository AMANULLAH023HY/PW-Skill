let pattern = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm;
function isValidLinkedIn(input){
    return pattern.test(input);
}
const url = "http://www.linkedin.com/in/aname";

if(isValidLinkedIn(url)){
    console.log(`${url} is a valid linkedin profile` );
}
else{
    console.log(`${url} is not a valid linkedin profile` );
}