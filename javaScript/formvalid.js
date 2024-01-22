function validateForm() {
  const nameInput = document.getElementById("name").value; // getting the value of the name Field
  const emailInput = document.getElementById("email").value; // getting the value of the email Field
  const messageInput = document.getElementById("message").value; // getting the value of the message Field

  const nameLabel = document.getElementById("name-err"); // getting the error span for name field
  const emailLabel = document.getElementById("email-err"); // getting the error span for email field
  const messageLabel = document.getElementById("message-err"); // getting the error span for message field

  const successComponent = document.getElementById("successComponent");
  const successMsgName = document.getElementById("successMsgName");

  // setting the default to none for all error texts.
  clearErrorMessages();

  // showing the name span if name input is empty
  if (nameInput == "") {
    nameLabel.style.display = "block";
  }

  // showing the email span if email input is empty
  if (emailInput == "") {
    emailLabel.style.display = "block";
  }

  // showing the message span if message input is empty
  if (messageInput == "") {
    messageLabel.style.display = "block";
  }

  if (nameInput != "" && emailInput != "" && messageInput != "") {
    successMsgName.innerHTML = nameInput;
    successComponent.style.display = "block";

    setTimeout(() => {
      successComponent.style.display = "none";
    }, 5000);
  }

  // hiding the error messages after 5 seconds
  setTimeout(clearErrorMessages, 10000);
}

// function to clear all error messages.
function clearErrorMessages() {
  const nameLabel = document.getElementById("name-err");
  const emailLabel = document.getElementById("email-err");
  const messageLabel = document.getElementById("message-err");

  nameLabel.style.display = "none";
  emailLabel.style.display = "none";
  messageLabel.style.display = "none";
}
