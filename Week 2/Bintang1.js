var bintang = ''

var rows1 = 5
for (var i = 0; i < rows1; i++){
  console.log('*')
}

console.log('<<<<<<<<<<<<<<=================>>>>>>>>>>>>')

var rows2 = 5
for (var i= 0; i < rows2; i++){
  var tampung = ''
  
  for (var j =0; j < rows2; j++) {
    tampung += '*'
  }
  console.log(tampung)
}

console.log('<<<<<<<<<<<<<<=================>>>>>>>>>>>>')

var rows3= 5
 
for (var i= 1; i <= rows3; i++){
var tampung = ''
  for (var j= 1; j <= i; j++){
     
    tampung += '*'
    
  }
  console.log(tampung)
}