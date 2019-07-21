let array = [20,1,2,4,591,390,391,5,2,10,2,1,-5,1,20,20];
let target = 40;

function findTarget(arr, target) {
    let nearest = Infinity;
    let pairNearestToTarget = [];//In case of no answer, return the added pair nearest to the target 
    let differenceToTargetArray = arr.map((num) => target - num);//array for find the difference to the target of each element 
    let solutions = arr.map((num, index) => {
        for (let i = index+1; i < arr.length; i++) {
            //check if current number is a solution for another number in the array
            if(num === differenceToTargetArray[i]) {
                nearest = 0;
                //return the pair of indexes of the elements that added are the target
                return [index, i];
            } 
            //check the nearest pair to target
            if(nearest !== 0) { 
                let difference = target - (num + (arr[i]));
                difference = (difference<0)? difference * -1 : difference;
                if(difference<nearest) {
                    nearest = difference;
                    pairNearestToTarget = [[index,i]];    
                }
            } else {
                break;
            }
        }
        return undefined;
    })

    if(nearest === 0 ){
        return solutions.filter((item) => item != undefined);
    } else {
        return pairNearestToTarget;
    }
}

let solutionArray = findTarget(array, target);//pairs of solutions

console.log("Conjunto solucion:", solutionArray);
let n1 = solutionArray[0][0];
let n2 = solutionArray[0][1];
console.log(`La suma del par de numeros mas cercana a ${target}:
${array[n1]}[${n1}] + ${array[n2]}[${n2}] = ${array[n1] + array[n2]}`);
console.log(array);
/*
console.log(`Soluciones mas cercanas a ${target}:`)
for (let i = 0; i < solutionArray.length; i++) {
    let n1 = solutionArray[i][0];
    let n2 = solutionArray[i][1];
    let result = `${i}. ${array[n1]}[${n1}] + ${array[n2]}[${n2}] = ${array[n1] + array[n2]}`;
    console.log(result);
}
console.log(array);
*/
 //for multiple solutions remove 'break' in function findTarget 

//Conjunto solucion: Array [[0, 14]]
//La suma del par de numeros mas cercana a 40:
// 20[0] + 20[14]
//[20,1,2,4,591,390,391,5,2,10,2,1,-5,1,20,20]