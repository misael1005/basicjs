// implícita

var a = 4 + "7"; // 47, string
var a = 4* "7"; // 28, number

//explicita

var a = 20; // 20, number
var b = 20 + ""; // 20, string
var c = String(a); // 20, string
var d = Number(c); // 20, number