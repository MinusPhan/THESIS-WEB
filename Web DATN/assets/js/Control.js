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

var url = 'https://script.google.com/macros/s/AKfycbwdDCfe5mVaAifxteFWNr7AkzzJX-FujNtQ5ATUsGh9AjwO7uJjrQQOHUw1-T1NV9gkCg/exec';

let list = document.querySelectorAll(".navigation li");
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let personal = document.querySelector(".personal");
let main = document.querySelector(".main");
const Account = document.getElementById("Account");
const toggleSwitches = document.querySelectorAll('input[type="checkbox"]');
const CBONOFF = document.getElementById("relayOnOff");
const toggleSwitchOnOff = document.getElementById("toggleSwitchOnOff");
const CBAudio = document.getElementById("relayAudio");
const toggleSwitchAudio = document.getElementById("toggleSwitchAudio");
const Relay1 = document.getElementById("relay1");
const toggleSwitch1 = document.getElementById("toggleSwitch1");
const Relay2 = document.getElementById("relay2");
const toggleSwitch2 = document.getElementById("toggleSwitch2");
const Relay3 = document.getElementById("relay3");
const toggleSwitch3 = document.getElementById("toggleSwitch3");
const Relay4 = document.getElementById("relay4");
const toggleSwitch4 = document.getElementById("toggleSwitch4");
const area = document.getElementById("area");
const node = document.getElementById("node");
const Submit = document.getElementById("Submit");
const Status = document.getElementById("Status");
const gateway = document.getElementById("Gateway");

var Ngay_hien_tai = new Date().getDate();
var Thang_hien_tai = new Date().getMonth() + 1;
var Nam_hien_tai = new Date().getFullYear();
var Gio_hien_tai = new Date().getHours();
var Phut_hien_tai = new Date().getMinutes();
var Giay_hien_tai = new Date().getSeconds();
Ngay_hien_tai = Ngay_hien_tai < 10 ? "0" + Ngay_hien_tai : Ngay_hien_tai;
Thang_hien_tai = Thang_hien_tai < 10 ? "0" + Thang_hien_tai : Thang_hien_tai;
Gio_hien_tai = Gio_hien_tai < 10 ? "0" + Gio_hien_tai : Gio_hien_tai;
Phut_hien_tai = Phut_hien_tai < 10 ? "0" + Phut_hien_tai : Phut_hien_tai;
Giay_hien_tai = Giay_hien_tai < 10 ? "0" + Giay_hien_tai : Giay_hien_tai;
var DateTime = Ngay_hien_tai + "/" + Thang_hien_tai + "/" + Nam_hien_tai + " " + Gio_hien_tai + ":" + Phut_hien_tai + ":" + Giay_hien_tai

