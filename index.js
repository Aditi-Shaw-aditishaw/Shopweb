const form = document.getElementById("registration-form");
const table = document.getElementById("users").getElementsByTagName('tbody')[0];

// Load existing users from local storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Add existing users to the table
users.forEach(function(user) {
    addRow(user.name, user.email, user.password, user.dob, user.terms);
});

// Add a new user to the table and store it in local storage
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const dob = form.elements.dob.value;
    const terms = form.elements.terms.checked;

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Validate age
    const birthDate = new Date(dob);
    const age = calculateAge(birthDate);
    if (age < 18 || age > 55) {
        alert("You must be between 18 and 55 years old to register");
        return;
    }

    // Add the new user to the table and local storage
    addRow(name, email, password, dob, terms);
    users.push({ name, email, password, dob, terms });
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form
    form.reset();
});

// Add a new row to the table
function addRow(name, email, password, dob, terms) {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    const passwordCell = row.insertCell();
    const dobCell = row.insertCell();
    const termsCell = row.insertCell();

    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    dobCell.textContent = dob;
    termsCell.textContent = terms ? "Yes" : "No";
}

let validEmail = emailInput.checkValidity();
let age = calculateAge(new Date(dobInput.value));

if (!validEmail) {
    alert('Please enter a valid email address');
    return;
}

if (age < 18 || age > 55) {
    alert('You must be between 18 and 55 years old to register');
    return;
}