const form = document.getElementById('regForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const dobInput = document.getElementById('dob');
const termsInput = document.getElementById('terms');
const userTableBody = document.getElementById('userTableBody');

// Load previously saved entries from local storage
let savedEntries = JSON.parse(localStorage.getItem('entries')) || [];

// Display previously saved entries in the table
for (let i = 0; i < savedEntries.length; i++) {
    let user = savedEntries[i];
    let row = document.createElement('tr');
    row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.password}</td><td>${user.dob}</td><td>${user.acceptedTerms ? 'Yes' : 'No'}</td>`;
    userTableBody.appendChild(row);
}

form.addEventListener('submit'), (event) => {
    event.preventDefault();
    // Create a new user object
    let newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        dob: dobInput.value,
        acceptedTerms: termsInput.checked
    };
}
const registrationForm = document.querySelector('#registration-form');
const entriesTable = document.querySelector('#entries-table tbody');

function addEntryToTable(name, email, password, dob, acceptedTerms) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${acceptedTerms ? 'Yes' : 'No'}</td>
  `;
    entriesTable.appendChild(newRow);
}

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const dob = document.querySelector('#dob').value;
    const acceptedTerms = document.querySelector('input[name="accept-terms"]').checked;

    const dobDate = new Date(dob);
    const age = new Date(Date.now() - dobDate.getTime()).getUTCFullYear() - 1970;

    if (age < 18 || age > 55) {
        alert('You must be between 18 and 55 years old to register.');
        return;
    }

    if (!email.includes('@')) {
        alert('Invalid email address.');
        return;
    }
    addEntryToTable(name, email, password, dob, acceptedTerms);

    localStorage.setItem(email, JSON.stringify({
        name,
        email,
        password,
        dob,
        acceptedTerms,
    }));

    registrationForm.reset();
});