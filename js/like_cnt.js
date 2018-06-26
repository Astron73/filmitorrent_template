'use strict'
var negativ = 1810;
var positiv = 3257;
var res = "+1447";
var like_n = document.getElementById('like_n');
var like_res = document.getElementById('like_res');
var like_p = document.getElementById('like_p');

like_n.onclick = function (){
    negativ += 1;
    res = positiv - negativ;
    if(res > 0){
        like_res.innerHTML = "+" + res;
    } else {
        like_res.innerHTML = res;
    };
};
like_p.onclick = function (){
    positiv += 1;
    res = positiv - negativ;
    if(res > 0){
        like_res.innerHTML = "+" + res;
    } else {
        like_res.innerHTML = res;
    };
};
