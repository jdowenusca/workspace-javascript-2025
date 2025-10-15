
/* Send a customized message based on time
*/
//console.log("I am in the hello.js");

// get the date and time 
var today = new Date();
var currentHour=today.getHours();
var greetings="Sup";

// display the greeting message 
// modify the code so that your code display "Good afternoon" whereas time is from 12:00pm to 6:00pm
if (currentHour <= 12){
    greetings = "Good morning!"
} else if (currentHour <=18){
    greetings = "Good afternoon!";
}


// write to the document 
document.write(greetings);