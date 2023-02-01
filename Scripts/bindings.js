var upward = document.getElementById("upward");
var downward = document.getElementById("downward");
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var right = document.getElementById("right");
var left = document.getElementById("left");
var config = document.getElementById("config");
var input = document.getElementById("input");

function saveValues() {
    var request = new XMLHttpRequest();
    request.open("GET", `http://127.0.0.1:5000/save?config=${config.value}&u=${upward.value}&d=${downward.value}&f=${forward.value}&b=${backward.value}&r=${right.value}&l=${left.value}`);
    request.send();
    request.addEventListener("load", function(){
        alert(request.response)
    })
    console.log("Saved");
}

function loadValues (){
    var request = new XMLHttpRequest();
    request.open("GET", `http://127.0.0.1:5000/load?config=${config.value}`);
    request.send();
    request.addEventListener("load", function(){
        if (request.status != 200){
            alert("An Error Has Occured!");
            return;
        }
        const response = JSON.parse(request.response);
        console.log(response);
        upward.value = response["up"];
        downward.value = response["down"];
        forward.value = response["forward"];
        backward.value = response["backward"];
        right.value = response["right"];
        left.value = response["left"];
    })
}

function getValues(){
    var config = document.getElementById("config");
    var input = document.getElementById("input");
    var request = new XMLHttpRequest();
    request.open("GET", `http://127.0.0.1:5000/load?config=${config.value}`);
    console.log("Pressed");
    request.send();
    request.addEventListener("load", function(){
        console.log("IN");
        if (request.status != 200){
            alert("An Error Has Occured!");
            return;
        }
        console.log(request.response);
        const response = JSON.parse(request.response);
        input.innerHTML = `{"up":"${response["up"]}","down":"${response["down"]}","forward":"${response["forward"]}","backward":"${response["backward"]}","right":"${response["right"]}","left":"${response["left"]}"}`;     
        input.value = `{"up":"${response["up"]}","down":"${response["down"]}","forward":"${response["forward"]}","backward":"${response["backward"]}","right":"${response["right"]}","left":"${response["left"]}"}`;     
    })
}