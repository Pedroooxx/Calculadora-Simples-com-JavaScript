function addZero(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "0";
} 
function addUm(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "1";
}
function addDois(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "2";
}
function addTres(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "3";
}
function addQuatro(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "4";
}
function addCinco(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "5";
}
function addSeis(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "6";
}
function addSete(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "7";
}
function addOito(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "8";
}
function addNove(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + "9";
}
function addVirgula(){
    document.getElementById("visorContent").textContent = document.getElementById("visorContent").textContent + ".";
}

function operacao(op){
var num1 = Number(document.getElementById("visorContent").textContent);
document.getElementById("visorOperation").textContent = num1;
document.getElementById("num1").textContent = num1;
document.getElementById("visorContent").textContent = "";

if(op == 1){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + " + ";
    document.getElementById("op").textContent = 1;
}
if(op == 2){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + " - ";
    document.getElementById("op").textContent = 2;
}
if(op == 3){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + " * ";
    document.getElementById("op").textContent = 3;
}
if(op == 4){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + " ÷ ";
    document.getElementById("op").textContent = 4;
}
}

function calcular(){
let op = document.getElementById("op").textContent
let num1 = document.getElementById("num1").textContent;
let num2 = document.getElementById("visorContent").textContent;
let res;
if(op == 1){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + num2;
    res = Number(num1) + Number(num2);
    document.getElementById("visorContent").textContent = res;
}
if(op == 2){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + num2;
    res = Number(num1) - Number(num2);
    document.getElementById("visorContent").textContent = res;
}
if(op == 3){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + num2;
    res = Number(num1) * Number(num2);
    document.getElementById("visorContent").textContent = res;
}
if(op == 4){
    document.getElementById("visorOperation").textContent = document.getElementById("visorOperation").textContent + num2;
    res = Number(num1) / Number(num2);
    document.getElementById("visorContent").textContent = res;
}
}

function limparTudo(){
document.getElementById("visorOperation").textContent = "";
document.getElementById("visorContent").textContent = "";
}