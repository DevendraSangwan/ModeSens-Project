document.querySelectorAll(".heart").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
    btn.style.color ="red";
  });
});

function filterCategory(cat) {
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let category = card.getAttribute("data-category");

    if (cat === "all" || category === cat) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("sort").addEventListener("change", (e) => {
  let value = e.target.value;

  let container = document.querySelector(".products");
  let cards = Array.from(document.querySelectorAll(".card"));

  cards.sort((a, b) => {
    let priceA = +a.getAttribute("data-price");
    let priceB = +b.getAttribute("data-price");

    return value === "low" ? priceA - priceB : priceB - priceA;
  });

  container.innerHTML = "";
  cards.forEach(card => container.appendChild(card));
});



// ==================for footer==========================

function referFriend() {
  const email = document.getElementById("emailInput").value;
  
  if (!email) {
    alert("Please enter an email!");
    return;
  }

  alert("Referral sent to " + email);
}

function setTheme(mode) {
  document.body.className = mode;
}
















































