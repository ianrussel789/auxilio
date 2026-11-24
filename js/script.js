/* ============ ASSIGNMENT 1 ============ */

function convertCtoF() {
  var c = document.getElementById("celsius").value;

  if (c === "") {
    document.getElementById("ansC").innerHTML = "Please enter a value.";
    return;
  }

  // formula: F = (C * 9/5) + 32
  var f = (c * 9 / 5) + 32;

  document.getElementById("ansC").innerHTML = c + " Celsius = " + f.toFixed(2) + " Fahrenheit";
}

function convertFtoC() {
  var f = document.getElementById("fahrenheit").value;

  if (f === "") {
    document.getElementById("ansF").innerHTML = "Please enter a value.";
    return;
  }

  // formula: C = (F - 32) * 5/9
  var c = (f - 32) * 5 / 9;

  document.getElementById("ansF").innerHTML = f + " Fahrenheit = " + c.toFixed(2) + " Celsius";
}

function convertMtoFt() {
  var m = document.getElementById("meters").value;

  if (m === "") {
    document.getElementById("ansM").innerHTML = "Please enter a value.";
    return;
  }

  // 1 meter = 3.28084 feet
  var ft = m * 3.28084;

  document.getElementById("ansM").innerHTML = m + " meters = " + ft.toFixed(2) + " feet";
}

function convertFttoM() {
  var ft = document.getElementById("feet").value;

  if (ft === "") {
    document.getElementById("ansFt").innerHTML = "Please enter a value.";
    return;
  }

  // 1 foot = 0.3048 meters
  var m = ft * 0.3048;

  document.getElementById("ansFt").innerHTML = ft + " feet = " + m.toFixed(2) + " meters";
}


/* ============ ASSIGNMENT 2 ============ */

function calcTax() {
  var income = parseFloat(document.getElementById("income").value);
  var status = document.getElementById("civilStatus").value;
  var answer = document.getElementById("taxAns");

  if (isNaN(income) || income < 0) {
    answer.innerHTML = "Please enter a valid income.";
    return;
  }

  
  var tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 400000) {
    tax = (income - 250000) * 0.20;
  } else if (income <= 800000) {
    tax = 30000 + (income - 400000) * 0.25;
  } else if (income <= 2000000) {
    tax = 130000 + (income - 800000) * 0.30;
  } else {
    tax = 490000 + (income - 2000000) * 0.35;
  }

  
  if (status === "married") {
    tax = tax * 0.95;
  } else if (status === "head") {
    tax = tax * 0.90;
  }

  var net = income - tax;

  answer.innerHTML =
    "Gross Income: Php " + income.toFixed(2) + "\n" +
    "Civil Status: " + status + "\n" +
    "Tax: Php " + tax.toFixed(2) + "\n" +
    "Net Income: Php " + net.toFixed(2);
}


/* ============ ASSIGNMENT 3 ============ */

function computeAll() {
  var n = parseInt(document.getElementById("nValue").value);
  var answer = document.getElementById("numAns");

  if (isNaN(n) || n < 1) {
    answer.innerHTML = "Please enter a positive number.";
    return;
  }

  
  var factorial = 1;
  var i = 1;
  while (i <= n) {
    factorial = factorial * i;
    i++;
  }

  // sum using DO WHILE loop
  var sum = 0;
  var j = 1;
  do {
    sum = sum + j;
    j++;
  } while (j <= n);

  // average using FOR loop
  var total = 0;
  for (var k = 1; k <= n; k++) {
    total = total + k;
  }
  var average = total / n;

  answer.innerHTML =
    "N = " + n + "\n" +
    "Factorial (while loop) = " + factorial + "\n" +
    "Sum (do-while loop) = " + sum + "\n" +
    "Average (for loop) = " + average.toFixed(2);
}


/* ============ ASSIGNMENT 4 ============ */

function computePayroll() {
  var name = document.getElementById("empName").value;
  var hours = parseFloat(document.getElementById("hoursWorked").value);
  var rate = parseFloat(document.getElementById("hourlyRate").value);
  var otRate = parseFloat(document.getElementById("otRate").value);
  var answer = document.getElementById("payAns");

  if (name === "") {
    answer.innerHTML = "Please enter the employee name.";
    return;
  }

  if (isNaN(hours) || isNaN(rate) || hours < 0 || rate <= 0) {
    answer.innerHTML = "Please enter valid hours and rate.";
    return;
  }

  if (isNaN(otRate)) {
    otRate = 1.5;
  }

  // first 40 hours are regular
  var regularHours = hours;
  var overtimeHours = 0;

  if (hours > 40) {
    regularHours = 40;
    overtimeHours = hours - 40;
  }

  var regularPay = regularHours * rate;
  var overtimePay = overtimeHours * rate * otRate;
  var grossPay = regularPay + overtimePay;

  answer.innerHTML =
    "Employee: " + name + "\n" +
    "Regular Hours: " + regularHours + "\n" +
    "Overtime Hours: " + overtimeHours + "\n" +
    "Regular Pay: Php " + regularPay.toFixed(2) + "\n" +
    "Overtime Pay: Php " + overtimePay.toFixed(2) + "\n" +
    "Gross Pay: Php " + grossPay.toFixed(2);
}
