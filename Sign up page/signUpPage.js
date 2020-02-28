
 const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const emailAddress = document.getElementById("email-address");
    const password = document.getElementById("password");
    const city = document.getElementById("city");
    const country = document.getElementById("country");
    const signUp = document.getElementById("sign-up");
   
const userDatabase = []; 
document.getElementById("logo").addEventListener("click", redirectToHomepage)
function redirectToHomepage () {
    window.location.href = "../Landing page/landingPage.html";
}
const eyeIconButton = document.getElementById("eye-icon")
eyeIconButton.addEventListener("click", showPassword);
 function showPassword () {
     const eyeIcon = document.getElementById("eyeIcon")
    // const passwordField = document.getElementById("password");
    if (password.getAttribute("type") === "password") {
         password.setAttribute("type", "text");
         eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
        //  console.log(password)
    } else {
         password.setAttribute("type", "password");
         eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
         console.log(password)
    }
 }
city.addEventListener("change", unlockCountryField);
function unlockCountryField() {   
    country.firstElementChild.textContent = "Country0";
    country.removeAttribute("disabled");
   country.style.backgroundColor = "white";
}

signUp.addEventListener("click", createUserAccount);
  
function createUserAccount(e) {   
         e.preventDefault(); 
         const userAccount = {
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: emailAddress.value,
        password: password.value,
        city: city.value,
        country: country.value
    }    
   
    if(userAccount.firstName !== "", userAccount.lastName !== "" && userAccount.emailAddress !== "" && userAccount.password !== "" && userAccount.city !== "" && userAccount.country !== ""){
         userDatabase.push(userAccount); 
         console.log(userDatabase);
        //  redirectToHomepage();
    } 
    else {
        document.querySelectorAll(".field1 .field-input").forEach((field) => {
            field.style.border = "1px solid red";
            field.style.backgroundColor = "lightPink";
        })
          }   
}


