// Sample data representing what you'd store in Firebase
const products = [
    {
        title: "Small Leather Gabbi Handbag",
        brand: "JW PEI",
        priceRange: "$155 to $320",
        stores: 2,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500"
    },
    {
        title: "Florence Baroque Pearl Drop",
        brand: "DEAN DAVIDSON",
        priceRange: "$104 to $317",
        stores: 3,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500"
    },
    {
        title: "Monochrome Gg Rectangle",
        brand: "GUCCI",
        priceRange: "$280 to $307",
        stores: 2,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=500"
    },
    {
        title: "Knee-high Suede Boots",
        brand: "VALENTINO GARAVANI",
        priceRange: "$1574 to $1950",
        stores: 13,
        image: "https://images.unsplash.com/photo-1601924921557-45e6ecd0a003?q=80&w=500"
    }
];

const productList = document.getElementById('product-list');

function renderProducts() {
    // Clear existing content
    productList.innerHTML = "";

    products.forEach(product => {
        // 1. Create Element
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.backgroundImage = `url('${product.image}')`;

        // 2. Build Internal HTML
        card.innerHTML = `
            <div class="overlay">
                <h4>${product.title}</h4>
                <p class="brand">${product.brand}</p>
                <div class="card-footer">
                    <span><i class="fa-regular fa-folder"></i> Compare ${product.stores} Stores</span>
                    <span>${product.priceRange}</span>
                </div>
            </div>
        `;

        // 3. Append to DOM
        productList.appendChild(card);
    });
}

// Initialize the render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // UX Logic: Smooth horizontal scroll with mouse wheel
    productList.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        productList.scrollLeft += evt.deltaY;
    });
});

// Data for the new sections
const brandLogos = [
    "DOLCE & GABBANA", "JACQUEMUS", "GUCCI", "FRAME", "24S.com", 
    "BERGDORF GOODMAN", "NET-A-PORTER", "SELFRIDGES"
];

const reviews = [
    {
        title: "REALLY helpful",
        text: "REALLY helpful! They found this product (plastic fisherman sandals in a certain size and color), sent it to me. Wonderful! The sandals arrived quickly; my daughter is THRILLED!!",
        author: "CELIA BERDES"
    },
    {
        title: "Great prices",
        text: "Great prices, great jacket, great customer service. ModeSens is my go-to for finding the best deals across luxury retailers.",
        author: "GAIL DAVIS"
    }
];

function renderPartners() {
    const grid = document.getElementById('brand-grid');
    brandLogos.forEach(name => {
        const span = document.createElement('span');
        span.className = "brand-name-placeholder"; // In production, use <img> tags
        span.style.fontWeight = "900";
        span.style.fontSize = "18px";
        span.style.letterSpacing = "2px";
        span.innerText = name;
        grid.appendChild(span);
    });
}

function renderTestimonials() {
    const grid = document.getElementById('testimonial-grid');
    reviews.forEach(rev => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        card.innerHTML = `
            <div class="stars">★★★★★</div>
            <span class="review-title">${rev.title}</span>
            <p class="review-text">${rev.text}</p>
            <p class="reviewer-name">${rev.author}</p>
        `;
        grid.appendChild(card);
    });
}

// Update your init listener
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(); // from previous step
    renderPartners();
    renderTestimonials();
});
// Add this logic to your existing script.js
function updateStatsBanner(shoppersCount) {
    const heading = document.querySelector('.serif-heading-white');
    if(heading) {
        heading.innerHTML = `${shoppersCount.toLocaleString()}+ shoppers found a better deal with ModeSens in the last 24 hours`;
    }
}

// Call this inside your DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderPartners();
    renderTestimonials();
    
    // Example: Dynamically updating the stat from a 'database'
    updateStatsBanner(10000); 
});
const searchTags = ["Jewelry Sale", "Coach", "Gucci", "Valentino", "Midi-Dresses", "Nike", "Prada Bags", "Jacquemus", "Khaite"];

const slideImages = [
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800",
    "https://images.unsplash.com/photo-1490481651871-ab68624d5517?q=80&w=800",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800"
];

function renderSearchTags() {
    const cloud = document.getElementById('tag-cloud');
    searchTags.forEach(tagName => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerText = tagName;
        cloud.appendChild(tag);
    });
}

function initSlider() {
    const track = document.getElementById('slider-track');
    let index = 0;

    // Create slides
    slideImages.forEach(src => {
        const div = document.createElement('div');
        div.className = 'slide';
        div.innerHTML = `<img src="${src}">`;
        track.appendChild(div);
    });

    // Navigation logic
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (index < slideImages.length - 1) {
            index++;
            track.style.transform = `translateX(-${index * 50}%)`;
        }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * 50}%)`;
        }
    });
}

// Add to your initialization
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderPartners();
    renderTestimonials();
    renderSearchTags();
    initSlider();
});
const categories = ["WOMEN", "MEN", "KIDS", "BEAUTY", "HOME"];
const navIcons = [
    { name: "New", img: "https://cdn-icons-png.flaticon.com/512/692/692751.png" },
    { name: "Clothing", img: "https://cdn-icons-png.flaticon.com/512/2503/2503380.png" },
    { name: "Dresses", img: "https://cdn-icons-png.flaticon.com/512/1785/1785255.png" },
    { name: "Tops", img: "https://cdn-icons-png.flaticon.com/512/2357/2357127.png" }
];
const filterTags = ["Jeans", "Pants", "Shorts", "Knitwear", "Beachwear", "Boots", "Hats"];

function renderCategoryGrid() {
    const grid = document.getElementById('category-grid');
    categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'cat-item';
        div.innerHTML = `
            <img src="https://images.unsplash.com/photo-1490481651871-ab68624d5517?w=400" alt="${cat}">
            <div class="cat-label">${cat}</div>
        `;
        grid.appendChild(div);
    });
}

function renderIconMenu() {
    const iconGrid = document.getElementById('icon-grid');
    navIcons.forEach(icon => {
        const item = document.createElement('div');
        item.className = 'icon-item';
        item.innerHTML = `<img src="${icon.img}"><p>${icon.name}</p>`;
        iconGrid.appendChild(item);
    });

    const tagContainer = document.getElementById('filter-tags');
    filterTags.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tag-outline';
        span.innerText = t;
        tagContainer.appendChild(span);
    });
}

// Final Init
document.addEventListener('DOMContentLoaded', () => {
    // Previous renders...
    renderProducts();
    renderPartners();
    renderTestimonials();
    renderSearchTags();
    initSlider();
    // New renders
    renderCategoryGrid();
    renderIconMenu();
});
// Theme Switching Logic
const lightBtn = document.getElementById('light-mode');
const darkBtn = document.getElementById('dark-mode');

lightBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
});

darkBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
});

// Auto-Slide Logic for "Best offers from our partners"
function startAutoSlide() {
    const track = document.getElementById('slider-track');
    let scrollAmount = 0;
    
    // Slide one-by-one automatically every 4 seconds
    setInterval(() => {
        const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
        if (scrollAmount >= maxScroll) {
            scrollAmount = 0;
        } else {
            scrollAmount += track.children[0].clientWidth; // width of one slide
        }
        track.style.transform = `translateX(-${scrollAmount}px)`;
    }, 4000);
}

// Firebase Connection Placeholder
async function fetchFirebaseData() {
    /* const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        renderProductDOM(doc.data());
    });
    */
    console.log("Ready to pull dynamic content from Firebase!");
}

// Load Theme from storage on start
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
    fetchFirebaseData();
    // (Call your other render functions from previous steps here)
});