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

displayData();