var names = ["Ann", "Kate", "John", "Jessica", "Tom", "Victoria", "Joe", "Peter", "Jacob"];
    var newArray = [];
    var chosenName = [];

    function generateArray() {
        newArray = names.slice();
        newArray.sort(function (a, b){
            return 0.5 - Math.random();
        });
        build();
    }

    function build(){
        var html ="";
        chosenName = randomChosenName();
        for(var x=0; x<newArray.length; x++){
            var thisName = newArray[x];
            html +='<div class="box" onclick="checkClick(this,\''+thisName+'\')">Check me</div>';
        }
        document.getElementById("output").innerHTML = html;
    }

    function randomChosenName() {
        randomNum = Math.floor(Math.random() * (newArray.length));
        chosenName = newArray[randomNum];
        document.getElementById("message1").innerHTML = "<h1>Find name: " + chosenName + "</h1>";
        return chosenName;
    }

// Check if clicked box holds proper name
    function checkClick(t, name) {
        var holder = t.innerHTML;
        t.innerHTML = name; //display name
        if (name === chosenName) {
            t.style.pointerEvents = 'none'; //avoids clicking again
            setTimeout(function() { t.style.color = "rgb(20, 107, 100)"; t.style.background = "rgb(20, 107, 100)";}, 1000); //TODO: check why if div become empty it moves
            var index = newArray.indexOf(name); 
            newArray.splice(index, 1); //remove name from array
            chosenName = randomChosenName();
            if (newArray.length === 0) {
                document.getElementById("message1").innerHTML = '<h1>Congratulations! You Won!</h1>';
                document.getElementById("output").innerHTML = "<button class=\"btn\" onclick=\"generateArray()\" id=\"startGame\">Play again</button>";
            }
        } else {
            setTimeout(function() { t.innerHTML = holder;}, 500); //hide name
        }
    }
