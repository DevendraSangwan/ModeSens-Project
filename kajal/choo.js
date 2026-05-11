

const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const dropdown = btn.nextElementSibling;

        document.querySelectorAll(".dropdown").forEach((d) => {

            if (d !== dropdown) {
                d.classList.remove("show");
            }

        });

        if (dropdown) {
            dropdown.classList.toggle("show");
        }

    });

});

window.addEventListener("click", (e) => {

    if (!e.target.closest(".filter-box")) {

        document.querySelectorAll(".dropdown").forEach((d) => {

            d.classList.remove("show");

        });

    }

});



const allWishlistButtons =
document.querySelectorAll(".heart, .product-heart");

allWishlistButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const heartImage = btn.querySelector("img");

        if (!btn.classList.contains("active")) {

            btn.classList.add("active");

            if (heartImage) {

                heartImage.src =
                "https://cdn-icons-png.flaticon.com/128/535/535234.png";

            }

            alert("Item Added To Wishlist");

        }

        else {

            btn.classList.remove("active");

            if (heartImage) {

                heartImage.src =
                "https://cdn-icons-png.flaticon.com/128/2077/2077422.png";

            }

            alert("Item Removed From Wishlist");

        }

    });

});


const saveSearch = document.querySelector(".Save-btn");

if(saveSearch){

    saveSearch.addEventListener("click", () => {

        alert("Search Saved Successfully!");

    });

}


const reset = document.getElementById("reset");

if(reset){

    reset.addEventListener("click", () => {

        genderFilter.value = "all";
        colorFilter.value = "all";
        materialFilter.value = "all";

        displayProducts(products);

        alert("Filters Reset!");

    });

}



const share = document.getElementById("share");

if(share){

    share.addEventListener("click", () => {

        navigator.clipboard.writeText(window.location.href);

        alert("Link Copied!");

    });

}



const categoryItems =
document.querySelectorAll(".category-item");

categoryItems.forEach((item) => {

    item.addEventListener("click", () => {

        alert(item.innerText + " Selected");

    });

});


const moreLinks =
document.querySelectorAll(".more-links a");

moreLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        alert(link.innerText);

    });

});



const productsSection = document.querySelector(".products");

const originalHTML = productsSection.innerHTML;


const products = [

    {
        image:"https://cdn.modesens.com/availability/jimmy-choo-medium-cinch-leather-shoulder-bag-latte-97990082?w=400",
        title:"Jimmy Choo Bag",
        brand:"Leather Shoulder Bag",
        price:"₹169851",
        gender:"women",
        color:"gold",
        material:"leather"
    },

    {
        image:"https://cdn.modesens.com/availability/jimmy-choo-ayla-metallic-leather-sandals-gold-87087791?w=400",
        title:"Gold Sandals",
        brand:"Metallic Sandals",
        price:"₹150000",
        gender:"women",
        color:"gold",
        material:"satin"
    },

    {
        image:"https://cdn.modesens.com/availability/jimmy-choo-cash-star-leather-sneakers-men-white-103863881?w=400",
        title:"JIMMY CHOO",
        brand:"Cash Star Sneaker Men in White",
        price:"₹42666 to ₹80949",
        gender:"men",
        color:"white",
        material:"leather"
    },

     {
        image:"https://cdn.modesens.com/availability/55767523?w=400",
        title:"JIMMY CHOO",
        brand:"Man Aqua Eau De Toilette 100ml",
        price:"₹3484 to ₹11807",
        gender:"men",
        color:"Black",
    },

    {
        image:"https://cdn.modesens.com/availability/jimmy-choo-50mm-mimmi-flower-sling-back-pumps-white-114313902?w=400",
        title:"White Heel",
        brand:"Luxury Heel",
        price:"₹175000",
        gender:"women",
        color:"white",
        material:"satin"
    },

    {
        image:"https://cdn.modesens.com/availability/jimmy-choo-lula-red-heeled-sandals-with-crystal-straps-and-shaped-bows-in-satin-woman-pink-115979203?w=400",
        title:"Pink Sandal",
        brand:"Crystal Sandal",
        price:"₹180000",
        gender:"women",
        color:"red",
        material:"satin"
    }

];


const genderFilter = document.getElementById("genderFilter");

const colorFilter = document.getElementById("colorFilter");

const materialFilter = document.getElementById("materialFilter");


function displayProducts(items){

    productsSection.innerHTML = "";

    items.forEach((product)=>{

        productsSection.innerHTML += `

        <div class="card">

            <button class="heart">
                <img src="https://cdn-icons-png.flaticon.com/128/2077/2077422.png">
            </button>

            <img src="${product.image}" alt="product">

            <h3>${product.title}</h3>

            <p class="brand">${product.brand}</p>

            <div class="price-box">
                <span class="price">${product.price}</span>
            </div>

            <a href="#">Compare Stores</a>

        </div>

        `;
    });

}



function filterProducts(){

    const genderValue = genderFilter.value;

    const colorValue = colorFilter.value;

    const materialValue = materialFilter.value;


 
    if(
        genderValue === "all" &&
        colorValue === "all" &&
        materialValue === "all" 
    ){

        productsSection.innerHTML = originalHTML;

        return;
    }



    const filteredProducts = products.filter((product)=>{

        return (

            (genderValue === "all"
            || product.gender === genderValue)

            &&

            (colorValue === "all"
            || product.color === colorValue)

            &&

            (materialValue === "all"
            || product.material === materialValue)

        );

    });


    displayProducts(filteredProducts);

}


genderFilter.addEventListener(
    "change",
    filterProducts
);

colorFilter.addEventListener(
    "change",
    filterProducts
);

materialFilter.addEventListener(
    "change",
    filterProducts
);



const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", ()=>{

    genderFilter.value = "all";

    colorFilter.value = "all";

    materialFilter.value = "all";

    productsSection.innerHTML = originalHTML;

});


const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

function updateButtons(theme) {
    lightBtn.classList.remove("active");
    darkBtn.classList.remove("active");

    if (theme === "light") {
        lightBtn.classList.add("active");
    } else {
        darkBtn.classList.add("active");
    }
}

updateButtons(savedTheme);

lightBtn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    updateButtons("light");
});

darkBtn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateButtons("dark");
});
