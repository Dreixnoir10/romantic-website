/* ==========================================================
   Forever & Always
   Premium Romantic Website
   script.js - Part 3A
   ========================================================== */

/* ==========================
   CONFIGURATION
   Change these values only.
========================== */

const PASSWORD = "ILOVEYOU";

const ANNIVERSARY = "2027-05-06T00:00:00";

const LOVE_LETTER = `

My Love,

Every day that passes reminds me how lucky I am to have you.

No matter how far apart we are, my heart always finds its way back to you.

Thank you for choosing me, for believing in me, and for loving me even on the days when I wasn't at my best.

You are my safest place.

You are my greatest blessing.

You are the reason I smile unexpectedly.

I promise that no matter what happens...

I will continue choosing you.

Today.

Tomorrow.

And forever.

❤️ Forever & Always ❤️

`;

/* ==========================
   Elements
========================== */

const lockScreen = document.getElementById("lockScreen");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const wrongPassword = document.getElementById("wrongPassword");

const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");

const typewriter = document.getElementById("typewriter");

const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseMessage =
document.getElementById("surpriseMessage");

const celebrate =
document.getElementById("celebrate");

/* ==========================
   Unlock Website
========================== */

unlockBtn.onclick = () => {

    if(passwordInput.value === PASSWORD){

        lockScreen.style.opacity="0";

        setTimeout(()=>{

            lockScreen.style.display="none";

            mainContent.style.display="block";

            bgMusic.play();

            startTypewriter();

            startSlideshow();

        },800);

    }

    else{

        wrongPassword.innerHTML="Incorrect password ❤️";

        passwordInput.value="";

    }

};

/* ==========================
   Enter Key
========================== */

passwordInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        unlockBtn.click();

    }

});

/* ==========================
   Typewriter
========================== */

function startTypewriter(){

    let i=0;

    function type(){

        if(i<LOVE_LETTER.length){

            typewriter.innerHTML += LOVE_LETTER.charAt(i);

            i++;

            setTimeout(type,40);

        }

    }

    type();

}

/* ==========================
   Gallery Slideshow
========================== */

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function startSlideshow(){

    setInterval(()=>{

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide>=slides.length){

            currentSlide=0;

        }

        slides[currentSlide].classList.add("active");

    },4000);

}

/* ==========================
   Anniversary Countdown
========================== */

const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

function updateCountdown(){

    const now=new Date().getTime();

    const target=new Date(ANNIVERSARY).getTime();

    const distance=target-now;

    const d=Math.floor(distance/(1000*60*60*24));

    const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const m=Math.floor((distance%(1000*60*60))/(1000*60));

    const s=Math.floor((distance%(1000*60))/1000);

    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;

}

setInterval(updateCountdown,1000);

updateCountdown();

/* ==========================
   Surprise Button
========================== */

surpriseBtn.onclick=()=>{

    if(surpriseMessage.style.display==="block"){

        surpriseMessage.style.display="none";

    }

    else{

        surpriseMessage.style.display="block";

    }

};

/* ==========================
   Floating Hearts
========================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (18+Math.random()*22)+"px";

    heart.style.animationDuration=
    (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,900);

/* ==========================
   Cherry Blossoms
========================== */

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
    (8+Math.random()*6)+"s";

    petal.style.fontSize=
    (16+Math.random()*16)+"px";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },14000);

}

setInterval(createPetal,350);

/* ==========================================================
   Forever & Always
   script.js
   PART 3B
   ========================================================== */

/* ==========================
   Cursor Sparkle Effect
========================== */

document.addEventListener("mousemove", (e) => {

    for(let i = 0; i < 2; i++){

        const spark = document.createElement("div");

        spark.className = "spark";

        spark.style.left = (e.clientX + (Math.random() * 10 - 5)) + "px";
        spark.style.top = (e.clientY + (Math.random() * 10 - 5)) + "px";

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 800);

    }

});

/* ==========================
   Confetti Celebration
========================== */

const confettiColors = [
    "#ff7eb6",
    "#ffd369",
    "#ffffff",
    "#ff4d8d",
    "#ffc8dd",
    "#ffe066"
];

function launchConfetti(){

    for(let i = 0; i < 180; i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background =
            confettiColors[
                Math.floor(Math.random() * confettiColors.length)
            ];

        piece.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        piece.style.opacity = Math.random();

        piece.style.transform =
            `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);

    }

}

celebrate.addEventListener("click", launchConfetti);

/* ==========================
   Scroll Reveal Animation
========================== */

const revealElements =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/* ==========================
   Begin Our Journey Button
========================== */

const startJourney =
document.getElementById("startJourney");

startJourney.addEventListener("click",()=>{

    document
    .querySelector(".bouquetSection")
    .scrollIntoView({

        behavior:"smooth"

    });

});

/* ==========================
   Floating Ambient Sparkles
========================== */

function ambientSparkle(){

    const star =
    document.createElement("div");

    star.className = "spark";

    star.style.left =
        Math.random()*100+"vw";

    star.style.top =
        Math.random()*100+"vh";

    star.style.width =
        (4+Math.random()*6)+"px";

    star.style.height =
        star.style.width;

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1200);

}

setInterval(ambientSparkle,250);

/* ==========================
   Gentle Hero Glow Pulse
========================== */

const title =
document.querySelector(".title");

setInterval(()=>{

    title.animate([

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.03)"
        },

        {
            transform:"scale(1)"
        }

    ],{

        duration:2500

    });

},3000);

/* ==========================
   Bouquet Hover Animation
========================== */

const flowers =
document.querySelectorAll(".flower");

flowers.forEach((flower)=>{

    flower.addEventListener("mouseenter",()=>{

        flower.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.2) rotate(12deg)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:700

        });

    });

});

/* ==========================
   Romantic Background Glow
========================== */

setInterval(()=>{

    document.body.animate([

        {
            filter:"brightness(1)"
        },

        {
            filter:"brightness(1.08)"
        },

        {
            filter:"brightness(1)"
        }

    ],{

        duration:6000

    });

},6000);

/* ==========================
   Love Quote Rotation
========================== */

const romanticQuotes = [

"Every heartbeat whispers your name ❤️",

"I'd choose you in every lifetime.",

"You are my favorite place to call home.",

"Distance means so little when someone means everything.",

"My forever begins with you."

];

const subtitle =
document.querySelector(".subtitle");

let quoteIndex = 0;

setInterval(()=>{

    quoteIndex++;

    if(quoteIndex >= romanticQuotes.length){

        quoteIndex = 0;

    }

    subtitle.style.opacity = 0;

    setTimeout(()=>{

        subtitle.innerHTML =
        romanticQuotes[quoteIndex];

        subtitle.style.opacity = 1;

    },400);

},6000);

/* ==========================
   Double Click Anywhere ❤️
========================== */

document.addEventListener("dblclick",(e)=>{

    const heart =
    document.createElement("div");

    heart.className="heart";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.animationDuration="3s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3000);

});

/* ==========================
   Ending Message
========================== */

console.log(
"%cForever & Always ❤️",
"font-size:28px;color:#ff4d8d;font-weight:bold;"
);

console.log(
"%cMade with love.",
"font-size:16px;color:#ffd369;"
);
