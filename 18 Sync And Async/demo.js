const random = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(random());
let intervalId;
const startchangingcolor = function(){
    intervalId = setInterval(changeColor,1000);
    function changeColor(){
    document.body.style.backgroundColor = random();
}
}
const stopchangingcolor = function(){
    intervalId = null;
}

document.querySelector("#start").addEventListener("click",startchangingcolor);
document.querySelector("#stop").addEventListener("click",stopchangingcolor);

