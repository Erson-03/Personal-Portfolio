const Message = document.getElementById("message")
const Button1 = document.getElementById("loadBtn")
const Profile = document.getElementById("profile")
const Grades = document.getElementById("grades")
const Schedule = document.getElementById("schedule")

Button1.addEventListener("click", function(){
    Button1.disabled = true
    Message.innerHTML = "Loading Dashboard..."

    Profile.innerHTML = "Profile: Waiting..."
    Grades.innerHTML = "Grades: Waiting..."
    Schedule.innerHTML = "Schedule: Waiting..."

    ;[Profile, Grades, Schedule].forEach(function(card){
        card.classList.remove("loaded")
        card.classList.add("loading")
    })

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            Profile.innerHTML = "Profile: Loaded!"
            Profile.classList.remove("loading")
            Profile.classList.add("loaded")
            resolve()
        },1000)
    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            Grades.innerHTML = "Grades: Loaded!"
            Grades.classList.remove("loading")
            Grades.classList.add("loaded")
            resolve()
        },2000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            Schedule.innerHTML = "Schedule: Loaded!"
            Schedule.classList.remove("loading")
            Schedule.classList.add("loaded")
            resolve()
        },3000)
    })

    Promise.all([profilePromise, gradesPromise, schedulePromise])
    .then(function(){
        Message.innerHTML = "Dashboard Ready!"
        Button1.disabled = false
    })
})
