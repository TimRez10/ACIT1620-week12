const clickMeB = document.querySelector(".clickme");
// console.log(clickMeB);

function clickHandler () {
    alert("Downloading virus...");
    // clickMeB.removeEventListener("click",clickHandler);
}

// clickMeB.addEventListener("click",clickHandler,{once:true});

function pinkBackground () {
    if (clickMeB.textContent === "Click me") {
        clickMeB.textContent = "Clicked!";}
    else {clickMeB.textContent = "Click me";}
    // document.body.style.backgroundColor = "pink";
    document.body.classList.toggle("pink-backgound");
}

clickMeB.addEventListener("click",pinkBackground);