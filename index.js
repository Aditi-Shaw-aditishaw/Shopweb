const form = document.getElementById("registration-form");
const entriesList = document.getElementById("entries-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const dob = new Date(form.elements.dob.value);
    const dobError = document.getElementById("dob-error");
    const age = getAge(dob);

    if (age < 18 || age > 55) {
        dobError.textContent = "You must be between 18 and 55 years old to register.";
        return;
    } else {
        dobError.textContent = "";
    }

    const entry = document.createElement("li");
    entry.textContent = `${name} (${email}), born on ${dob.toDateString()}`;
    entriesList.appendChild(entry);
    form.reset();
});

function getAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

function validateForm() {
    let dobInput = document.getElementById("dob");
    let dob = new Date(dobInput.value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18 || age > 55) {
        let errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "You must be between 18 and 55 years old.";
        errorMessage.style.display = "block";
        return false;
    }

    let entries = document.getElementById("entries");
    entries.innerHTML += "<p>" + dobInput.value + "</p>";
}

function addEntry() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;

    // Create a new entry element
    var entry = document.createElement("div");
    entry.innerHTML = "<b>Name:</b> " + name + "<br>" +
        "<b>Email:</b> " + email + "<br>" +
        "<b>dob</b> " + dob + "<br>";
    "<b>password:</b> " + password + "<br>";

    // Append the new entry to the entries box
    var entriesBox = document.getElementById("entries-box");
    entriesBox.appendChild(entry);
}