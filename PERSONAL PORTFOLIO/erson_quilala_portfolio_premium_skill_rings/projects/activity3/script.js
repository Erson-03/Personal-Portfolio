$(document).ready(function(){
    $(".title").text("Good Morning!")
    $("p.intro").css("color", "#ffb4d8")

    $("tbody tr:even").css("background", "rgba(91, 140, 255, .09)")
    $("tbody tr:odd").css("background", "rgba(97, 214, 160, .07)")
    $("th").css("background", "#f2b4d0")

    $("#btn").click(function(){
        $("#message").text("You Clicked the Button!")
    })

    $("#btn").dblclick(function(){
        $("#message").text("You Double Clicked the Button!")
    })

    $("#btn").mouseenter(function(){
        $("#message").text("You're Mouse reached the button!")
    })

    $("#btn").mouseleave(function(){
        $("#message").text("You leave your mouse!")
    })

    $("#btn").mousedown(function(){
        $(this).css("background", "#2d9f69")
    })

    $("#btn").mouseup(function(){
        $(this).css("background", "#b54d64")
    })

    $("#name").focus(function(){
        $("#message").text("You Select the Text box!!")
        $(this).css("background", "#3b321c")
    })

    $("#name").blur(function(){
        $("#message").text("You leave the Text input!")
        $(this).css("background", "rgba(91, 140, 255, .08)")
    })

    $("#Course").change(function(){
        $("#message").text($(this).val())
    })

    $("#btn2").click(function(){
        $("#table").stop(true, true).hide("slow")
        $("#message").text("Sample table hidden. Double click the button to show it again.")
    })

    $("#btn2").dblclick(function(){
        $("#table").stop(true, true).show(800)
        $("#message").text("Sample table shown.")
    })
})
