const form = document.querySelector("form");
form.addEventListener("submit" , nameLength);

function nameLength(event){

    event.preventDefault()
    const firstName = String(event.target.firstName.value)
    const lastName = String(event.target.lastName.value)
    const fullName = firstName + " " + lastName
    document.querySelector("h2").innerText = "Hello " + fullName  + "!!!!!!!!" } 