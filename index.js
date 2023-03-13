let userForm = document.getElementById("user-form");

const retrieveEntries = () => {
    let entries = localStorage.getItem("user-entries");

    if (entries) {

        entries = JSON.parse(entries);
    } else { entries = []; }

    return entries;
}

let userEntries = retrieveEntries(;)

const displayEntries = () => {

    const entries = retrieveEntries();
    entries.map(entry) {};
}

const nameCell '<td class="border px-4 py-2">$(entry.namn)</td>';
const emailCell '<td class="border px-4 py-2">$(entry.email)</td>';
const passwordCell '<td class "border px-4 py-2">$(entry.password)</td>';

const dobcell '<td class" border px-4 py-2">$(entry.dob)</td>'
const acceptTermscell '<td> class="border px-4 py-2">$(entry.acceptedTerms)</td>;'

const row = < tr > { nameCell }
$ { emailcell }
$ { passwordcell }
$ { dobCell }
$ { acceptTernstell } < /tr> |
return row;
.join("\n")

const table = < table class = "table-auto w-full" > < tr >

    <
    th class = "px-4 py-2" > name < /th>

<
th class = "px- py-2" > Email < /t>

<
th class = "px- py-2" > Password < /th> <
    th class = "px- py-2" > dob - < /th>

<
th class = "px-4 py-2" > accepted terms ? < /th>

<
/tr>s{tableEntries} </table >
<
th class = "px-4 py-2" > accepted terms ? < /th> 

<
/tr>s(tableEntries) </table >


let details = document.getElementById("user-entries!");

details.innerHTML = table;

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