issues_to_be_solved:
	**replacing the UUV_simulator_package ROV by our ROV model
	**placing cameras, arms and thrusters 
	**PID script
	**ROV teleoperation check

please follow these instructions by steps: 
1==> open Ubunto 18.04 terminal 

2==> refere to the following instruction to install ros_melodic distro in roswiki page
	http://wiki.ros.org/melodic/Installation/Ubuntu

3==> type the following command to install uuv_simulator package
	sudo apt install ros-melodic-uuv-simulator

4==> source your melodic distro 
	source /opt/ros/melodic/setup.bash

5==> launch the ROV.launch file
	roslaunch ROV.launch