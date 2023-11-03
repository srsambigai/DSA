/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Problem UnderStanding:
nums = [2,7,11,5]
      i 0 1 2  3

target = 9

Expected Output : result=[0,1] //Assume each input has exactly one solution and no recurrece of elements.

Problem Validation


Algorithm
a. Create or Initialize array variable num and integer variable target.
b. Iterate the numbers array <= length
c. Check sum of any two numbers in the array is equal to target.
        d.  if true push the indices(indexes) to the result array.
*/

//Create or Initialize array variable num and integer variable target.
var num=[11,2,7,5];
var target=9;
var result=[];
//Iterate the numbers array <= length
for(let i=0;i<num.length;i++)
{
   // Check sum of any two numbers in the array is equal to target.
    num.forEach((numValue,j)=> {
    if((result.length==0) && (j!=i) && ((numValue+num[i])===target)){
         //if true push the indices(indexes) to the result array.
    result.push(i,j);
    }
});
}
console.log(result);


