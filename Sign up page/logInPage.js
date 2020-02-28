const emailAddress = document.getElementById("email-address");
const password = document.getElementById("password");
const signIn = document.querySelector(".sign-in");
const userDatabase = [
        {firstName: "clara",
    lastName: "pascu",
    emailAddress: "cpascu@gmail.com",
    password: "Password@123",
    city: "iasi",
    country: "country1"}
    ]; 
document.getElementById("logo").addEventListener("click", redirectToHomepage)
function redirectToHomepage () {
    window.location.href = "../Landing page/landingPage.html";
}
const eyeIconButton = document.getElementById("eye-icon")
eyeIconButton.addEventListener("click", showPassword);
 function showPassword () {
     const eyeIcon = document.getElementById("eyeIcon")
    const passwordField = document.getElementById("password");
    if (passwordField.getAttribute("type") === "password") {
         passwordField.setAttribute("type", "text");
         eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
         console.log(passwordField)
    } else {
         passwordField.setAttribute("type", "password");
         eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
         console.log(passwordField)
    }
 }
 signIn.addEventListener("click", logIn)
 function logIn () {
         if(emailAddress.value !== "" && password.value !== "") {
 redirectToHomepage();
         } else {
            document.querySelectorAll(".field1 .field-input").forEach((field) => {
                field.style.border = "1px solid red";
                field.style.backgroundColor = "lightPink";
            })
         }
 }