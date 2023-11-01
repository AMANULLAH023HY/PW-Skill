 let pattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
function isValidURL (input){
    return pattern.test(input);
 }
 const url = "https://regexr.com/"

 if (isValidURL(url)){
    console.log(`${url} is a valid URL`);
 }else{
    console.log(`${url} is not a valid URL`);
}


