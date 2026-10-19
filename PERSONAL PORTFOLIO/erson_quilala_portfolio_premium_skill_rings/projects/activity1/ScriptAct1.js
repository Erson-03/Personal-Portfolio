console.log("document")

const nickname = document.getElementById("nickname")
const name = document.getElementById("name")
const year = document.getElementById("year")
const message = document.getElementById("message")
const message1 = document.getElementById("message1")
const click = document.getElementById("click")
const double = document.getElementById("double")
const hold = document.getElementById("hold")
const Image1 = document.getElementById("Img1")
const box1 = document.getElementById("box1")

click.addEventListener("click", function(){
    name.innerHTML = "Future Web Developer"
    message.innerHTML = "Click Detected!"
})

double.addEventListener("dblclick", function(){
    double.style.backgroundColor = "LightBlue"
    message.innerHTML = "Double Clicked Detected!"
})

box1.addEventListener("mouseenter", function(){
    message1.innerHTML = "You're inside the box"
})

box1.addEventListener("mouseleave", function(){
    message1.innerHTML = "You're outside the box"
})

nickname.addEventListener("focus", function (){
    message.innerHTML = "Input is Active"
})

nickname.addEventListener("blur", function (){
    message.innerHTML = "Welcome Back!"
})

nickname.addEventListener("input", function(){
    message.innerHTML = "Future Web Developer"
    name.innerHTML = nickname.value.trim() || "Future Web Developer"
})

year.addEventListener("change", function(){
    message.innerHTML = year.value
})

Image1.addEventListener("mouseenter", function(){
    message.innerHTML = " Your mouse is over the image!"
    Image1.style.transform = "scale(1.12)"
})

Image1.addEventListener("mouseleave", function(){
    message.innerHTML = "Welcome Back!"
    Image1.style.transform = "scale(1)"
})

function startHold(){
    message.innerHTML = "You have the Force"
    hold.classList.add("is-held")
}

function endHold(){
    message.innerHTML = "Welcome Back!"
    hold.classList.remove("is-held")
}

hold.addEventListener("pointerdown", startHold)
hold.addEventListener("pointerup", endHold)
hold.addEventListener("pointerleave", endHold)
hold.addEventListener("pointercancel", endHold)
