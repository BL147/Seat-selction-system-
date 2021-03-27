/*
 background-color: #cfebeb;
height: 12px;
width: 15px;
margin: 3px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
*/
const ticketPrice = 100;

function togg() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkboxes.length);
    var price = ticketPrice * checkboxes.length;
    console.log(price);
}

function seatCancel() {
    var x = document.getElementById("selection");
    var unselect = document.getElementById("seat-unselctable");
    if (x.value == "Grandparents") {
        $("#seat-1").attr("disabled", true);
        unselect.style.background = "red";
    }

    if (x.value == "All") {
        $("#seat-10").attr("disabled", false);
        unselect.style.backgroundColor = "#091a4b";

    }
}

/*        
console.log("success");
$("#seat-9").attr("disabled", true);
$("#seat-10").attr("disabled", true);
if ($('#seat-9').is(':disabled'))
$('[for ="seat-9"]').css('color', 'red');



 console.log("Another success");
$("#seat-9").attr("disabled", false);
$("#seat-10").attr("disabled", false);
*/