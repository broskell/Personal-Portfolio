alert("This Portfolio isn't ready yet!!")

function submitForm() {
    let name = document.getElementById("r-name").value;
    let mail = document.getElementById("r-mail").value;
    let msg = document.getElementById("r-msg").value;

    alert('Message sent successfully! I\'ll get back to you soon.');
    console.log(`Name: ${name} \n Mail: ${mail} \n Message: ${msg}`)
}