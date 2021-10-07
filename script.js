// Morgan Wallace //
// Jo Smith //
// Web Technologies 2 // 
// JavaScript //

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    // Toggle menu/navbar script //
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation script
    var typed = new Typed(".typing", {
        strings: ["Photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    /*var typed = new Typed(".typing-2", {
        strings: ["Photographer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });*/

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true, 
        autoplayTimeOut: 2000, 
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
           600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



// Gallery code //
//selecting all required elements 
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{ //once window loaded
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i; //passing i value to newIndex variable
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            clickImgIndex = newIndex;
            console.log(i);
            function preview(){
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }

            // previous and next buttons 
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--; //decrement newIndexValue
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }

            nextBtn.onclick = ()=>{
                newIndex++; //increment newIndexValue
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            preview(); //calling above function
            previewBox.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex; 
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
}
// Side nav slide in
function openNav() {
   document.getElementById("mySidenav").style.width = "100%";
}
function openTwitter() {
  document.getElementById("twitter").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function closeTwitter() {
    document.getElementById("twitter").style.width = "0";
}