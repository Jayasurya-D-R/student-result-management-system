function calculateResult() {

    let name = document.getElementById("name").value;

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    if (
        m1 > 100 || m2 > 100 || m3 > 100 ||
        m4 > 100 || m5 > 100 ||
        m1 < 0 || m2 < 0 || m3 < 0 ||
        m4 < 0 || m5 < 0
    ) {
        alert("Marks should be between 0 and 100");
        return;
    }

    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "O";
    }
    else if (percentage >= 80) {
        grade = "A+";
    }
    else if (percentage >= 70) {
        grade = "A";
    }
    else if (percentage >= 60) {
        grade = "B+";
    }
    else if (percentage >= 50) {
        grade = "B";
    }
    else {
        grade = "F";
    }

    let status = percentage >= 50 ? "PASS" : "FAIL";
    let color = percentage >= 50 ? "green" : "red";

    let resultBox = document.getElementById("result");

    resultBox.style.display = "block";

    resultBox.innerHTML = `
        <h3>Result Summary</h3>
        <hr><br>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Total Marks:</strong> ${total} / 500</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>

        <p>
            <strong>Status:</strong>
            <span style="color:${color}; font-weight:bold;">
                ${status}
            </span>
        </p>
    `;
}
