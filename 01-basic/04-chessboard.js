const size = 20;
let symbol = "";

for(let y = 0; y < size; y++){
  for(let x= 0; x < size; x++){
    if((x + y) %2 == 0){
      symbol+=" "
      
    }else{
      symbol+="#"
    }
  }
  symbol+="\n"
  // console.log(symbol)
}
console.log(symbol)

