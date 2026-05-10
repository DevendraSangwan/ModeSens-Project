// ================= PRODUCTS =================
const products = [
  {
    title: "Leather Handbag",
    brand: "JW PEI",
    price: "$155",
    detail: "Luxury handcrafted finish",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
  },
  {
    title: "Pearl Drop",
    brand: "DEAN DAVIDSON",
    price: "$317",
    detail: "Elegant premium jewelry",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500"
  },
  {
    title: "Rectangle Shades",
    brand: "GUCCI",
    price: "$280",
    detail: "Luxury designer eyewear",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500"
  },
  {
    title: "Suede Boots",
    brand: "VALENTINO",
    price: "$1574",
    detail: "Premium winter drop",
    image: "https://images.unsplash.com/photo-1601924921557-45e6ecd0a003?w=500"
  }
];

const productList = document.getElementById("product-list");
const cardWidth = 220;

function render() {
    productList.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}">
            <div class="detail-box">
                <h3>${product.title}</h3>
                <p>${product.brand}</p>
                <span>${product.price}</span>
                <small>${product.detail}</small>
            </div>
        `;

        productList.appendChild(card);
    });
}

function focusCard() {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => card.classList.remove("active"));
    if(cards[1]) cards[1].classList.add("active");
}

function slideNext() {
    productList.style.transition = "transform 0.55s cubic-bezier(.77,0,.175,1)";
    productList.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
        productList.appendChild(productList.firstElementChild);
        productList.style.transition = "none";
        productList.style.transform = "translateX(0)";
        focusCard();
    }, 550);
}

function startSlider() {
    focusCard();
    setInterval(slideNext, 3000);
}

// ================= PARTNERS =================
function renderPartners() {
    const grid = document.getElementById('brand-grid');

    grid.innerHTML = `
        <div class="brand-row row-1">
            <span class="luxury bold-wide">DOLCE&GABBANA</span>
            <span class="minimal italic-soft">JACQUEMUS</span>
            <span class="classic heavy">GUCCI</span>
            <span class="modern thin-space">FRAME</span>
            <span class="circle-brand">24S</span>
            <span class="editorial serif-bold">BERGDORF GOODMAN</span>
        </div>

        <div class="brand-row row-2">
            <span class="luxury bold-wide">REVOLVE</span>
            <span class="italic-soft">shopbop</span>
            <span class="classic heavy">MIU MIU</span>
            <span class="serif-bold">VALENTINO</span>
            <span class="circle-brand">OUTNET</span>
            <span class="modern thin-space">FARFETCH</span>
        </div>
    `;
}

// 🔥 NEW FUNCTION (Animation Fix)
function initBrandAnimation() {

    renderPartners(); // Create brands instantly
    
}

// ================= TESTIMONIALS =================
// ================= TESTIMONIALS =================
const reviews = [
    {
        title: "Thankful",
        text: "The website and app are very customer friendly when it comes to navigating.",
        author: "CPAW888"
    },
    {
        title: "REALLY helpful",
        text: "They found this product and sent it quickly!",
        author: "CELIA BERDES"
    },
    {
        title: "Great prices",
        text: "Great prices, great jacket, great service.",
        author: "GAIL DAVIS"
    },
    {
        title: "Amazing quality",
        text: "Luxury experience from order to delivery.",
        author: "ANNA CLARK"
    }
];

function renderTestimonials() {
    const grid = document.getElementById('testimonial-grid');
    grid.innerHTML = "";

    reviews.forEach(rev => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';

        card.innerHTML = `
            <div class="stars">★★★★★</div>
            <span>${rev.title}</span>
            <p>${rev.text}</p>
            <p class="author">${rev.author}</p>
        `;

        grid.appendChild(card);
    });

    // clone first 2 cards for smooth infinite loop
    for (let i = 0; i < 2; i++) {
        grid.appendChild(grid.children[i].cloneNode(true));
    }

    startTestimonialSlider();
}

function startTestimonialSlider() {
    const grid = document.getElementById('testimonial-grid');
    let index = 0;

    setInterval(() => {
        index++;
        grid.style.transition = "transform 0.8s ease-in-out";
        grid.style.transform = `translateX(-${index * 50}%)`;

        if (index === reviews.length) {
            setTimeout(() => {
                grid.style.transition = "none";
                grid.style.transform = "translateX(0)";
                index = 0;
            }, 800);
        }

    }, 3000);
}
// ================= SEARCH TAGS =================
const searchTags = [
    "Jewelry Sale","Gucci","Jimmy Choo","Amiri","Valentino","Nike","Dior",
    "Chanel","Balenciaga","Saint Laurent",
    "Fendi","Burberry","Moncler"
];

function renderSearchTags() {
    const cloud = document.getElementById("tag-cloud");

    const pageLinks = {
        "Amiri": "Amiri.html",
        "Jimmy Choo": "choo.html",
        "Gucci": "prada.html",
        "Jewelry Sale": "./swati/jwelery.html",
    };

    cloud.innerHTML = "";

    searchTags.forEach(tagName => {
        const tag = document.createElement("button");
        tag.classList.add("tag");
        tag.textContent = tagName;

        tag.addEventListener("click", function () {

            document.querySelectorAll(".tag").forEach(t => {
                t.classList.remove("active");
            });

            this.classList.add("active");

            if(pageLinks[tagName]){
                window.location.href = pageLinks[tagName];
            }
        });

        cloud.appendChild(tag);
    });
}

// ================= CATEGORY =================
const categories = [
    {
        name: "WOMEN",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b"
    },
    {
        name: "MEN",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
    },
    {
        name: "KIDS",
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
    },
    {
        name: "BEAUTY",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    },
    {
        name: "HOME",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
];

function renderCategoryGrid() {
    const grid = document.getElementById("category-grid");
    grid.innerHTML = "";

    categories.forEach(cat => {
        const div = document.createElement("div");
        div.className = "category-card";

        div.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <div class="category-overlay">${cat.name}</div>
        `;

        grid.appendChild(div);
    });
}
// ================= ICON MENU =================
const icons = [
  {
    name: "New",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
  },
  {
    name: "Clothing",
    img: "https://cdn-icons-png.flaticon.com/512/892/892458.png"
  },
  {
    name: "Dresses",
    img: "https://cdn-icons-png.flaticon.com/512/892/892458.png"
  },
  {
    name: "Shoes",
    img: "https://cdn-icons-png.flaticon.com/512/2589/2589874.png"
  },
  {
    name: "Bags",
    img: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png"
  },
  {
    name: "Beauty",
    img: "https://cdn-icons-png.flaticon.com/512/3163/3163203.png"
  },
  {
    name: "Sale",
    img: "https://cdn-icons-png.flaticon.com/512/833/833314.png"
  }
];

