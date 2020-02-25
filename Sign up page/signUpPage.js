
 const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const emailAddress = document.getElementById("email-address");
    const password = document.getElementById("password");
    const city = document.getElementById("city");
    const country = document.getElementById("country");
const userDatabase = [{firstName: "Marcel",
lastName: "Userescu",
emailAddress: "marcel@gmail.com",
password: "1234@asdf",
city: "Iasi",
country: "Country 1"}]; 
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
document.getElementById("city").addEventListener("change", unlockCountryField);
function unlockCountryField() {   
    country.firstElementChild.textContent = "Select country";
    country.removeAttribute("disabled");
   country.style.backgroundColor = "white";
}

// const signUp = document.getElementById("sign-up");
// signUp.addEventListener("click", createNewUser)
// function createNewUser () {
//     console.log("ttttt");
//     console.log(countryFied.value);
// }



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
// const newUser = new UserAccount(firstNameValue, lastNameValue, emailAddressValue, passwordValue, cityValue, countryValue)
//     console.log(newUser.bundleUserInfo());
    userDatabase.push(userAccount);
    console.log(userDatabase);
}


