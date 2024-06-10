const firebaseConfig = {
    apiKey: "AIzaSyCqJDt3vrOiJNmq7MFS8w28K9Pgz7PWFb0",
    authDomain: "smartfactory-f258b.firebaseapp.com",
    databaseURL: "https://smartfactory-f258b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smartfactory-f258b",
    storageBucket: "smartfactory-f258b.appspot.com",
    messagingSenderId: "1039122677272",
    appId: "1:1039122677272:web:ed7735b734d0b5254c0d6d",
    measurementId: "G-P9RP1BPNRC"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

let list = document.querySelectorAll(".navigation li");
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let personal = document.querySelector(".personal");
let main = document.querySelector(".main");
const area = document.getElementById("area");
const node = document.getElementById("node");
const Sensor = document.getElementById("sensor");
const drop = document.getElementsByClassName("dropdown-content");
const Temp = document.getElementById("Temp");
const Humi = document.getElementById("Humidity");
const Light = document.getElementById("Luminosity");
const PM1 = document.getElementById("PM1");
const PM25 = document.getElementById("PM2_5");
const PM10 = document.getElementById("PM10");
const CO2 = document.getElementById("CO2");
const gateway = document.getElementById("Gateway");
const Submit = document.getElementById("Submit");


Sensor.onclick = function () {
    for (var i = 0; i < drop.length; i++) {
        var style = window.getComputedStyle(drop[i]);
        if (style.display === "none") {
            drop[i].style.display = "block";
        } else {
            drop[i].style.display = "none";
        }
    }
};

Temp.onclick = function () {
    Sensor.value = "Temperature"
    localStorage.setItem('sensor', Sensor.value);
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Humi.onclick = function () {
    Sensor.value = "Humidity"
    localStorage.setItem('sensor', Sensor.value);
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Light.onclick = function () {
    Sensor.value = "Luminosity"
    localStorage.setItem('sensor', Sensor.value);
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

PM1.onclick = function () {
    Sensor.value = "PM1"
    localStorage.setItem('sensor', Sensor.value);
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

PM25.onclick = function () {
    Sensor.value = "PM2_5"
    localStorage.setItem('sensor', Sensor.value);
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

PM10.onclick = function () {
    Sensor.value = "PM10"
    localStorage.setItem('sensor', Sensor.value);
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

CO2.onclick = function () {
    Sensor.value = "CO2"
    localStorage.setItem('sensor', Sensor.value);
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Submit.onclick = function () {
    if (area.value === "" || node.value === "" || Sensor.value === "") {
        swal(
            "",
            "Choose Area, Node and Sensor before submit",
            "error"
        );
    } else if (area.value <= 0) {
        swal(
            "",
            "Choose Area greater than 0",
            "error"
        );
    } else if (node.value <= 0) {
        swal(
            "",
            "Choose Node greater than 0",
            "error"
        );
    } else {
        localStorage.setItem('areahistory', area.value);
        localStorage.setItem('nodehistory', node.value);
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(initCharts);
    }
};

Array.from(list).forEach(icon => {
    icon.addEventListener("mouseenter", function () {
        this.classList.add("hovered");
    });

    icon.addEventListener("mouseleave", function () {
        this.classList.remove("hovered");
    });
});

Array.from(list).forEach(item => {
    item.addEventListener("click", function () {
        Array.from(list).forEach(item => item.classList.remove("active-icon"));
        this.classList.add("active-icon");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let firstListItem = list[4];
    firstListItem.classList.add("active-icon");
});

toggle.onclick = function () {
    navigation.classList.toggle("active");
    personal.classList.toggle("active");
    main.classList.toggle("active");

    let isActive = navigation.classList.contains("active");
    document.cookie = "taskbarState=" + (isActive ? "active" : "inactive");
};


window.onload = function () {
    let taskbarState = getCookie("taskbarState");
    if (taskbarState === "active") {
        navigation.classList.add("active");
        personal.classList.add("active");
        main.classList.add("active");
    }
};

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return "";
}

function initCharts() {
    setInterval(drawCharts, 60000);
    drawCharts();
    setInterval(drawTable, 60000);
    drawTable();
}

function drawCharts() {
    var spreadsheetId = '1bnuGSs-aoOUC_mMkFsNrdThJZXNRk3lZs9uh9OvK-8Q';
    var Area = area.value;
    var Node = node.value;
    var sensor = Sensor.value;
    if (sensor == "Temperature") {
        var column = 'B';
        var number = 1;
    }
    else if (sensor == "Humidity") {
        var column = 'C';
        var number = 2;
    }
    else if (sensor == 'PM1') {
        var column = 'D';
        var number = 3;
    }
    else if (sensor == 'PM2_5') {
        var column = 'E';
        var number = 4;
    }
    else if (sensor == 'PM10') {
        var column = 'F';
        var number = 5;
    }
    else if (sensor == 'CO2') {
        var column = 'G';
        var number = 6;
    }
    else if (sensor == "Luminosity") {
        var column = 'H';
        var number = 7;
    }
    var queryA = new google.visualization.Query(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=AREA${Area}_NODE${Node}&range=A1:${column}192307`);
    queryA.send(function (response) {
        handleQueryResponseChart(response, 'chart', sensor, number);
    });
}

function drawTable() {
    var spreadsheetId = '1bnuGSs-aoOUC_mMkFsNrdThJZXNRk3lZs9uh9OvK-8Q';
    var Area = area.value;
    var Node = node.value;
    var sensor = Sensor.value;
    if (sensor == "Temperature") {
        var column = 'B';
        var number = 1;
    }
    else if (sensor == "Humidity") {
        var column = 'C';
        var number = 2;
    }
    else if (sensor == 'PM1') {
        var column = 'D';
        var number = 3;
    }
    else if (sensor == 'PM2_5') {
        var column = 'E';
        var number = 4;
    }
    else if (sensor == 'PM10') {
        var column = 'F';
        var number = 5;
    }
    else if (sensor == 'CO2') {
        var column = 'G';
        var number = 6;
    }
    else if (sensor == "Luminosity") {
        var column = 'H';
        var number = 7;
    }
    var queryA = new google.visualization.Query(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=AREA${Area}_NODE${Node}&range=A1:${column}192307`);
    queryA.send(function (response) {
        handleQueryResponseTable(response, 'table-container', number);
    });
}

function handleQueryResponseChart(response, elementId, title, columnIndex) {
    if (response.isError()) {
        console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();

    var newData = [];
    for (var i = 0; i < data.getNumberOfRows(); i++) {
        var dateStr = data.getValue(i, 0);
        var value = data.getValue(i, columnIndex);
        newData.push([dateStr, value]);
    }

    newData.sort(function (a, b) {
        return a[0] - b[0];
    });

    var sortedData = new google.visualization.DataTable();
    sortedData.addColumn('datetime', 'Time');
    sortedData.addColumn('number', title);
    sortedData.addRows(newData);

    var options = {
        title: title,
        hAxis: {
            title: 'Time',
            format: 'HH:mm',
            gridlines: { count: 30 }

        },
        vAxis: {
            title: title,
            minValue: 0,
            gridlines: { count: 10 }
        },
        curveType: 'function',
        legend: { position: 'bottom' },
        explorer: {
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomIn: 1000.0
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById(elementId));
    chart.draw(sortedData, options);
}


function handleQueryResponseTable(response, containerId, ColumnNum) {
    if (response.isError()) {
        console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();

    var table = document.createElement('table');
    table.classList.add('data-table');

    var headerRow = document.createElement('tr');

    var headerCellA = document.createElement('th');
    headerCellA.textContent = data.getColumnLabel(0);
    headerRow.appendChild(headerCellA);

    var selectedColumnLabel = data.getColumnLabel(ColumnNum);
    var headerCellSelected = document.createElement('th');
    headerCellSelected.textContent = selectedColumnLabel;
    headerRow.appendChild(headerCellSelected);
    table.appendChild(headerRow);

    for (var i = data.getNumberOfRows() - 1; i >= 0; i--) {
        var row = document.createElement('tr');

        var cellA = document.createElement('td');
        cellA.textContent = data.getFormattedValue(i, 0);
        row.appendChild(cellA);
        var cellData = document.createElement('td');
        cellData.textContent = data.getFormattedValue(i, ColumnNum);
        row.appendChild(cellData);

        table.appendChild(row);
    }

    var container = document.getElementById(containerId);
    container.innerHTML = '';
    container.appendChild(table);
}

window.onload = function () {

    if (localStorage.getItem('Login') == 'True') {
    } else {
        db.ref('/Login').update({
            "User": "None"
        });
    }

    var storedSensor = localStorage.getItem('sensor');
    var storedArea = localStorage.getItem('areahistory');
    var storedNode = localStorage.getItem('nodehistory');

    if (storedSensor) {
        Sensor.value = storedSensor;
    }
    if (storedArea) {
        area.value = storedArea;
    }
    if (storedNode) {
        node.value = storedNode;
    }
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(initCharts);

    firebase.database().ref("/Login").on('value', function (snapshot) {
        var Remember = snapshot.val()
        if (Remember["User"] == "None") {
            window.location.href = "Index.html";
        } else {
            Account.innerText = Remember["User"]
        }
    })

    setInterval(function () {
        db.ref('/FactoryControl/PassHW').once('value', function (snapshot) {
            var Disconnect = snapshot.val()
            if (Disconnect["Test"] === 1 || Disconnect["Test"] === 0) {
                db.ref('/FactoryControl/PassHW').update({
                    "Test": 2
                });
            }
        });

        setTimeout(function () {
            db.ref('/FactoryControl/PassHW').once('value', function (snapshot) {
                var Disconnect = snapshot.val()
                if (Disconnect["Test"] !== 1) {
                    db.ref('/FactoryControl/PassHW').update({
                        "Test": 0
                    });
                    swal(
                        "",
                        "Unable to connect to the gateway",
                        "warning"
                    )
                }
            });
        }, 30000);
    }, 120000);



    db.ref('/FactoryControl/PassHW').on('value', function (snapshot) {
        var Disconnect = snapshot.val()
        if (Disconnect["Test"] == 1) {
            gateway.style.color = "green";
        } else if (Disconnect["Test"] == 0) {
            gateway.style.color = "red";
        } else if (Disconnect["Test"] == 2) {
            gateway.style.color = "white";
        }
    })

    db.ref('/Disconnect').on('value', function (snapshot) {
        var Disconnect = snapshot.val();
        if (Disconnect["Disconnect"] == 1 && Disconnect["Confirm"] == 0) {
            swal(
                "",
                "Area " + Disconnect["Area"] + ", Node " + Disconnect["Node"] + " disconnected from the server",
                "warning"
            ).then((value) => {
                if (value) {
                    db.ref('/Disconnect').update({
                        "Confirm": 1
                    });
                }
            });
        }
    });

};

var url = 'https://script.google.com/macros/s/AKfycbwdDCfe5mVaAifxteFWNr7AkzzJX-FujNtQ5ATUsGh9AjwO7uJjrQQOHUw1-T1NV9gkCg/exec';

var Ngay_hien_tai = new Date().getDate();
var Thang_hien_tai = new Date().getMonth() + 1;
var Nam_hien_tai = new Date().getFullYear();
var Gio_hien_tai = new Date().getHours();
var Phut_hien_tai = new Date().getMinutes();
var Giay_hien_tai = new Date().getSeconds();
Ngay_hien_tai = Ngay_hien_tai < 10 ? "0" + Ngay_hien_tai : Ngay_hien_tai;
Thang_hien_tai = Thang_hien_tai < 10 ? "0" + Thang_hien_tai : Thang_hien_tai;
var DateTime = Ngay_hien_tai + "/" + Thang_hien_tai + "/" + Nam_hien_tai + " " + Gio_hien_tai + ":" + Phut_hien_tai + ":" + Giay_hien_tai

db.ref('/FactoryControl/Control').on('value', function (snapshot) {
    var Switch = snapshot.val();
    if (Switch["Dev 1"] == 1) {
        var Switch1 = "ON";
    } else if (Switch["Dev 1"] == 0) {
        Switch1 = "OFF";
    }
    if (Switch["Dev 2"] == 1) {
        var Switch2 = "ON";
    } else if (Switch["Dev 2"] == 0) {
        Switch2 = "OFF";
    }
    if (Switch["Dev 3"] == 1) {
        var Switch3 = "ON";
    } else if (Switch["Dev 3"] == 0) {
        Switch3 = "OFF";
    }
    if (Switch["Dev 4"] == 1) {
        var Switch4 = "ON";
    } else if (Switch["Dev 4"] == 0) {
        Switch4 = "OFF";
    }
    var data = {
        DATE: DateTime,
        AREA: Switch["Area"],
        NODE: Switch["Node"],
        RELAY1: Switch1,
        RELAY2: Switch2,
        RELAY3: Switch3,
        RELAY4: Switch4
    }

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: data
    });
});

function alertrSenor(data) {
    var alertMessage = "";

    if (data.Temp > 60) {
        alertMessage += "high temperature: " + data.Temp + " °C<br>";
        data.Temp = "high";
    }
    if (data.PM1 > 70) {
        alertMessage += "high PM1: " + data.PM1 + " µg/m³<br>";
        data.PM1 = "high";
    }
    if (data.PM25 > 80) {
        alertMessage += "high PM2.5: " + data.PM25 + " µg/m³<br>";
        data.PM25 = "high";
    }
    if (data.PM10 > 155) {
        alertMessage += "high PM10: " + data.PM10 + " µg/m³<br>";
        data.PM10 = "high";
    }
    if (data.CO2 > 2000) {
        alertMessage += "high CO2: " + data.CO2 + " ppm<br>";
        data.CO2 = "high";
    }
    if (data.Fire == "Y") {
        alertMessage += "Fire" + "<br>";
        data.Fire = "Fire";
    }
    if (alertMessage !== "") {
        swal("Alert!", "Area " + data.Area + ", Node " + data.Node + "<br>" + alertMessage, "warning", { html: true }).then((value) => {
            if (value) {
                db.ref('/Factory/Sensor').update({
                    "Temp": data.Temp,
                    "PM1": data.PM1,
                    "PM25": data.PM25,
                    "PM10": data.PM10,
                    "CO2": data.CO2,
                    "Fire": data.Fire
                });
            }
        });
    }
}

db.ref('/Factory/Sensor').on('value', function (snapshot) {
    var data = snapshot.val();
    alertrSenor(data);
});