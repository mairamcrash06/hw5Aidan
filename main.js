
const nums = [2, 11, 31, 110, 43, 113]
const processedNums = []

function functionWithMathAction(num) {
    return num *= 2
}

function multiplyByTwo (array, functionWithMathAction) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const processedElement = functionWithMathAction(element)
        processedNums.push(processedElement)
    }
}

multiplyByTwo(nums, functionWithMathAction)

console.log(processedNums + " processed");