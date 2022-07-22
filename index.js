// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// let totalBatteries = 0

// batteryBatches.reduce(function(totalBatteries, currentValue) {
//     return totalBatteries + currentValue
// })


// function totalBatteries(array){
//     const total = array.reduce(function(accumulator, currentValue){
//        return accumulator + currentValue
//     }, 0)
//     return total
// };

// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;

// const totalBatteries = batteryBatches.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   totalBatteries
// );

// console.log(totalBatteries);


const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
  
  function totalBatteries(batteries) {
    let total = 0;
  
    for (const battery of batteries) {
      total += battery;
    };
  
    return total;
  }
  
  console.log(totalBatteries(batteries));