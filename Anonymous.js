
//Anonymous functin using variable 
var fun1= function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
    
}
fun1([1,2,3,4,5,6])

console.log("printing odd number in an array using  arrow function")
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }
oddNumbers([2,3,4,5,6,7,])

console.log("printing sum of a array using Anonymous function")
var fun2=function (arr){
    var sum=0;
for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
}
fun2([2,3,4]);


console.log("printing sum of a array using Arrow function")
fun2=(arr)=>{
    var sum=0;
for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
}
fun2([2,3,4]);
console.log("Convert all the strings to title caps in a string array using Anonymous function")
let Cap=function(str){
for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  console.log(str); 
}
Cap([ 'hello', 'world' ]);


console.log("Convert all the strings to title caps in a string array using Arrow function")

Cap=(str)=>{
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      } 
      console.log(str); 
    }
    Cap([ 'hi', 'arjun' ]);

console.log('prime number in an array')
    let prime =function(numArray){
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray);
    }
    prime([2,3,4,12,11,7])


    console.log('prime number in an array using arrow function')
    prim =(numArray)=>{
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray);
    }
    prim([2,3,4,12,11,7])
    console.log('Palindrome in a array using Anonymous function')
    var findAllPalindromes = function(arr) {
        var palindromes = [];
        
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i].toLowerCase().replace(/[^a-z0-9]/g, '');
            
            if (str === str.split('').reverse().join('')) {
                palindromes.push(arr[i]);
            }
        }
        
        console.log( palindromes);
    };
     findAllPalindromes(["Ram", "level", "hello", "Arjun", "madam"]);


     console.log('Palindrome in a array using Arrow function')
     findAllPalindromes =(arr) =>{
        var palindromes = [];
        
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i].toLowerCase().replace(/[^a-z0-9]/g, '');
            
            if (str === str.split('').reverse().join('')) {
                palindromes.push(arr[i]);
            }
        }
        
        console.log( palindromes);
    };
     findAllPalindromes(["Ram", "level", "hello", "Arjun", "madam"]);

     console.log("Return median of two sorted arrays of the same size.");

     var findMedianSortedArrays = function(nums1, nums2) {
        var mergedArray = nums1.concat(nums2);
        mergedArray.sort((a, b) => a - b);
    
        var length = mergedArray.length;
        if (length % 2 === 0) {
            return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
        } else {
            return mergedArray[Math.floor(length / 2)];
        }
    };

    var nums1 = [1, 3, 5,9,5];
    var nums2 = [2, 4, 6,8,4];
    
    console.log("Median:", findMedianSortedArrays(nums1, nums2));

    console.log("Return median of two sorted arrays of the same size. using IIFS");
    var median = (function(nums1, nums2) {
        var mergedArray = nums1.concat(nums2);
        mergedArray.sort((a, b) => a - b);
    
        var length = mergedArray.length;
        if (length % 2 === 0) {
            return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
        } else {
            return mergedArray[Math.floor(length / 2)];
        }
    })([1, 3, 5], [2, 4, 6]);
    
    console.log("Median:", median);


    var removeDuplicates = function(nums) {
        return nums.filter((value, index, array) => array.indexOf(value) === index);
    };

    var nums = [1, 2, 2, 3, 4, 4, 5];
    
    var uniqueNums = removeDuplicates(nums);
    console.log("Array with duplicates:", nums);
    console.log("Array without duplicates:", uniqueNums);


    var uniqueArray = (function(nums) {
        return nums.filter((value, index, array) => array.indexOf(value) === index);
    })([1, 2, 2, 3, 4, 4, 5]);
    
    console.log("Array without duplicates:", uniqueArray);




    var rotateArray = function(nums, k) {
        var length = nums.length;
        k = k % length;
        for (var i = 0; i < k; i++) {
            var lastElement = nums.pop();
            nums.unshift(lastElement);
        }
    
        return nums;
    };
    
    var nums = [1,2,3,4,5];
    var k = 3; 
    
    console.log("Original array:", nums);
    console.log("Rotated array:", rotateArray(nums, k));


    var rotatedArray = (function(nums, k) {
        var length = nums.length;
        k = k % length;
        for (var i = 0; i < k; i++) {
            var lastElement = nums.pop();
            nums.unshift(lastElement);
        }
    
        return nums;
    })([8,9,5,6,7], 2);
    
    console.log("Rotated array:", rotatedArray);
    
    
    
    
    
    


    

    