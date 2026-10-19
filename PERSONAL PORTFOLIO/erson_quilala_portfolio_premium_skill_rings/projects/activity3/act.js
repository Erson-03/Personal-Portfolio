$(document).ready(function(){
    $("#changeTitle").click(function(){
        $("#title").text("Welcome, Students!")
        $("#message").text("About: Try the Change Title button.")
    })

    $("#hideProfile").click(function(){
        $("#profile").stop(true, true).slideUp(250)
        $("#message").text("Profile hidden.")
    })

    $("#showProfile").click(function(){
        $("#profile").stop(true, true).slideDown(250)
        $("#message").text("Profile shown.")
    })

    $("#course").change(function(){
        const course = $(this).val()
        $("#courseMessage").text(course ? course : "No course selected.")
    })

    $("#oddRows").click(function(){
        $("#studentTable tbody tr").removeClass("highlight")
        $("#studentTable tbody tr:odd").addClass("highlight")
        $("#rowMessage").text("Odd rows applied.")
    })

    $("#evenRows").click(function(){
        $("#studentTable tbody tr").removeClass("highlight")
        $("#studentTable tbody tr:even").addClass("highlight")
        $("#rowMessage").text("Even rows applied.")
    })
})
