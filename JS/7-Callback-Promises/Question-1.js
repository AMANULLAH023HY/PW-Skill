function doubleArray(arr,callback){
    const doubledArr = arr.map((num)=>{
        return callback(num);
    });
    return doubledArr;
}

const originalArray = [1,3,2,5,6];
function callback(num){
    return num * 2;
}
const doubledArray = doubleArray(originalArray,callback);
console.log(doubledArray);