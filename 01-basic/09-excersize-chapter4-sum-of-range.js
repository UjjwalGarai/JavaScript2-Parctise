function range(startNum, endNum, step = 1) {
  if (startNum < endNum) {
    let arr = [];
    let startIndex = 0;
    const interval = endNum - startNum;
    while (startIndex <= interval) {
      arr.push(startIndex + startNum);
      startIndex += step;
    }
    return arr;
  } else {
    return "Please enter valid number to get the list";
  }
}

// console.log(range(1, 10, 2))

function range2(start, end, step = start < end ? 1 : -1) {
  const arr = [];
  if (step < 0) {
    console.log("Hi");
    for (let i = start; i >= end; i += step) arr.push(i);
  } else {
    for (let i = start; i <= end; i += step) arr.push(i);
  }

  return arr;
}
console.log(range2(10, 16, 2));

function sum(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

// console.log(sum(range(1, 10)))
