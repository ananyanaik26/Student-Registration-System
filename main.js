function addStudent(){
    // Get input Student values
    let studentName = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let emailId = document.getElementById("email").value;
    let contactNo = document.getElementById("contact").value;

//    / Get the student table and insert new row at the end
    let studentTable = document.getElementById("studentTable");
    let newStudentRow = studentTable.insertRow(studentTable.rows.length);
console.log("studentTable",studentTable.value);
    // Insert student data into cells of new row
    newStudentRow.insertCell(0).innerHTML = studentName;
    newStudentRow.insertCell(1).innerHTML = studentId;
    newStudentRow.insertCell(2).innerHTML = emailId;
    newStudentRow.insertCell(3).innerHTML = contactNo;
    newStudentRow.insertCell(4).innerHTML =
    '<button onclick="editStudent(this)">Edit</button>' +
    '<button onclick="deleteStudent(this)">Delete</button>';
    clearStudent();
    console.log("studentTable",studentTable.value);

    return true;
}

function editStudent(button) {
    //Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    //Get the cells within the row
    let nameCell = row.cells[0];
    let idCell = row.cells[1];
    let emailCell = row.cells[2];
    let contactCell = row.cells[3];

    //Prompt thhe user to add the updated values
    let nameInput = 
        prompt("Enter the updated student name:",
            nameCell.innerHTML);
    let idInput = 
            prompt("Enter the updated student ID:",
                idCell.innerHTML); 
    let emailInput = 
            prompt("Enter the updated student email:",
                emailCell.innerHTML); 
    let contactInput = 
                prompt("Enter the updated student contact:",
                    contactCell.innerHTML);
    
    //Update the cell contents with new values
    nameCell.innerHTML = nameInput;
    idCell.innerHTML = idInput;
    emailCell.innerHTML = emailInput;
    contactCell.innerHTML = contactInput;
}
function deleteStudent(button) {
    //Get the parent row of clicked button
    let row  = button.parentNode.parentNode;
    
    //remove the row from the table
    row.parentNode.removeChild(row);
}

function clearStudent() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
}