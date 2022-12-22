// Called when the slidebar is changed
function changeSpeed(){
var slider = document.getElementById("speed-slider");
var speed_value = document.getElementById("speed-range-value");
var manual_speed = document.getElementById("speed-value");

speed_value.innerHTML = slider.value;
manual_speed.value = slider.value;
}

// Called when the number box is changed
function changeSpeedManually(){
    var slider = document.getElementById("speed-slider");
    var speed_value = document.getElementById("speed-range-value");
    var manual_speed = document.getElementById("speed-value");

    slider.value = manual_speed.value;
    speed_value.innerHTML = manual_speed.value;
}