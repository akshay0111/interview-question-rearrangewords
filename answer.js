var str = "the domestic dog is a domesticated form of wolf"; //"this is an impossible task";
var ar = Array.from(str);
console.log(ar);
 
var spaces = [];
 
for (var i = 0; i < ar.length; i++) {
  if (ar[i] == " ") {
    console.log(i);
    spaces.push(i);
  }
}
console.log(spaces);
 
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alpha_ar = Array.from(alpha);
console.log(alpha_ar);
 
var pos = [0];
for (var i = 0; i < spaces.length; i++) {
  pos.push(spaces[i] + 1);
}
console.log(pos);
 
var result = "";
for (var i = 0; i < alpha_ar.length; i++) {
  for (var j = 0; j < pos.length; j++) {
    if (alpha_ar[i] == ar[pos[j]]) {
      for (var k = pos[j]; k < ar.length; k++) {
        if (ar[k] != " ") {
          result = result + ar[k];
        } else {
          break;
        }
      }
      result += " ";
    }
  }
}
console.log(result);