function LoadSwitch(checkbox) {
    if (localStorage.getItem(checkbox.id) === "true") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}

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
    let firstListItem = list[3];
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
    toggleSwitchAudio.checked = true;

    if (localStorage.getItem('Login') == 'True') {
    } else {
        db.ref('/Login').update({
            "User": "None"
        });
    }

    firebase.database().ref("/Login").on('value', function (snapshot) {
        var Remember = snapshot.val()
        if (Remember["User"] == "None") {
            window.location.href = "Index.html";
        } else {
            Account.innerText = Remember["User"]
        }
    })

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
                    db.ref('/FactoryControl/Control').update({
                        'Dev 1': 0,
                        'Dev 2': 0,
                        'Dev 3': 0,
                        'Dev 4': 0,
                        'Area': 0,
                        'Node': 0,
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
            db.ref('/FactoryControl/Control').update({
                'Dev 1': 0,
                'Dev 2': 0,
                'Dev 3': 0,
                'Dev 4': 0,
                'Area': 0,
                'Node': 0,
            });
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

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(initCharts);

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
    setInterval(drawTable, 60000);
    drawTable();
}

function drawTable() {
    var spreadsheetId = '1bnuGSs-aoOUC_mMkFsNrdThJZXNRk3lZs9uh9OvK-8Q';
    var queryA = new google.visualization.Query(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=Relay_History&range=A1:G192307`);
    queryA.send(function (response) {
        handleQueryResponseTable(response, 'table-container');
    });
}

function handleQueryResponseTable(response, containerId) {
    if (response.isError()) {
        console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();
    var uniqueData = new Set(); // Set to store unique rows

    var table = document.createElement('table');
    table.classList.add('data-table');

    var headerRow = document.createElement('tr');
    for (var i = 0; i < data.getNumberOfColumns(); i++) {
        var headerCell = document.createElement('th');
        headerCell.textContent = data.getColumnLabel(i);
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Loop through each row of the data in reverse order
    for (var i = data.getNumberOfRows() - 1; i >= 0; i--) {
        var rowValues = []; // Array to store values of the current row

        // Loop through each column from column A to G
        for (var j = 0; j <= 6; j++) {
            rowValues.push(data.getFormattedValue(i, j)); // Add the value of each cell to the rowValues array
        }

        // Convert the rowValues array to a string and check if it's unique
        var rowString = rowValues.slice(1).join(','); // Ignore the first element (from column A) when checking uniqueness
        if (!uniqueData.has(rowString)) { // If the row is unique
            var row = document.createElement('tr');
            for (var k = 0; k < rowValues.length; k++) {
                var cell = document.createElement('td');
                cell.textContent = rowValues[k];
                row.appendChild(cell);
            }
            table.appendChild(row);
            uniqueData.add(rowString); // Add the unique row to the set
        }
    }

    var container = document.getElementById(containerId);
    container.innerHTML = '';
    container.appendChild(table);
}



function handleQueryResponse(response, containerId, area, node) {
    if (response.isError()) {
        console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    handleQueryResponseTable(response, containerId, area, node);
}


function drawTableStatus(area, node) {
    var spreadsheetId = '1bnuGSs-aoOUC_mMkFsNrdThJZXNRk3lZs9uh9OvK-8Q';
    var queryA = new google.visualization.Query(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=Relay_History&range=A1:G192307`);
    queryA.send(function (response) {
        StatusAreaNode(response, 'table-container', area, node);
    });
}

function StatusAreaNode(response, containerId, area, node) {
    if (response.isError()) {
        console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();

    var table = document.createElement('table');
    table.classList.add('data-table');

    var headerRow = document.createElement('tr');
    for (var i = 0; i < data.getNumberOfColumns(); i++) {
        var headerCell = document.createElement('th');
        headerCell.textContent = data.getColumnLabel(i);
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
    var lastIndex = -1;
    var areaValues = data.getFilteredRows([{ column: 1, value: area }]);
    var nodeValues = data.getFilteredRows([{ column: 2, value: node }]);

    var commonIndices = areaValues.filter(value => nodeValues.includes(value));

    if (commonIndices.length > 0) {
        lastIndex = commonIndices[commonIndices.length - 1];
    }

    if (lastIndex !== -1) {
        var row = document.createElement('tr');
        for (var j = 0; j < data.getNumberOfColumns(); j++) {
            var cell = document.createElement('td');
            cell.textContent = data.getFormattedValue(lastIndex, j);
            row.appendChild(cell);
        }
        table.appendChild(row);

        updateToggleSwitches(data, lastIndex);
    }

    var container = document.getElementById(containerId);
    container.innerHTML = '';
    container.appendChild(table);
}

function updateToggleSwitches(data, rowIndex) {
    const toggleSwitch1 = document.getElementById("toggleSwitch1");
    const toggleSwitch2 = document.getElementById("toggleSwitch2");
    const toggleSwitch3 = document.getElementById("toggleSwitch3");
    const toggleSwitch4 = document.getElementById("toggleSwitch4");

    var toggleSwitchesData = [];
    for (var i = 3; i < data.getNumberOfColumns(); i++) {
        toggleSwitchesData.push(data.getValue(rowIndex, i));
    }

    if (toggleSwitchesData.length >= 4) {
        toggleSwitch1.checked = toggleSwitchesData[0] === "ON";
        toggleSwitch2.checked = toggleSwitchesData[1] === "ON";
        toggleSwitch3.checked = toggleSwitchesData[2] === "ON";
        toggleSwitch4.checked = toggleSwitchesData[3] === "ON";
    }
}



CBONOFF.onclick = function () {
    toggleSwitchOnOff.checked = !toggleSwitchOnOff.checked;
    if (toggleSwitchOnOff.checked === true) {
        db.ref('/FactoryControl/Control').update({
            'Dev 1': 1,
            'Dev 2': 1,
            'Dev 3': 1,
            'Dev 4': 1,
            'Area': 0,
            'Node': 0,
        });
        db.ref('/AllDevices').update({
            'Switch': 1
        });
        toggleSwitch1.checked = true;
        toggleSwitch2.checked = true;
        toggleSwitch3.checked = true;
        toggleSwitch4.checked = true;
    } else if (toggleSwitchOnOff.checked === false) {
        db.ref('/FactoryControl/Control').update({
            'Dev 1': 0,
            'Dev 2': 0,
            'Dev 3': 0,
            'Dev 4': 0,
            'Area': 0,
            'Node': 0,
        });
        db.ref('/AllDevices').update({
            'Switch': 0
        });
        toggleSwitch1.checked = false;
        toggleSwitch2.checked = false;
        toggleSwitch3.checked = false;
        toggleSwitch4.checked = false;
    }
}

db.ref('/FactoryControl/Control').on('value', function (snapshot) {
    var Switch = snapshot.val();
    if (Switch["Dev 1"] == 1) {
        toggleSwitch1.checked = true;
    } else if (Switch["Dev 1"] == 0) {
        toggleSwitch1.checked = false;
    }
    if (Switch["Dev 2"] == 1) {
        toggleSwitch2.checked = true;
    } else if (Switch["Dev 2"] == 0) {
        toggleSwitch2.checked = false;
    }
    if (Switch["Dev 3"] == 1) {
        toggleSwitch3.checked = true;
    } else if (Switch["Dev 3"] == 0) {
        toggleSwitch3.checked = false;
    }
    if (Switch["Dev 4"] == 1) {
        toggleSwitch4.checked = true;
    } else if (Switch["Dev 4"] == 0) {
        toggleSwitch4.checked = false;
    }
    area.value = Switch["Area"];
    node.value = Switch["Node"];

    var Switch1 = toggleSwitch1.checked ? "ON" : "OFF";
    var Switch2 = toggleSwitch2.checked ? "ON" : "OFF";
    var Switch3 = toggleSwitch3.checked ? "ON" : "OFF";
    var Switch4 = toggleSwitch4.checked ? "ON" : "OFF";

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


db.ref('/AllDevices').on('value', function (snapshot) {
    var Switch = snapshot.val()
    if (Switch["Switch"] == 1) {
        toggleSwitchOnOff.checked = true;
    } else if (Switch["Switch"] == 0) {
        toggleSwitchOnOff.checked = false;
    }
})

db.ref('/FactoryControl/PassHW').on('value', function (snapshot) {
    var Test = snapshot.val()
    if (Test["Test"] == 1) {
        gateway.style.color = "green";
        toggleSwitchAudio.checked = true;
    } else if (Test["Test"] == 0) {
        gateway.style.color = "red";
        toggleSwitchAudio.checked = false;
        db.ref('/AllDevices').update({
            'Switch': 0
        })
    }
})

CBAudio.onclick = function () {
    toggleSwitchAudio.checked = false;
    db.ref('/FactoryControl/Audio').update({
        'Audio': 0
    })
    setTimeout(function () {
        toggleSwitchAudio.checked = true;
        db.ref('/FactoryControl/Audio').update({
            'Audio': 1
        })
    }, 2000);
}

Relay1.onclick = function () {
    toggleSwitch1.checked = !toggleSwitch1.checked;
}

Relay2.onclick = function () {
    toggleSwitch2.checked = !toggleSwitch2.checked;
}
Relay3.onclick = function () {
    toggleSwitch3.checked = !toggleSwitch3.checked;
}
Relay4.onclick = function () {
    toggleSwitch4.checked = !toggleSwitch4.checked;
}

Submit.onclick = function () {
    if (area.value === "" || node.value === "") {
        swal(
            "",
            "Choose Area, Node before submit",
            "error"
        );
    } else {
        var updates = {};
        updates['Dev 1'] = toggleSwitch1.checked ? 1 : 0;
        updates['Dev 2'] = toggleSwitch2.checked ? 1 : 0;
        updates['Dev 3'] = toggleSwitch3.checked ? 1 : 0;
        updates['Dev 4'] = toggleSwitch4.checked ? 1 : 0;
        updates['Area'] = area.value;
        updates['Node'] = node.value;

        db.ref('/FactoryControl/Control').update(updates);
    }
}

Status.onclick = function () {
    var areaValue = parseFloat(area.value);
    var nodeValue = parseFloat(node.value);

    if (isNaN(areaValue) || isNaN(nodeValue)) {
        swal(
            "",
            "Please input valid numeric values for Area and Node",
            "error"
        );
    } else {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            drawTableStatus(areaValue, nodeValue);
        });
    }
}

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