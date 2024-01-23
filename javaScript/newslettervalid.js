function checkNewsletter() {
  const errText = document.getElementById("newsletter-err-text");
  const newsletterLabel = document.getElementById("newsletter").value;

  errText.style.display = "none";
  errText.innerHTML = "Please enter your email!";
  errText.style.color = "red";

  if (
    newsletterLabel == "" ||
    !newsletterLabel.includes("@") ||
    !newsletterLabel.includes(".")
  ) {
    errText.style.display = "block";
    setTimeout(clearText, 10000);
    return;
  }

  errText.style.color = "green";
  errText.innerHTML = "Added Your email to the newsletter";
  errText.style.display = "block";
  setTimeout(clearText, 10000);
}

function clearText() {
  const errText = document.getElementById("newsletter-err-text");
  errText.style.display = "none";
}
