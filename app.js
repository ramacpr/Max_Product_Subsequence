maxProductSubSequence([6, 7, 8, 1, 2, 3, 9, 10])
maxProductSubSequence([3, 4, 2, 1])

function maxProductSubSequence(inputArr){
    // 1. Sort the input array and store in seperate memory, 
    // Time: O(nLgn), Space: O(n)
    let sortedInputArr = [...inputArr]
    console.log('input: ' + inputArr)
    Sort(sortedInputArr)

    // 2. result is the product of the 3 largest numbers 
    // in the sorted array 
    let lastIndex = sortedInputArr.length - 1
    let result = sortedInputArr.slice(lastIndex - 2)
    let product = sortedInputArr[lastIndex]
    product *= sortedInputArr[lastIndex - 1]
    product *= sortedInputArr[lastIndex - 2]

    // Complexities (overall):
    // Time: O(n*Lg n), Space: O(1)
    console.log("Result:" + result + ', Product: ' + product)
}


function Sort(inputArr){
    MergeSort(inputArr, 0, inputArr.length - 1)
}

function MergeSort(inputArr, startIndex, endIndex){
    if(startIndex < endIndex){
        let midIndex = Math.trunc((startIndex + endIndex) / 2)
        MergeSort(inputArr, startIndex, midIndex)
        MergeSort(inputArr, midIndex + 1, endIndex)
        Merge(inputArr, startIndex, midIndex, endIndex)
    }
}

function Merge(inputArr, startIndex, midIndex, endIndex){
    let subArr1 = new Array(midIndex - startIndex + 1)
    let subArr2 = new Array(endIndex - (midIndex + 1) + 1)

    // 1. copy contents to new array 
    let index = 0
    for(let j = startIndex; j <= midIndex; j++){
        subArr1[index++] = inputArr[j]
    }
    index = 0
    for(let j = midIndex + 1; j <= endIndex; j++){
        subArr2[index++] = inputArr[j]
    }

    // 2. Sorted merge
    let arrIndex = startIndex
    let sa1Index = 0, sa2Index = 0
    while(sa1Index < subArr1.length && 
        sa2Index < subArr2.length && 
        arrIndex <= endIndex){
            if(subArr1[sa1Index] < subArr2[sa2Index]){
                inputArr[arrIndex++] = subArr1[sa1Index++]
            } else{
                inputArr[arrIndex++] = subArr2[sa2Index++]
            }
        }
    
    // 3. if there are any remaining items in one of the sub arrays
    // just put them in that order in inputArr
    while(sa1Index < subArr1.length){
        inputArr[arrIndex++] = subArr1[sa1Index++]
    }
    while(sa2Index < subArr2.length){
        inputArr[arrIndex++] = subArr2[sa2Index++]
    }
}