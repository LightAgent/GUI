// document.addEventListener("keydown" , (event) =>{
//     console.log(event.key);
// })

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
    if (event.key == "w"){
        keyboard.move_forward();
    }
    if (event.key == "s"){
        keyboard.move_backward();
    }
    if (event.key == "a"){
        keyboard.move_left();
    }
    if (event.key == "d"){
        keyboard.move_right();
    }
    if (event.key == "c"){
        keyboard.move_up();
    }
    if (event.key == "v"){
        keyboard.move_down();
    }
})


