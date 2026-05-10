const headings = document.querySelectorAll(".filter_heading");

headings.forEach(function(heading){

    heading.addEventListener("click", function(){

        const content = this.nextElementSibling;

        if(content.style.display === "block"){

            content.style.display = "none";
        }

        else{
            content.style.display = "block";
        }

    });

});


//


// HEART TOGGLE

const hearts = document.querySelectorAll(".heart1");

hearts.forEach(function(heart){

    heart.addEventListener("click", function(){

        if(this.innerHTML === "♡"){

            this.innerHTML = "♥";

            this.style.color = "red";

        }

        else{

            this.innerHTML = "♡";

            this.style.color = "black";

        }

    });

});

// PRODUCTS

const products = document.querySelectorAll(".img_box");



// gender

const genderFilters = document.querySelectorAll(".gender_filter");

genderFilters.forEach(function(filter){

    filter.addEventListener("click", function(){

        const selectedGender = this.dataset.gender;

        products.forEach(function(product){

            if(product.dataset.gender === selectedGender){

                product.style.display = "block";
            }

            else{

                product.style.display = "none";
            }

        });

    });

});

// PRODUCTS




// COLOR FILTER

const colorFilters = document.querySelectorAll(".color_filter");

colorFilters.forEach(function(filter){

    filter.addEventListener("click", function(){

        const selectedColor = this.dataset.color;

        products.forEach(function(product){

            if(product.dataset.color === selectedColor){

                product.style.display = "";

            }

            else{

                product.style.display = "none";

            }

        });

    });

});




//mode
function setTheme(mode){

    if(mode === "dark"){
        document.body.classList.add("dark");
    }

    else{
        document.body.classList.remove("dark");
    }

}