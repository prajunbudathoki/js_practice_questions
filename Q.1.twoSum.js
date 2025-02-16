// ----------------------LeetCode Problems 1 (two sum)-------------------------
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const numArr = [1,2,3,4,5]
const target = 3

function checkSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j = i+1; j<arr.length; j++ ){
            if(arr[i] + arr[j] === target){
                console.log(`Indices: ${i}, ${j} || Values: ${arr[i]}, ${arr[j]}`)
            }
        }
    }
    return `Target: ${target}`
}

const num = checkSum(numArr,4)
console.log(num)




