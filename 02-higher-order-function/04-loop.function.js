function loop(value, test, update, body){
    let current = value
    while(test(current)){
        body(current)
        current = update(current)
    }
}

loop(
  3,                        // 1. Starting value
  n => n > 0,               // 2. Test function: keep going while n > 0
  n => n - 1,               // 3. Update function: decrease n by 1
  console.log               // 4. Body function: print the value
);