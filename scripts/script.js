var login_of_admin = "darya.khr@gmail.com";
var password_of_admin = "courses123456";
var name = prompt("Введите логин:");
if (name == login_of_admin) {
  var password = prompt('Введите пароль:');
  if ( password == password_of_admin) {
    alert("Привет админ!");
  }else {
    alert("Неверный пароль");
  }
 } else {
  alert("Такого админа не существует.");
}


// var age= 18;
// if (age>=18) {
//   alert("собирайся на работу, чувак!");
// }else if ((age <=18) && (age >=12){
//   alert("Скоро!")
// }else if ((age < 12) &&((age >=5)) {
//   alert("Скоро в школу!")
// }
// else {
//   alert("Гуляй пока молодой!");
// }
