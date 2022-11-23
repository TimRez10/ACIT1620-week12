const clickMeB = document.querySelector(".clickme");
// console.log(clickMeB);

function clickHandler () {
    alert("Downloading virus...");
    // clickMeB.removeEventListener("click",clickHandler);
}

clickMeB.addEventListener("click",clickHandler,{once:true});