const tags = [
  "Jeans","Pants","Shorts","Knitwear",
  "Beachwear","Boots","Hats","Sunglasses"
];

function renderIconMenu() {
    const iconGrid = document.getElementById("icon-grid");
    const filterTags = document.getElementById("filter-tags");

    iconGrid.innerHTML = "";
    filterTags.innerHTML = "";

    icons.forEach(icon => {
        const div = document.createElement("div");
        div.className = "icon-item";

        div.innerHTML = `
            <img src="${icon.img}" alt="${icon.name}">
            <p>${icon.name}</p>
        `;

        iconGrid.appendChild(div);
    });

    tags.forEach(tag => {
        const btn = document.createElement("button");
        btn.className = "tag-outline";
        btn.textContent = tag;
        filterTags.appendChild(btn);
    });
}
// ================= AUTO SLIDE =================
function startAutoSlide() {
    console.log("Auto sliding...");
}

// ================= FIREBASE =================
async function fetchFirebaseData() {
    console.log("Firebase ready");
}

// ================= THEME =================
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
// ================= FINAL INIT =================
document.addEventListener("DOMContentLoaded", () => {
    render();
    startSlider();
    renderPartners();
    initBrandAnimation(); // ✅ IMPORTANT
    renderTestimonials();
    renderSearchTags();
    renderCategoryGrid();
    renderIconMenu();
    startAutoSlide();
    fetchFirebaseData();

});

const joinButtons = document.querySelectorAll(
    ".join-btn-top, .join-now-inline, .btn-white-cta, .join-black-btn"
);

const modal = document.getElementById("signup-modal");
const closeModal = document.getElementById("close-modal");
const signupSubmit = document.getElementById("signup-submit");

joinButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

signupSubmit.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(name && email && password){
        const user = { name, email };

        localStorage.setItem("modesensUser", JSON.stringify(user));

        alert(`Welcome ${name}!`);
        modal.classList.add("hidden");

        joinButtons.forEach(btn => {
            btn.textContent = `Hi, ${name}`;
        });
    } else {
        alert("Fill all fields");
    }
});
function handleJoinedState() {
    const preLogin = document.getElementById("pre-login-content");

    if(preLogin){
        preLogin.classList.add("hidden-section");
    }

    window.scrollTo({
        top: document.querySelector(".search-trending-container").offsetTop,
        behavior: "smooth"
    });
}