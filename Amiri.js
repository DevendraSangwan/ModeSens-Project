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

