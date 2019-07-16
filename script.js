let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; //[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
let array2 = [1, 5, "5", 2, "2", 3, "3", 2, "5", 1];

let groupedArray = cleanArray(array);
let groupedArray2 = cleanArray(array2);


function cleanArray(arr) {
    let groupedArray = [[],[]];//grouped array by strings and numbers if it's needed
    
    for( num of arr) {
        if(typeof(num) === 'number'){
            groupedArray[0].push(num);
        } else if(typeof(num) === 'string' && !isNaN(num)){
            groupedArray[1].push(num);
        }
    }

    groupedArray = [groupArray(groupedArray[0]), groupArray(groupedArray[1])].filter((subarray) => subarray.length !== 0);
    
    return (groupedArray.length === 1)? groupedArray[0]: groupedArray;
}

function groupArray(arr) {
    arr.sort(( a, b ) => a - b);
    
    let sortedArray = [];//Array to return
    let equalValuesArray = [arr[0]];//subarray for repeated values
    let comparedValue = arr[0]; // the value of an item of equalValuesArray
    
    //We Start with the second element since we consider the first element with comparedValue 
    for(let i=1; i <= arr.length; i++) {
        if(arr[i] === comparedValue){
            equalValuesArray.push(arr[i])
        } else {
            if(equalValuesArray.length === 1) {
                sortedArray.push(comparedValue);
            } else {
                sortedArray.push(equalValuesArray);
            }
            equalValuesArray = [arr[i]];
            comparedValue = arr[i];
        }
    } 
    return sortedArray;
}