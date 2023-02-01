var response = document.getElementById("input");
// response = JSON.parse(response.value);



class keyboard_controller{
    // constructor(){

    // }

    move_forward(){
        console.log("moving forward");
    }

    move_backward(){
        console.log("moving backward");

    }

    move_right(){
        console.log("moving right");

    }

    move_left(){
        console.log("moving left");

    }
    move_up(){
        console.log("moving up");

    }
    move_down(){
        console.log("moving down");

    }


}
let keyboard = new keyboard_controller();

document.addEventListener("keydown" , (event) =>{
    // console.log(event.key);
    // console.log(response.value);
    // var newRes = JSON.parse(response.value);
    var newRes = JSON.parse(response.value.replaceAll("'",'"'));
    // console.log(newRes["up"]);
    if (event.key == newRes["up"]){
        console.log("Success");
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


