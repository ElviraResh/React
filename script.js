// let obj = {
//   name: "Игорь",
//   colors: {
//     first: "yellow",
//     second: "blue"
//   },
//   color: [
//     "black",
//     "white",
//     "red",
//     "blue"
//   ]
// }

// // document.write(obj.colors.first);
// // document.write(obj.color[1]);
// let mas2 = Object.keys(obj.colors).map(function(elem){
//   return elem + ": " + obj.colors[elem];
// });
// document.write(mas2 + "<br>");
// let mas = obj.color.map(function(){
//   return "color:" + elem;
// })

// let mas = obj.color.map(function(elem, index, all){
//   return elem + " " + index + "Массив" + all;
// })
// let mas1 = obj.color.map(elem => elem.toUpperCase());

// document.write(mas + "<br>");
// document.write(mas1 + "<br>");

// let fil = obj.color.filter(function(elem){
//   return elem.length<5
// })

// document.write(fil + "<br>");

let user = {
  login: {
    firstName: 'Kate',
    lastName: 'Pavlova'
  },
  passw: 'qwerty',
  role: 'guest'
}

let {login: {firstName: f, lastName}, passw, role} = user;
let {login: {firstName: f, lastName}, ...rest} = user;
document.write(login + ' ' + passw + ' ' + role);
document.write(f + ' ' + passw + ' ' + role);
document.write(f + ' ' + rest.passw + ' ' + rest.role);