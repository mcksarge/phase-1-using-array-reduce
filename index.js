const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator, currentTotal, init) => {
    let total = init;
    total = accumulator += currentTotal;
    return total;
})

console.log(totalBatteries)

/*
function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    };
    return accum;
}*/