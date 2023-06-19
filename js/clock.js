let myName = prompt("Lütfen Bir isim girin");
let name = document.getElementById("myName"); 
name.innerHTML = myName;


function showTime() {
    let myClock = document.getElementById("myClock"); 
    let now = new Date(); 
    let day = now.getDate(); 
    let month = now.getMonth() + 1; 
    let year = now.getFullYear(); 
    let hour = now.getHours(); 
    let minute = now.getMinutes(); 
    let second = now.getSeconds();

let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
myClock.innerHTML = time 
setTimeout(showTime, 1000);
}
showTime();