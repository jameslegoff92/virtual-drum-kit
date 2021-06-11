var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
//The line of below takes the document and uses the querySelector function in order to target a class called "drum" and adds an event listener to the tags belonging to the drum class.
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    // this.innerHTML will take the text within the  HTML tag associated with the button that was clicked. 'this' refers to the button that was clicked, innerHTML will return the text within the HTML tag associated with the event that 'this' is linked too which is a particular button.
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    drumAnimation(buttonInnerHTML);
  });
}
// This line of code adds an event listener to the whole document(webpage), instead of a specific HTML tag.
 document.addEventListener("keydown", function(event){
   playSound(event.key);
   drumAnimation(event.key);
 });


function playSound(key){
  // The switch expression will take the value inside the variable, buttonInnerHTML, and will use it to compare the cases within the switch statement. If true, the code within the case will run until it hits the break statement. At this point it will close the switch statment.
      switch (key) {
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
          break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
          break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
          break;

        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
          break;

        case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
          break;

        case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
          break;

        case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
          break;

        default:
        console.log("DrumKit");

      }
    }

    function drumAnimation(activeKey){
      // The active button holds the key being pressed.
      var activeButton = document.querySelector("." + activeKey);
      activeButton.classList.add("pressed");

      setTimeout(function(){activeButton.classList.remove("pressed");}, 100);


    }
