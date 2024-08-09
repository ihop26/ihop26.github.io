const text = document.getElementById("textfield");

function onHover(event){
    text.innerHTML = event.currentTarget.description;
}

function resetText(){
    text.innerHTML = "hi, this is my page. It is very much _under_construction_. Most of what you see here will be subject to change.<br><br> Hover over one of my projects on the left to see what I'm up to. ";
}                    

const illinix = document.getElementById("illinix");
illinix.description = "Completed in December 2023 as a final project for ECE391 (Computer Systems Programming). Click to be brought to the emulator.";
illinix.addEventListener("mouseover",onHover);
illinix.addEventListener("mouseleave",resetText);

const dotcollector = document.getElementById("dot");
dotcollector.description = "Click to be taken to the github page where you can learn more.";
dotcollector.addEventListener("mouseover",onHover);
dotcollector.addEventListener("mouseleave",resetText);


const website = document.getElementById("website");
website.description = "Congrats, you're already here! This started as a side project during the early months of 2024";
website.addEventListener("mouseover",onHover);
website.addEventListener("mouseleave",resetText);

resetText();


