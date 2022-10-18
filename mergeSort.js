function merge(arr1, arr2){
    var sorted = []
    var i = 0
    var j = 0
    while(i < arr1.length && j < arr2.length){
        if (arr1[i]<arr2[j]){
            sorted.push(arr1[i])
            i++
        }else {
            sorted.push(arr2[j])
            j++
        }
        if(i >= arr1.length){
            while(j<arr2.length){
                sorted.push(arr2[j])
                j++
            }
        } else if(j >= arr2.length) {
            while(i<arr1.length){
                sorted.push(arr2[i])
                i++
            }
        }
    }
    return sorted
}

// var array1 = [1,10,50]
// var array2 = [2,14,99,100]

// console.log(merge(array1,array2))

function mergeSort(array){
    if (array.length <= 1){
        return array
    }
    var array1 = mergeSort(array.slice(0,Math.floor(array.length/2)))
    var array2 = mergeSort(array.slice(Math.floor(array.length/2),array.length))
    return merge(array1,array2)
}

console.log(mergeSort([2,6,7,11,15,22,19,28]))