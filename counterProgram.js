let count = 0;

document.getElementById("headerNumber").textContent = count;

document.getElementById("incrementBtn").onclick = function(){
    count++;
    document.getElementById("headerNumber").textContent = count;
}

document.getElementById("decrementBtn").onclick = function(){
    count--;
    document.getElementById("headerNumber").textContent = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("headerNumber").textContent = count;
}
