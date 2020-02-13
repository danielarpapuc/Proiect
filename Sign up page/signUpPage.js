document.getElementById("sign-up").addEventListener("click", createUserAccount);

function createUserAccount(e) {
    const userDatabase = [];
    const firstNameValue = document.getElementById("first-name").value;
    const lastNameValue = document.getElementById("last-name").value;
    const emailAddressValue = document.getElementById("email-address").value;
    const passwordValue = document.getElementById("password").value;
    const cityValue = document.getElementById("city").value;
    const countryValue = document.getElementById("country").value;
    e.preventDefault()
    const userAccount = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        emailAddress: emailAddressValue,
        password: passwordValue,
        city: cityValue,
        country: countryValue
    }

    console.log(userAccount);
    userDatabase.push(userAccount);
    console.log(userDatabase)
    console.log(userAccount.firstNameValue.length)
}

city.addEventListener("change", unlockCountryField);
function unlockCountryField() {
    countryValue.firstElementChild.textContent = "Select country";
    countryValue.removeAttribute("disabled");
   countryValue.style.backgroundColor = "white";
}
const eyeIcon = document.getElementById("eye-icon")
eyeIcon.addEventListener("click", showPassword);
 function showPassword () {
    console.log(passwordValue)
    //  if(passwordValue.type = "password") {
    //      console.log(passwordValue)
    //  } 
     passwordValue.removeAttribute ("type");
         passwordValue.setAttribute("type", "text")
     console.log(passwordValue)
    //  else {
    //      console.log("WOOOOW")
    //  }
 }
