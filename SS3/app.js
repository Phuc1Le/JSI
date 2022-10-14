let arr1 = [1,2,4,5,6];
let arr2 = [1,6,8,9,0];
console.log(arr1.filter(item => arr2.includes(item, 0)).join(" "));
let arr3 = [1,54,6,7];
let newarr = arr3.map(item => item + 5);
console.log(newarr.join(" "))
let m = [1,2,4,5,6,7];
let n = [3,5,675,8,96];
function myFuntion(item){
    return item!=1 && item!=8 && item!=10 && item!=96 && item!=7;
}
let newarrm = m.filter(myFuntion);
let newarrn = n.filter(myFuntion);
console.log(newarrm.concat(newarrn));
