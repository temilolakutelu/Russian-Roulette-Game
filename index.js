window.onload = function () {
    console.log('Loadder');
    var circles = document.getElementsByClassName('circle');
    var pickedCircle;



    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener('click', function (event) {
            pickedCircle = event.target.innerText;

            console.log('clicked...circle...', pickedCircle);
        });
    }

    var fireButton = document.getElementById('trigger-button');
    fireButton.addEventListener('click', function (event) {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        if (pickedCircle == undefined) {
            document.getElementById("numberSelector").innerHTML = "Please pick a number!!!";
            console.log("Please pick a number");
        }
        else if (randomNumber == pickedCircle) {
            console.log('randomNumber', randomNumber, pickedCircle, randomNumber == pickedCircle);
            flash();
            document.getElementById("gameOver").style.visibility = "visible";
        }
        else {

            console.log(randomNumber == pickedCircle);
        }

    });
}
function flash() {
    var myVar = setInterval(setColor, 200);
    function setColor() {
        var x = document.body;
        x.style.backgroundColor = "red";
        console.log("red");

    }
    var myvar2 = setInterval(color2, 300);
    function color2() {
        var y = document.body;
        y.style.backgroundColor = "white";
        console.log("white");

    }
    setTimeout(stopFlash, 3000);
    function stopFlash() {
        clearInterval(myVar);
        clearInterval(myvar2);
        document.body.style.backgroundColor = "white";
    }
}