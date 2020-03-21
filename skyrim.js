function Subscribe() {
  var email = prompt("Please enter your email");

  if (email === null || email === "") {
    window.alert("Please enter your email");
    Subscribe();
  } else {
    window.alert("Thank you!");
  }

}

var tag=document.getElementById("subscribe");

function mouseOver() {
    tag.style.background="purple";
};
function mouseOut() {
    tag.style.background="white";
};



  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slajdovi");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
  }

  function myFunction() {
  var text;
  var favRace = prompt("What's your favorite race?", "High Elf");
  switch(favRace) {
    case "Argonian":
      text = "This reptilian race, well-suited for the treacherous swamps, has developed a natural resistance to diseases and the ability to breathe underwater.";
      break;
    case "High Elf":
      text = "The high elves are the most strongly gifted in the arcane arts of all the races.";
      break;
    case "Wood Elf":
      text = "Wood elves make good scouts and thieves, and there are no finer archers in all of Tamriel.";
      break;
    case "Breton":
      text = "Bretons are a race of both human and elven ancestry.";
      break;
    case "Dark Elf":
      text = "Dark elves are noted for their stealth and magic skills.";
      break;
    case "Imperial":
      text = "Natives of Cyrodiil, they have proved to be shrewd diplomats and traders.";
      break;
    case "Khajiit":
      text = "Hailing from the province of Elsweyr, they are intelligent, quick, and agile.";
      break;
    case "Nord":
      text = "Nords are famous for their resistance to cold and their talent as warriors.";
      break;
    case "Orc":
      text = "Orc troops in Heavy Armor are among the finest in the Empire.";
      break;
    case "Redguard":
      text = "Redguards of Hammerfell have a hardy constitution and a natural resistance to poison.";
      break;
    default:
      text = "I have never heard of that one..";
  }
  document.getElementById("info").innerHTML = text;
}
