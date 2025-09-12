//Ex1
function capitalizeWords(str) {
  return str
    .trim()
    .split(/\s+/) 
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

let str = "the quick brown fox";
console.log(capitalizeWords(str));  

//Ex2
function max(a, b, c) {
  return Math.max(a, b, c);
}

console.log(max(1, 0, 1));       // 1
console.log(max(0, -10, -20));   // 0
console.log(max(1000, 510, 440)); // 1000

//Ex3
function right(str){
    if(str.length < 3){
        return str;
    }else{
        return str.slice(-3)+str.slice(0, -3);
    }
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//Ex4
function angle_Type(angle){
    if(angle > 0 && angle < 90){
        return "Acute angle";
    }
    else if(angle === 90){
        return "Right angle";
    }else if(angle > 90 && angle < 180){
        return "Obtuse angle";
    }else if(angle === 180){
        return "Straight angle";
    }else{
        return "Invalid angle";
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));

//Ex5
function array_max_sum(arr, n) {
    if (n > arr.length || n <= 0) {
        return null; 
    }
  
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
  
    let currentSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - n];
        maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
