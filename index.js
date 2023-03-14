let savedUsers = JSON.parse(localStorage.getItem("users")) || [];

function saveUser(user) {
    savedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(savedUsers));
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

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key
}
