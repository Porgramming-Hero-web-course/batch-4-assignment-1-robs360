type Sum = (arr: number[]) => number;

const sumArray: Sum = (arr) => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const res=sumArray([1,5,9,0])


