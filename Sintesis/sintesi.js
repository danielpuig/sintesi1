/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var key;

$(document).keypress(function (event) {
    key = event.which;
    //console.log(key);
    //console.log($('#spaceShip').offset());
    //console.log($('#spaceShip').offset()["top"]);
    switch (key) {
        case 115:
            if ($('#spaceShip').offset()["top"] < 510) {
                $('#spaceShip').animate({
                    top: "+=10px"
                }, 1, function () {

                });
            }
            break;
        case 100:
            if ($('#spaceShip').offset()["left"] < 1430) {
                $('#spaceShip').animate({
                    left: "+=10px"
                }, 1, function () {
                });
            }
            break;
        case 97:
            if ($('#spaceShip').offset()["left"] > 385) {
                $('#spaceShip').animate({
                    left: "-=10px"
                }, 1, function () {
                });
            }
            break;
        case 119:
            if ($('#spaceShip').offset()["top"] > 120) {
                $('#spaceShip').animate({
                    top: "-=10px"
                }, 1, function () {

                });
            }
            break;
    }
});

createAsteroid();

function createAsteroid() {
    
    window.setInterval(function(){
        $.ajax({
            type: "POST",
            url: "server.php",
            dataType: "json",
            data: "top",
            success: function(respJSON) {
                var position = respJSON.top;
                alert(position);
            }
        }); 
    }, 2000);
    
}