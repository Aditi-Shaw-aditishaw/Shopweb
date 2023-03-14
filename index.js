function saveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var accepted = document.getElementById("accepted").checked;

    if (email.includes('@') && email.includes('.')) {
        var age = new Date(dob);
        var ageInMillis = Date.now() - age.getTime();
        var ageInYears = new Date(ageInMillis).getUTCFullYear() - 1970;
        if (ageInYears >= 18 && ageInYears <= 55) {
            var data = {
                name: name,
                email: email,
                password: password,
                dob: dob,
                accepted: accepted
            };
            var existingData = localStorage.getItem("userData");
            if (existingData) {
                existingData = JSON.parse(existingData);
                existingData.push(data);
                localStorage.setItem("userData", JSON.stringify(existingData));
            } else {
                localStorage.setItem("userData", JSON.stringify([data]));
            }
            displayData();
        } else {
            alert("You must be between 18 and 55 years old to register.");
        }
    } else {
        alert("Invalid email address.");
    }
}

function displayData() {
    var data = localStorage.getItem("userData");
    if (data) {
        data = JSON.parse(data);
        var table = document.getElementById("dataTable");
        table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Password</th><th>DOB</th><th>Accepted terms?</th></tr>";
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(-1);
            var nameCell = row.insertCell(0);
            var emailCell = row.insertCell(1);
            var passwordCell = row.insertCell(2);
            var dobCell = row.insertCell(3);
            var acceptedCell = row.insertCell(4);
            nameCell.innerHTML = data[i].name;
            emailCell.innerHTML = data[i].email;
            passwordCell.innerHTML = data[i].password;
            dobCell.innerHTML = data[i].dob;
            acceptedCell.innerHTML = data[i].accepted ? "Yes" : "No";
        }
    }
}
// function to save user data to local storage
function saveData(name, email, password, dob, accepted) {
    var data = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        accepted: accepted
    };
    // check if data already exists in local storage
    var storedData = JSON.parse(localStorage.getItem("user_data"));
    if (storedData == null) {
        storedData = [];
    }
    // add new data to existing data array
    storedData.push(data);
    // save data back to local storage
    localStorage.setItem("user_data", JSON.stringify(storedData));
}

// function to display user data in a table
function displayData() {
    var data = JSON.parse(localStorage.getItem("user_data"));
    var table = document.getElementById("user_table");
    // clear previous data
    table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Password</th><th>DOB</th><th>Accepted terms?</th></tr>";
    // loop through data and add new rows to table
    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var passwordCell = row.insertCell(2);
        var dobCell = row.insertCell(3);
        var acceptedCell = row.insertCell(4);
        nameCell.innerHTML = data[i].name;
        emailCell.innerHTML = data[i].email;
        passwordCell.innerHTML = data[i].password;
        dobCell.innerHTML = data[i].dob;
        acceptedCell.innerHTML = data[i].accepted ? "Yes" : "No";
    }
}