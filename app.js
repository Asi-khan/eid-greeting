function Message() {
    var name = prompt("Enter your name:");
    if (name !== null && name !== "") {
        var customMessage = prompt("Enter your message:");
        if (customMessage !== null) {
            document.getElementById("greeting-card").innerHTML = "<p>Dear " + name + ",</p><p>" + customMessage + "</p><p>Warm wishes on Eid!</p>";
        }
    }
}