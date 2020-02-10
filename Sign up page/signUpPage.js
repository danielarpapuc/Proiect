document.getElementById("sign-up").addEventListener("click", createUserAccount);

function createUserAccount (e) {
    const userDatabase = [];
const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const emailAddress = document.getElementById("email-address").value;
const password = document.getElementById("password").value;
const city = document.getElementById("city").value;
const country = document.getElementById("country").value;
    e.preventDefault()
const userAccount = {
    firstName,
    lastName,
emailAddress,

password,
city, 
country
}

    console.log(emailAddress.pattern)

console.log(userAccount);
userDatabase.push(userAccount);
console.log(userDatabase)
console.log(userAccount.firstName.length)
}



