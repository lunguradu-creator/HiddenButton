document.getElementById("generateButton").addEventListener("click", function () {
    var numberInput = parseInt(document.getElementById("numberInput").value);
    if (isNaN(numberInput)) {
        alert("Please enter a valid number.");
        return;
    }

    var buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = ""; // Clear previous buttons

    var winningIndex = Math.floor(Math.random() * numberInput);

    for (var i = 0; i < numberInput; ++i) {
        var button = document.createElement("button");
        button.textContent = "Feeling lucky? " + (i + 1);
        button.classList.add("btn", "btn-danger"); // Add Bootstrap classes
        button.type = "button"; // Set button type
        button.addEventListener("click", function () {
            if (this === buttonsContainer.children[winningIndex]) {
                alert("WINNER - CONGRATULATIONS!");
            } else {
                alert("TRY AGAIN!");
            }
        });
        buttonsContainer.appendChild(button);
    }
});
