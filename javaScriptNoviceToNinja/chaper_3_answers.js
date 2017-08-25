/*Week 2 JavaScript Study Group Questions!
*******************************************************************
********************************************************************/


//1. Consider the following arrays:

 test1 = ["max", "Barbie", "Melanie"]
 test2 = ["Gillian", "Becca", "Lindsey"]
 test3 = ["max", "Barbie", "Melanie"]
 
// What are the expected Boolean results for the following scenarios:
 

test1 == test2

false

test1 == test3
 
false

test1 == test1

true

Each onject is a unique instance so even if the arrays have the same contents they will not return a true comparison.  

//Explain why the last 2 scenarios do not produce the same result.
// *******************************************************************
// *******************************************************************


// 2. While vs Do-While
// Consider the initial data setup. How do these two loops differ?
 
 var counter = 5
 var factorial = 1
 
 while(counter-- > 1)
    factorial *= counter
    
do {
    factorial *= counter
}
while(counter-- > 1)
    
  

In the first loop the condition is checked before entering the code block so there is the possibility that the code block will never be run. In the second loop the code block is executed before checking the condition. 

/********************************************************************
*******************************************************************/
/*3. Given an array of N integers, whose values range from 1 to N,
write a program that determines whether there is a duplicate
integer.*/

// Did not come up with this on my own, remembered from a class I had before

var i;
var j;

var findDuplicates = function(array) {
    // loop through each element of array
    for (i = 0; i<array.length; i++){
        // loop through each element of array starting at i
        for(j = i; j <= array.length; j++){
            // compare current i element with each j element, return duplicate statement if ith element matches jth element
            if(i != j && array[i] == array[j]){
                console.log(array[i] + " is a duplicate.")
            }
        }
    }
}

    
/*4. Using the tools covered in this chapter, write a program that
converts a given positive integer, and generates its binary
equivalent. For example
Input = 5
Output = 101
You can either construct the output as a string or as an array.*/
  


var convertInt = funtion(integer){
    if(integer%2 == 0){
        
    }
    
}