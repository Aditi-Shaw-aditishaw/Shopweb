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