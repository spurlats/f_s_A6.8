
let  persant = 0;

let button1 = document.querySelector("#per1");

let button3 = document.querySelector("#per3");

let button7 = document.querySelector("#per7");

let button_empty = document.querySelector("#empty");



button1.addEventListener('click', sum1);
function sum1() {
    persant = persant+1;
    $("#my-progress-bar").width(persant + "%")
}

button3.addEventListener('click', sum3);
function sum3() {
    persant = persant+3;
    $("#my-progress-bar").width(persant + "%")
}

button7.addEventListener('click', sum7);
function sum7() {
    persant = persant+7;
    $("#my-progress-bar").width(persant + "%")
}

button_empty.addEventListener('click', sum_empty);
function sum_empty() {
    persant = 0;
    $("#my-progress-bar").width(persant + "%")
}
