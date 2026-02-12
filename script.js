// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;

  if(name === "" || date === "" || people === ""){
    alert("Please fill all fields!");
  } else {
    alert("Table booked successfully! See you soon 😊");
    this.reset();
  }
});

// Scroll Reveal
window.addEventListener("scroll", reveal);

function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
  }
}
