const clickMeB = document.querySelector(".clickme");
// console.log(clickMeB);

function clickHandler () {
    alert("Downloading virus...");
    // clickMeB.removeEventListener("click",clickHandler);
}

// clickMeB.addEventListener("click",clickHandler,{once:true});

function pinkBackground () {
    // document.body.style.backgroundColor = "pink";
    document.body.classList.toggle("pink-backgound");
}

function changeText () {
    if (clickMeB.textContent === "Click me") {
        clickMeB.textContent = "Clicked!";}
    else {clickMeB.textContent = "Click me";}
}

function updateImg(ev) {
    // console.log(ev.target.textContent)
    const missingImg = document.querySelector("#shoppingCart")
    missingImg.setAttribute("src","images/shoppingcart.png")
    missingImg.setAttribute("width","100")
    missingImg.setAttribute("height","100")
    missingImg.setAttribute("alt","Shopping Cart")
    missingImg.setAttribute("style","float: right")
}

clickMeB.addEventListener("click",pinkBackground);
clickMeB.addEventListener("click",changeText);
clickMeB.addEventListener("click",updateImg);


const buttonList = document.querySelector(".button-container")

buttonList.addEventListener("mouseover",greenButton);
buttonList.addEventListener("click",clickOnButton);

function greenButton(ev) {
    if (ev.target.tagName === "BUTTON") {
    ev.target.classList.add("green-background");
    }
}

function clickOnButton(ev) {
    if (ev.target.tagName === "BUTTON") {
    ev.target.style.color = ev.target.textContent
    }
}