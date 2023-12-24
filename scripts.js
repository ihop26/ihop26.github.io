const text = document.getElementById("textfield");

function onHover(event){
    text.innerHTML = event.currentTarget.description;
}

function resetText(){
    text.innerHTML = "hi, this is my page. I am learning html/css/js right now. Most of what you see here right will be subject to change.<br><br> Hover over one of my projects on the left to see what I'm up to.<br><br> hi dad.";
}                    
const illinix = document.getElementById("illinix");
illinix.addEventListener("mousemove",onHover);
illinix.addEventListener("mouseleave",resetText);
illinix.description = "Descriptions in progress... Click to see emulated OS";

const dotcollector = document.getElementById("dot");
dotcollector.addEventListener("mouseover",onHover);
dotcollector.addEventListener("mouseleave",resetText);
dotcollector.description = "Click to be taken to the github page where you can learn more.";

const website = document.getElementById("website");
website.addEventListener("mouseover",onHover);
website.addEventListener("mouseleave",resetText);
website.description = "3, descriptions TODO";

