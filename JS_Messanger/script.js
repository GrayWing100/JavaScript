const messageInput = document.getElementById("message-input");

// Trigger getMessage() when the Enter key is pressed
messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") getMessage();
});

function getMessage() {
  // Display the input message in the message-output element
  document.getElementById("message-output").innerHTML = messageInput.value;

  // Clear the input field after the message is submitted
  messageInput.value = "";
}
