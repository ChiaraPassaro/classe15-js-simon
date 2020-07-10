
var num;
// console.log(num);

setTimeout(function() {
  num = number();
  // console.log(num);
  print(num);

}, 2000);

print();

function print(num) {
  console.log(num);
}

function number() {
  return 10;
}
