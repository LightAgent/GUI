var response = document.getElementById("input");
var stat = document.getElementById("status");

let ros = new ROSLIB.Ros({
    url: 'ws://192.168.98.19:9090'
});

ros.on('connection', function(){
    console.log('Conneted to websocket server');
});

ros.on('error', function(error){
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function(){
    console.log('Connection to websocket server closed');
});

// Publishing a Topic

let thruster0_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/0/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});

let thruster_msg0 = new ROSLIB.Message({
    data: 0 
});


let thruster1_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/1/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});

let thruster_msg1 = new ROSLIB.Message({
    data: 0 
});


let thruster2_topic = new ROSLIB.Topic({
    ros : ros,
    name : '//rexrov/thrusters/2/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});
let thruster_msg2 = new ROSLIB.Message({
    data: 0 
});

let thruster_msg3 = new ROSLIB.Message({
    data: 0 
});
let thruster3_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/3/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});


let thruster_msg4 = new ROSLIB.Message({
    data: 0 
});
let thruster4_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/4/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});


let thruster_msg5 = new ROSLIB.Message({
    data: 0 
});
let thruster5_topic = new ROSLIB.Topic({
    ros : ros,
    name : '//rexrov/thrusters/5/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});


let thruster_msg6 = new ROSLIB.Message({
    data: 0 
});
let thruster6_topic = new ROSLIB.Topic({
    ros : ros,
    name : '//rexrov/thrusters/6/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});

let thruster7_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/7/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});

let thruster_msg7 = new ROSLIB.Message({
    data: 0 
});

// thruster0_topic.publish(thruster_msg0);
// thruster1_topic.publish(thruster_msg1);
// thruster2_topic.publish(thruster_msg2);
// thruster3_topic.publish(thruster_msg3);
// thruster4_topic.publish(thruster_msg4);
// thruster5_topic.publish(thruster_msg5);
// thruster6_topic.publish(thruster_msg6);
// thruster7_topic.publish(thruster_msg7);

// ------------------------------------------------------------------------------------------------------------------------------------- //

// Subscribing to a topic

// let listener = new ROSLIB.Topic({
//     ros : ros,
//     name : '/listener',
//     messageType : 'std_msgs/String'
// });

// listener.subscribe(function(message) {
//     console.log('Received message on ' + listener.name + ': ' + message.data);
//     listener.unsubscribe();
// });
let camera = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/rexrov/camera/camera_image',
    messageType : 'sensor_msgs/Image'
});

camera.subscribe(function(message) {
    console.log('Received message on ' + camera.name + ': ' + message.data);
    camera.unsubscribe();
});

let camera_right = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/rexrov/camera/cameraright',
    messageType : 'sensor_msgs/Image'
});

camera_right.subscribe(function(message) {
    console.log('Received message on ' + camera_right.name + ': ' + message.data);
    camera_right.unsubscribe();
});

let camera_left = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/rexrov/camera/cameraleft',
    messageType : 'sensor_msgs/Image'
});

camera_left.subscribe(function(message) {
    console.log('Received message on ' + camera_left.name + ': ' + message.data);
    camera_left.unsubscribe();
});

let imu_sensor = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/imu',
    messageType : 'sensor_msgs/Imu'
});

imu_sensor.subscribe(function(message) {
    console.log('Received message on ' + imu_sensor.name + ': ' + message.data);
    imu_sensor.unsubscribe();
});

let pressure_sensor = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/pressure',
    messageType : 'sensor_msgs/FluidPressure'
});

pressure_sensor.subscribe(function(message) {
    console.log('Received message on ' + pressure_sensor.name + ': ' + message.data);
    pressure_sensor.unsubscribe();
});




class KeyboardController{

    setValuesAndPublish(msg0,msg1,msg2,msg3,msg4,msg5,msg6,msg7){
        thruster_msg0.data=msg0;
        thruster_msg1.data=msg1;
        thruster_msg2.data=msg2;
        thruster_msg3.data=msg3;
        thruster_msg4.data=msg4;
        thruster_msg5.data=msg5;
        thruster_msg6.data=msg6;
        thruster_msg7.data=msg7;
        thruster0_topic.publish(thruster_msg0);
        thruster1_topic.publish(thruster_msg1);
        thruster2_topic.publish(thruster_msg2);
        thruster3_topic.publish(thruster_msg3);
        thruster4_topic.publish(thruster_msg4);
        thruster5_topic.publish(thruster_msg5);
        thruster6_topic.publish(thruster_msg6);
        thruster7_topic.publish(thruster_msg7);
        console.log(msg0);
        console.log(msg1);
        console.log(msg2);
        console.log(msg3);
        console.log(msg4);
        console.log(msg5);
        console.log(msg6);
        console.log(msg7);
    }

    move_forward(){
        console.log("moving forward");
        this.setValuesAndPublish(100,100,100,100,200,100,100,100);
        stat.innerHTML = "Status: Moving Forward";
    }

    move_backward(){
        console.log("moving Back");
        this.setValuesAndPublish(30,30,30,30,30,30,90,30);
        stat.innerHTML = "Status: Moving Backward";
    }

    move_right(){
        console.log("moving right");
        this.setValuesAndPublish(70,70,70,70,70,150,70,70);
        stat.innerHTML = "Status: Moving Right";
    }

    move_left(){
        console.log("moving left");
        this.setValuesAndPublish(150,150,150,150,200,150,150,150);
        stat.innerHTML = "Status: Moving Left";
    }
    move_up(){
        console.log("moving up");
        this.setValuesAndPublish(50,30,70,100,200,150,90,30);
        stat.innerHTML = "Status: Moving Up";
    }
    move_down(){
        console.log("moving down");
        this.setValuesAndPublish(50,30,70,100,200,150,90,30);
        stat.innerHTML = "Status: Moving Downward";
    }
}
let keyboard = new KeyboardController();

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


