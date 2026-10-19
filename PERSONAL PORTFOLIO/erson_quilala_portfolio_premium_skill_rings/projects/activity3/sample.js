const button1 = document.getElementById("loadBtn")
const state = document.getElementById("state")
const status = document.getElementById("status")
const result = document.getElementById("result")

button1.addEventListener("click", function(){
    button1.disabled = true
    let ajaxRequest = new XMLHttpRequest()

    state.innerHTML = "readyState: " + ajaxRequest.readyState
    status.innerHTML = "Waiting..."
    result.innerHTML = "No data yet"

    ajaxRequest.onreadystatechange = function () {
        state.innerHTML = "readyStatus: " + ajaxRequest.readyState

        if (ajaxRequest.readyState == 4) {
            button1.disabled = false

            if (ajaxRequest.status == 200) {
                status.innerHTML = "readyState: " + ajaxRequest.status + "-" + ajaxRequest.statusText
                result.innerHTML = ajaxRequest.responseText
            } else {
                status.innerHTML = "readyState: " + ajaxRequest.status + "-" + ajaxRequest.statusText
                result.innerHTML = "Request failed."
            }
        }
    }

    ajaxRequest.onerror = function(){
        button1.disabled = false
        status.innerHTML = "Request error"
        result.innerHTML = "Request failed."
    }

    ajaxRequest.open("GET", "https://jsonplaceholder.typicode.com/users/1", true)
    ajaxRequest.send()
})
