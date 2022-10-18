function pivot(arr,start,end){
    if(start == null){
        start =0;
    }else if(end == null){
        end=arr.length+1;
    }
    var pivot = arr[start];
    var currentIndex = start;
    for(var i=start+1; i<arr.length;i++){
        if (pivot > arr[i]){
            let temp;
            currentIndex++
            temp=arr[currentIndex]
            arr[currentIndex]=arr[i]
            arr[i]=temp
        }
    }
    let temp;
    temp = arr[start]
    arr[start]=arr[currentIndex]
    arr[currentIndex]=temp
    return currentIndex;
}

// console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr,left,right)
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr
}

console.log(quickSort([4,8,2,1,5,7,6,3]))