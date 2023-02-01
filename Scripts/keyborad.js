var response = document.getElementById("input");
var stat = document.getElementById("status");



class keyboard_controller{

    move_forward(){
        stat.innerHTML = "Status: Moving Forward";
    }

    move_backward(){
        stat.innerHTML = "Status: Moving Backward";
    }

    move_right(){
        stat.innerHTML = "Status: Moving Right";
    }

    move_left(){
        stat.innerHTML = "Status: Moving Left";
    }
    move_up(){
        stat.innerHTML = "Status: Moving Up";

    }
    move_down(){
        stat.innerHTML = "Status: Moving Downward";
    }


}
let keyboard = new keyboard_controller();

document.addEventListener("keydown" , (event) =>{
    // console.log(event.key);
    // console.log(response.value);
    var newRes = JSON.parse(response.value);
    // var newRes = JSON.parse(response.value.replaceAll("'",'"'));
    // console.log(newRes["up"]);
    if (event.key == newRes["up"]){
        keyboard.move_up();
    }
    if (event.key == newRes["down"]){
        keyboard.move_down();
    }
    if (event.key == newRes["forward"]){
        keyboard.move_forward();
    }
    if (event.key == newRes["backward"]){
        keyboard.move_backward();
    }
    if (event.key == newRes["right"]){
        keyboard.move_right();
    }
    if (event.key == newRes["left"]){
        keyboard.move_left();
    }
})
// var response = document.getElementById("input");
// response = JSON.parse(response.value);

// document.addEventListener("keydown" , (event) =>{
//     console.log(response);
//     console.log(event.key);
//     if (event.key == response["forward"]){
//         keyboard.move_forward();
//     }
    // if (event.key == response["backward"]){
    //     keyboard.move_backward();
    // }
    // if (event.key == "a"){
    //     keyboard.move_left();
    // }
    // if (event.key == "d"){
    //     keyboard.move_right();
    // }
    // if (event.key == "c"){
    //     keyboard.move_up();
    // }
    // if (event.key == "v"){
    //     keyboard.move_down();
    // }
// })


