
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


/* SEARCH */

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  cards.forEach((card) => {

    const title = card.querySelector("h4")
      .innerText
      .toLowerCase();

    if(title.includes(value)){
      card.style.display = "block";
    }

    else{
      card.style.display = "none";
    }

  });

});


/* CART */

let cart = 0;

const cartBtns = document.querySelectorAll(".cart-btn");
const cartCount = document.getElementById("cartCount");

cartBtns.forEach((btn)=>{

  btn.addEventListener("click",()=>{

    cart++;

    cartCount.innerText = cart;

    alert("Added to Cart 🛒");

  });

});

const modal = document.getElementById("productModal");

const modalImg = document.getElementById("modalImg");

const modalTitle = document.getElementById("modalTitle");

const modalPrice = document.getElementById("modalPrice");

const quickBtns = document.querySelectorAll(".quick-btn");

quickBtns.forEach((btn)=>{

  btn.addEventListener("click",(e)=>{

    const card = e.target.closest(".card");

    const img = card.querySelector("img").src;

    const title = card.querySelector("h4").innerText;

    const price = card.querySelector("b").innerText;

    modal.style.display = "flex";

    modalImg.src = img;

    modalTitle.innerText = title;

    modalPrice.innerText = price;

  });

});


document.getElementById("closeModal")
.addEventListener("click",()=>{

  modal.style.display = "none";

});


window.addEventListener("click",(e)=>{

  if(e.target === modal){
    modal.style.display = "none";
  }

});