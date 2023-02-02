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
    data: 100 
});


let thruster1_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/1/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});

let thruster_msg1 = new ROSLIB.Message({
    data: 100 
});


let thruster2_topic = new ROSLIB.Topic({
    ros : ros,
    name : '//rexrov/thrusters/2/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});
let thruster_msg2 = new ROSLIB.Message({
    data: 100 
});

let thruster_msg3 = new ROSLIB.Message({
    data: 100 
});
let thruster3_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/3/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});


let thruster_msg4 = new ROSLIB.Message({
    data: 100 
});
let thruster4_topic = new ROSLIB.Topic({
    ros : ros,
    name : '/rexrov/thrusters/4/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});


let thruster_msg5 = new ROSLIB.Message({
    data: 100 
});
let thruster5_topic = new ROSLIB.Topic({
    ros : ros,
    name : '//rexrov/thrusters/5/input',
    messageType : 'uuv_gazebo_ros_plugins_msgs/FloatStamped'
});


let thruster_msg6 = new ROSLIB.Message({
    data: 100 
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
    data: 100 
});

thruster0_topic.publish(thruster_msg0);
thruster1_topic.publish(thruster_msg1);
thruster2_topic.publish(thruster_msg2);
thruster3_topic.publish(thruster_msg3);
thruster4_topic.publish(thruster_msg4);
thruster5_topic.publish(thruster_msg5);
thruster6_topic.publish(thruster_msg6);
thruster7_topic.publish(thruster_msg7);

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

// ------------------------------------------------------------------------------------------------------------------------------------- //


// class keyboard_controller{
//     // constructor(){

//     // }

//     move_forward(){
//         console.log("moving forward");
//         twist.linear.x=0;
//         twist.angular.z=2;
//         cmdVel.publish(twist);

//     }

//     move_backward(){
//         console.log("moving backward");

//     }

//     move_right(){
//         console.log("moving right");

//     }

//     move_left(){
//         console.log("moving left");

//     }
//     move_up(){
//         console.log("moving up");

//     }
//     move_down(){
//         console.log("moving down");

//     }


// }

// let keyboard = new keyboard_controller();

// document.addEventListener("keydown" , (event) =>{
//     if (event.key == "w"){
//         keyboard.move_forward();
//     }
//     if (event.key == "s"){
//         keyboard.move_backward();
//     }
//     if (event.key == "a"){
//         keyboard.move_left();
//     }
//     if (event.key == "d"){
//         keyboard.move_right();
//     }
//     if (event.key == "c"){
//         keyboard.move_up();
//     }
//     if (event.key == "v"){
//         keyboard.move_down();
//     }
// })