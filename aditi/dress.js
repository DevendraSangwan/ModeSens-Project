
function setTheme(mode){

  if(mode === "dark"){
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
  }

  else{
    document.body.classList.remove("dark");
    localStorage.setItem("theme","light");
  }
}

window.onload = () => {

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "dark"){
    document.body.classList.add("dark");
  }

};
const priceBtn = document.getElementById("priceBtn");
const dropdownBox = document.getElementById("dropdownBox");

priceBtn.addEventListener("click",(e)=>{

  e.stopPropagation();

  dropdownBox.classList.toggle("show");

});

window.addEventListener("click",(e)=>{

  if(
    !priceBtn.contains(e.target) &&
    !dropdownBox.contains(e.target)
  ){
    dropdownBox.classList.remove("show");
  }

});


const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart)=>{

  heart.addEventListener("click",()=>{

    if(heart.innerHTML === "♡"){
      heart.innerHTML = "♥";
      heart.style.color = "red";
    }

    else{
      heart.innerHTML = "♡";
      heart.style.color = "black";
    }

  });

});


function referFriend(){

  const email = document.getElementById("emailInput").value;

  if(email === ""){
    alert("Please enter email");
  }

  else{
    alert("Invitation sent to " + email);
  }

}

const filter = document.getElementById("filter-btn")
const sidebar = document.getElementById("sidebar")
sidebar.style.display="none"
filter.addEventListener("click",()=>{
sidebar.style.display="block"
})

const back = document.getElementById("backBtn")
back.addEventListener("click" , ()=>{
  sidebar.style.display="none"
})

