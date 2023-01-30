class Save{
    constructor(){
        this.upward = document.getElementById("upward");
        this.downward = document.getElementById("downward");
        this.forward = document.getElementById("forward");
        this.backward = document.getElementById("backward");
        this.right = document.getElementById("right");
        this.left = document.getElementById("left");
        this.config = document.getElementById("config");
    }
    check(){
        if (this.config.value > 10){
            this.config.value = 10;
        }
    }
    saveValues() {
        this.check();
        var request = new XMLHttpRequest();
        request.open("GET", `http://127.0.0.1:5000/save?config=${this.config.value}&u=${this.upward.value}&d=${this.downward.value}&f=${this.forward.value}&b=${this.backward.value}&r=${this.right.value}&l=${this.left.value}`);
        request.send();
        request.addEventListener("load", function(){
            alert(request.response)
        })
        console.log("Saved");
    }
}

class Load{
    constructor(){
        this.upward = document.getElementById("upward");
        this.downward = document.getElementById("downward");
        this.forward = document.getElementById("forward");
        this.backward = document.getElementById("backward");
        this.right = document.getElementById("right");
        this.left = document.getElementById("left");
        this.config = document.getElementById("config");
    }
    check(){
        if (this.config.value > 10){
            this.config.value = 10;
        }
    }
    loadValues (){
        this.check();
        var request = new XMLHttpRequest();
        request.open("GET", `http://127.0.0.1:5000/load?config=${this.config.value}`);
        request.send();
        request.addEventListener("load", function(){
            if (request.status != 200){
                alert("An Error Has Occured!");
                return;
            }
            const response = JSON.parse(request.response)
            self.upward.value = response["up"];
            self.downward.value = response["down"];
            self.forward.value = response["forward"];
            self.backward.value = response["backward"];
            self.right.value = response["right"];
            self.left.value = response["left"];
        })
    }
}
