
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
document.getElementById("city").addEventListener("change", unlockCountryField);
function unlockCountryField() {
    const countryField = document.getElementById("country");
    countryField.firstElementChild.textContent = "Select country";
    countryField.removeAttribute("disabled");
   countryField.style.backgroundColor = "white";
}











document.getElementById("sign-up").addEventListener("click", createUserAccount);
// class UserAccount {
//     constructor (firstName, lastName, emailAddress, password, city, country) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.emailAddress = emailAddress;
//         this.password = password;
//         this.city = city;
//         this.country = country
//     }
//     bundleUserInfo (){
//         console.log(`FN: ${this.firstName}, LN: ${this.lastName}, EA: ${this.emailAddress}, PW: ${this.password}, CI: ${this.city}, CO: ${this.country}`)
//             }

// }
 const userDatabase = []; 
function createUserAccount(e) {   
         e.preventDefault(); 
   const firstNameValue = document.getElementById("first-name").value;
    const lastNameValue = document.getElementById("last-name").value;
    const emailAddressValue = document.getElementById("email-address").value;
    const passwordValue = document.getElementById("password").value;
    const cityValue = document.getElementById("city").value;
    const countryValue = document.getElementById("country").value;
    const userAccount = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        emailAddress: emailAddressValue,
        password: passwordValue,
        city: cityValue,
        country: countryValue
    }
// const newUser = new UserAccount(firstNameValue, lastNameValue, emailAddressValue, passwordValue, cityValue, countryValue)
//     console.log(newUser.bundleUserInfo());
    userDatabase.push(userAccount);
    console.log(userDatabase)
}


