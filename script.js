const form = document.querySelector("form"); 
const password1Field = form.password1; 
const password2Field = form.password2; 
const messageDiv = document.createElement("div"); 


form.appendChild(messageDiv);

function checkPasswords() {
    messageDiv.innerHTML = "";
    const password1 = form.password1.value; 
    const password2 = form.password2.value; 
    if (password1 !== password2) {
        const p = document.createElement("p");
        p.innerText = "*Passwords do not match";
        p.style.color = "red";
        messageDiv.appendChild(p);
    }
}

password1Field.addEventListener("input", checkPasswords);
password2Field.addEventListener("input", checkPasswords);