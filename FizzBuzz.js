
for (i=1; i<100; i++){
  var word = '';
  if (i%3 == 0){
      word +="Fizz";
  }
  if (i%5 == 0){
     word += "Buzz";
  }
  if (word.length > 0){
    console.log(word);
  } else {
    console.log(i);
  }
}
