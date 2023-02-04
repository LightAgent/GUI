issues_to_be_solved:
	**ROS_Bridge is still not done 
	**template scripts to be updated after ros bridge communication
	**Gazebo simulation for industrial robot with 2 cameras, 8 thrusters
	**PID controller needs more resarch, arrising error of launching the same node that controls the thrusters twice in the package
	**some research needed in gazebo environment,3dfiles dynamic properties
to launch gazebo_uuv, run the following commands:
	** install uuv_simulator_package
	sudo apt install ros-melodic-uuv-simulator //melodic distro
	**save the ROV package in your workspace and then run catkin_make
	cd ~/<your Workspace>
	catkin_make
	**launch the ROV.launch in launch file
	cd ~/<your Workspace>/ROV/launch
	roslaunch ROV.launch
	**In this case model_name refers to the vehicle model, which can be different from the namespace.
	**It is a necessary parameter to load the correct controller and thruster allocation matrix coefficients.
 	**The joystick ID is already set zero as default. To find the correct joystick index, you can install and run jstest-gtk
	**you can change the joystick_id in the launch file ln.8 col.33 
	
	
