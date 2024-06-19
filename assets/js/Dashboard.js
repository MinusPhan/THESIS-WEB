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
const Account = document.getElementById("Account");
const gateway = document.getElementById("Gateway");
const area = document.getElementById("area");
const node = document.getElementById("node");
const drop = document.getElementsByClassName("dropdown-content");
const Node1to10 = document.getElementById("Node1-10");
const Node11to20 = document.getElementById("Node11-20");
const Node21to30 = document.getElementById("Node21-30");
const Node31to40 = document.getElementById("Node31-40");
const Node41to50 = document.getElementById("Node41-50");
const Node51to60 = document.getElementById("Node51-60");
const Node61to70 = document.getElementById("Node61-70");
const Node71to80 = document.getElementById("Node71-80");
const Node81to90 = document.getElementById("Node81-90");
const Node91to100 = document.getElementById("Node91-100");
const Node101to110 = document.getElementById("Node101-110");
const Node111to120 = document.getElementById("Node111-120");
const Node121to130 = document.getElementById("Node121-130");
const Node131to140 = document.getElementById("Node131-140");
const Node141to150 = document.getElementById("Node141-150");
const Node151to160 = document.getElementById("Node151-160");
const Node161to170 = document.getElementById("Node161-170");
const Node171to180 = document.getElementById("Node171-180");
const Node181to190 = document.getElementById("Node181-190");
const Node191to200 = document.getElementById("Node191-200");
const Node201to210 = document.getElementById("Node201-210");
const Node211to220 = document.getElementById("Node211-220");
const Node221to230 = document.getElementById("Node221-230");
const Node231to240 = document.getElementById("Node231-240");
const Node241to250 = document.getElementById("Node241-250");
const NameNode1 = document.getElementById("Name-Node-1");
const NameNode2 = document.getElementById("Name-Node-2");
const NameNode3 = document.getElementById("Name-Node-3");
const NameNode4 = document.getElementById("Name-Node-4");
const NameNode5 = document.getElementById("Name-Node-5");
const NameNode6 = document.getElementById("Name-Node-6");
const NameNode7 = document.getElementById("Name-Node-7");
const NameNode8 = document.getElementById("Name-Node-8");
const NameNode9 = document.getElementById("Name-Node-9");
const NameNode10 = document.getElementById("Name-Node-10");
const Submit = document.getElementById("Submit");



node.onclick = function () {
    for (var i = 0; i < drop.length; i++) {
        var style = window.getComputedStyle(drop[i]);
        if (style.display === "none") {
            drop[i].style.display = "block";
        } else {
            drop[i].style.display = "none";
        }
    }
};

Node1to10.onclick = function () {
    node.value = "Node 1 - 10"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node11to20.onclick = function () {
    node.value = "Node 11 - 20"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node21to30.onclick = function () {
    node.value = "Node 21 - 30"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node31to40.onclick = function () {
    node.value = "Node 31 - 40"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node41to50.onclick = function () {
    node.value = "Node 41 - 50"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node51to60.onclick = function () {
    node.value = "Node 51 - 60"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node61to70.onclick = function () {
    node.value = "Node 61 - 70"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node71to80.onclick = function () {
    node.value = "Node 71 - 80"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node81to90.onclick = function () {
    node.value = "Node 81 - 90"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node91to100.onclick = function () {
    node.value = "Node 91 - 100"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node101to110.onclick = function () {
    node.value = "Node 101 - 110"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node111to120.onclick = function () {
    node.value = "Node 111 - 120"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node121to130.onclick = function () {
    node.value = "Node 121 - 130"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }

}

Node131to140.onclick = function () {
    node.value = "Node 131 - 140"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node141to150.onclick = function () {
    node.value = "Node 141 - 150"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node151to160.onclick = function () {
    node.value = "Node 151 - 160"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node161to170.onclick = function () {
    node.value = "Node 161 - 170"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node171to180.onclick = function () {
    node.value = "Node 171 - 180"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node181to190.onclick = function () {
    node.value = "Node 181 - 190"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node191to200.onclick = function () {
    node.value = "Node 191 - 200"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node201to210.onclick = function () {
    node.value = "Node 201 - 210"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node211to220.onclick = function () {
    node.value = "Node 211 - 220"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node221to230.onclick = function () {
    node.value = "Node 221 - 230"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

Node231to240.onclick = function () {
    node.value = "Node 231 - 240"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }

}

Node241to250.onclick = function () {
    node.value = "Node 241 - 250"
    for (var i = 0; i < drop.length; i++) {
        drop[i].style.display = "none";
    }
}

window.onclick = function () {
    if (style.display === "block") {
        for (var i = 0; i < drop.length; i++) {
            drop[i].style.display = "none";
        }
    }
}

function updateHTML(data, number) {
    document.getElementById('N' + number + '-nhietdo').innerHTML = data.Temp;
    document.getElementById('N' + number + '-doam').innerHTML = data.Humi;
    document.getElementById('N' + number + '-anhsang').innerHTML = data.Light;
    document.getElementById('N' + number + '-PM1').innerHTML = data.PM1;
    document.getElementById('N' + number + '-PM2-5').innerHTML = data.PM25;
    document.getElementById('N' + number + '-PM10').innerHTML = data.PM10;
    document.getElementById('N' + number + '-CO2').innerHTML = data.CO2;
    document.getElementById('N' + number + '-Fire').innerHTML = data.Fire;
    document.getElementById('N' + number + '-Time').innerHTML = data.Timestamp;
    for (let i = 1; i <= 10; i++) {
        if (i !== number) {
            document.getElementById('N' + i + '-nhietdo').innerHTML = 'none';
            document.getElementById('N' + i + '-doam').innerHTML = 'none';
            document.getElementById('N' + i + '-anhsang').innerHTML = 'none';
            document.getElementById('N' + i + '-PM1').innerHTML = 'none';
            document.getElementById('N' + i + '-PM2-5').innerHTML = 'none';
            document.getElementById('N' + i + '-PM10').innerHTML = 'none';
            document.getElementById('N' + i + '-CO2').innerHTML = 'none';
            document.getElementById('N' + i + '-Fire').innerHTML = 'none';
            document.getElementById('N' + i + '-Time').innerHTML = 'none';
        }
    }

    alertrSenor(data, number);
}

function alertrSenor(data, number) {
    var alertMessage = "";

    if (data.Temp > 60) {
        document.getElementById('N' + number + '-nhietdo').style.color = 'red';
        alertMessage += "high temperature: " + data.Temp + " °C<br>";
        data.Temp = "high";
    }
    if (data.PM1 > 70) {
        document.getElementById('N' + number + '-PM1').style.color = 'red';
        alertMessage += "high PM1: " + data.PM1 + " µg/m³<br>";
        data.PM1 = "high";
    }
    if (data.PM25 > 80) {
        document.getElementById('N' + number + '-PM2-5').style.color = 'red';
        alertMessage += "high PM2.5: " + data.PM25 + " µg/m³<br>";
        data.PM25 = "high";
    }
    if (data.PM10 > 155) {
        document.getElementById('N' + number + '-PM10').style.color = 'red';
        alertMessage += "high PM10: " + data.PM10 + " µg/m³<br>";
        data.PM10 = "high";
    }
    if (data.CO2 > 2000) {
        document.getElementById('N' + number + '-CO2').style.color = 'red';
        alertMessage += "high CO2: " + data.CO2 + " ppm<br>";
        data.CO2 = "high";
    }
    if (data.Fire == "Y") {
        document.getElementById('N' + number + '-Fire').style.color = 'red';
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
    var Sensor = snapshot.val();
    if (Sensor["Area"] == area.value) {
        //     console.log(Sensor["Area"] + " " + area.value);
        // }else (
        //     console.log("khong giong")
        // )
        if (node.value === "Node 1 - 10") {
            if (Sensor['Node'] === 1) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 2) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 3) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 4) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 5) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 6) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 7) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 8) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 9) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 10) {
                updateHTML(Sensor, 10)
            }
        } else if (node.value === "Node 11 - 20") {
            if (Sensor['Node'] === 11) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 12) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 13) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 14) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 15) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 16) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 17) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 18) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 19) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 20) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 21 - 30") {
            if (Sensor['Node'] === 21) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 22) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 23) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 24) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 25) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 26) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 27) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 28) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 29) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 30) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 31 - 40") {
            if (Sensor['Node'] === 31) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 32) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 33) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 34) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 35) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 36) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 37) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 38) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 39) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 40) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 41 - 50") {
            if (Sensor['Node'] === 41) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 42) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 43) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 44) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 45) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 46) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 47) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 48) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 49) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 50) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 51 - 60") {
            if (Sensor['Node'] === 51) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 52) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 53) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 54) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 55) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 56) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 57) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 58) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 59) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 60) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 61 - 70") {
            if (Sensor['Node'] === 61) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 62) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 63) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 64) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 65) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 66) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 67) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 68) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 69) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 70) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 71 - 80") {
            if (Sensor['Node'] === 71) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 72) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 73) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 74) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 75) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 76) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 77) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 78) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 79) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 80) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 81 - 90") {
            if (Sensor['Node'] === 81) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 82) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 83) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 84) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 85) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 86) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 87) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 88) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 89) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 90) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 91 - 100") {
            if (Sensor['Node'] === 91) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 92) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 93) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 94) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 95) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 96) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 97) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 98) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 99) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 100) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 101 - 110") {
            if (Sensor['Node'] === 101) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 102) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 103) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 104) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 105) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 106) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 107) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 108) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 109) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 110) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 111 - 120") {
            if (Sensor['Node'] === 111) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 112) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 113) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 114) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 115) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 116) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 117) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 118) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 119) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 120) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 121 - 130") {
            if (Sensor['Node'] === 121) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 122) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 123) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 124) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 125) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 126) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 127) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 128) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 129) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 130) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 131 - 140") {
            if (Sensor['Node'] === 131) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 132) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 133) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 134) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 135) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 136) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 137) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 138) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 139) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 140) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 141 - 150") {
            if (Sensor['Node'] === 141) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 142) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 143) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 144) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 145) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 146) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 147) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 148) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 149) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 150) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 151 - 160") {
            if (Sensor['Node'] === 151) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 152) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 153) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 154) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 155) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 156) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 157) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 158) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 159) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 160) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 161 - 170") {
            if (Sensor['Node'] === 161) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 162) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 163) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 164) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 165) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 166) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 167) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 168) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 169) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 170) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 171 - 180") {
            if (Sensor['Node'] === 171) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 172) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 173) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 174) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 175) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 176) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 177) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 178) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 179) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 180) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 181 - 190") {
            if (Sensor['Node'] === 181) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 182) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 183) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 184) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 185) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 186) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 187) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 188) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 189) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 190) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 191 - 200") {
            if (Sensor['Node'] === 191) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 192) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 193) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 194) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 195) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 196) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 197) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 198) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 199) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 200) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 201 - 210") {
            if (Sensor['Node'] === 201) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 202) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 203) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 204) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 205) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 206) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 207) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 208) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 209) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 210) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 211 - 220") {
            if (Sensor['Node'] === 211) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 212) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 213) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 214) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 215) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 216) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 217) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 218) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 219) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 220) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 221 - 230") {
            if (Sensor['Node'] === 221) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 222) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 223) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 224) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 225) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 226) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 227) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 228) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 229) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 230) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 231 - 240") {
            if (Sensor['Node'] === 231) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 232) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 233) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 234) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 235) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 236) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 237) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 238) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 239) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 240) {
                updateHTML(Sensor, 10)
            }
        } else if (node.vale === "Node 241 - 250") {
            if (Sensor['Node'] === 241) {
                updateHTML(Sensor, 1)
            } else if (Sensor['Node'] === 242) {
                updateHTML(Sensor, 2)
            } else if (Sensor['Node'] === 243) {
                updateHTML(Sensor, 3)
            } else if (Sensor['Node'] === 244) {
                updateHTML(Sensor, 4)
            } else if (Sensor['Node'] === 245) {
                updateHTML(Sensor, 5)
            } else if (Sensor['Node'] === 246) {
                updateHTML(Sensor, 6)
            } else if (Sensor['Node'] === 247) {
                updateHTML(Sensor, 7)
            } else if (Sensor['Node'] === 248) {
                updateHTML(Sensor, 8)
            } else if (Sensor['Node'] === 249) {
                updateHTML(Sensor, 9)
            } else if (Sensor['Node'] === 250) {
                updateHTML(Sensor, 10)
            }
        }
    }
})

function DisplayNode() {
    NameNode1.innerText = "Node 1"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(1, 1);
    });
    NameNode2.innerText = "Node 2"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(2, 2);
    });
    NameNode3.innerText = "Node 3"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(3, 3);
    });
    NameNode4.innerText = "Node 4"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(4, 4);
    });
    NameNode5.innerText = "Node 5"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(5, 5);
    });
    NameNode6.innerText = "Node 6"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(6, 6);
    });
    NameNode7.innerText = "Node 7"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(7, 7);
    });
    NameNode8.innerText = "Node 8"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(8, 8);
    });
    NameNode9.innerText = "Node 9"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(9, 9);
    });
    NameNode10.innerText = "Node 10"
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(function () {
        initCharts(10, 10);
    });
}

function ChangeNode() {
    if (node.value === "Node 1 - 10") {
        DisplayNode();
    } else if (node.value === "Node 11 - 20") {
        NameNode1.innerText = "Node 11"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(11, 1);
        });
        NameNode2.innerText = "Node 12"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(12, 2);
        });
        NameNode3.innerText = "Node 13"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(13, 3);
        });
        NameNode4.innerText = "Node 14"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(14, 4);
        });
        NameNode5.innerText = "Node 15"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(15, 5);
        });
        NameNode6.innerText = "Node 16"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(16, 6);
        });
        NameNode7.innerText = "Node 17"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(17, 7);
        });
        NameNode8.innerText = "Node 18"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(18, 8);
        });
        NameNode9.innerText = "Node 19"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(19, 9);
        });
        NameNode10.innerText = "Node 20"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(20, 10);
        });
    } else if (node.value === "Node 21 - 30") {
        NameNode1.innerText = "Node 21"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(21, 1);
        });
        NameNode2.innerText = "Node 22"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(22, 2);
        });
        NameNode3.innerText = "Node 23"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(23, 3);
        });
        NameNode4.innerText = "Node 24"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(24, 4);
        });
        NameNode5.innerText = "Node 25"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(25, 5);
        });
        NameNode6.innerText = "Node 26"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(26, 6);
        });
        NameNode7.innerText = "Node 27"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(27, 7);
        });
        NameNode8.innerText = "Node 28"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(28, 8);
        });
        NameNode9.innerText = "Node 29"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(29, 9);
        });
        NameNode10.innerText = "Node 30"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(30, 10);
        });
    } else if (node.value == "Node 31 - 40") {
        NameNode1.innerText = "Node 31"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(31, 1);
        });
        NameNode2.innerText = "Node 32"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(32, 2);
        });
        NameNode3.innerText = "Node 33"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(33, 3);
        });
        NameNode4.innerText = "Node 34"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(34, 4);
        });
        NameNode5.innerText = "Node 35"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(35, 5);
        });
        NameNode6.innerText = "Node 36"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(36, 6);
        });
        NameNode7.innerText = "Node 37"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(37, 7);
        });
        NameNode8.innerText = "Node 38"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(38, 8);
        });
        NameNode9.innerText = "Node 39"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(39, 9);
        });
        NameNode10.innerText = "Node 40"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(40, 10);
        });
    } else if (node.value === "Node 41 - 50") {
        NameNode1.innerText = "Node 41"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(41, 1);
        });
        NameNode2.innerText = "Node 42"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(42, 2);
        });
        NameNode3.innerText = "Node 43"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(43, 3);
        });
        NameNode4.innerText = "Node 44"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(44, 4);
        });
        NameNode5.innerText = "Node 45"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(45, 5);
        });
        NameNode6.innerText = "Node 46"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(46, 6);
        });
        NameNode7.innerText = "Node 47"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(47, 7);
        });
        NameNode8.innerText = "Node 48"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(48, 8);
        });
        NameNode9.innerText = "Node 49"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(49, 9);
        });
        NameNode10.innerText = "Node 50"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(50, 10);
        });
    } else if (node.value === "Node 51 - 60") {
        NameNode1.innerText = "Node 51"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(51, 1);
        });
        NameNode2.innerText = "Node 52"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(52, 2);
        });
        NameNode3.innerText = "Node 53"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(53, 3);
        });
        NameNode4.innerText = "Node 54"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(54, 4);
        });
        NameNode5.innerText = "Node 55"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(55, 5);
        });
        NameNode6.innerText = "Node 56"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(56, 6);
        });
        NameNode7.innerText = "Node 57"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(57, 7);
        });
        NameNode8.innerText = "Node 58"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(58, 8);
        });
        NameNode9.innerText = "Node 59"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(59, 9);
        });
        NameNode10.innerText = "Node 60"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(60, 10);
        });
    } else if (node.value === "Node 61 - 70") {
        NameNode1.innerText = "Node 61";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(61, 1);
        });
        NameNode2.innerText = "Node 62";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(62, 2);
        });
        NameNode3.innerText = "Node 63";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(63, 3);
        });
        NameNode4.innerText = "Node 64";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(64, 4);
        });
        NameNode5.innerText = "Node 65";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(65, 5);
        });
        NameNode6.innerText = "Node 66";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(66, 6);
        });
        NameNode7.innerText = "Node 67";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(67, 7);
        });
        NameNode8.innerText = "Node 68";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(68, 8);
        });
        NameNode9.innerText = "Node 69";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(69, 9);
        });
        NameNode10.innerText = "Node 70"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(70, 10);
        });
    } else if (node.value === "Node 71 - 80") {
        NameNode1.innerText = "Node 71";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(71, 1);
        });
        NameNode2.innerText = "Node 72";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(72, 2);
        });
        NameNode3.innerText = "Node 73";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(73, 3);
        });
        NameNode4.innerText = "Node 74";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(74, 4);
        });
        NameNode5.innerText = "Node 75";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(75, 5);
        });
        NameNode6.innerText = "Node 76";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(76, 6);
        });
        NameNode7.innerText = "Node 77";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(77, 7);
        });
        NameNode8.innerText = "Node 78";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(78, 8);
        });
        NameNode9.innerText = "Node 79";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(79, 9);
        });
        NameNode10.innerText = "Node 80";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(80, 10);
        });
    } else if (node.value === "Node 81 - 90") {
        NameNode1.innerText = "Node 81";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(81, 1);
        });
        NameNode2.innerText = "Node 82";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(82, 2);
        });
        NameNode3.innerText = "Node 83";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(83, 3);
        });
        NameNode4.innerText = "Node 84";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(84, 4);
        });
        NameNode5.innerText = "Node 85";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(85, 5);
        });
        NameNode6.innerText = "Node 86";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(86, 6);
        });
        NameNode7.innerText = "Node 87";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(87, 7);
        });
        NameNode8.innerText = "Node 88";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(88, 8);
        });
        NameNode9.innerText = "Node 89";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(89, 9);
        });
        NameNode10.innerText = "Node 90";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(90, 10);
        });

    } else if (node.value === "Node 91 - 100") {
        NameNode1.innerText = "Node 91";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(91, 1);
        });
        NameNode2.innerText = "Node 92";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(92, 2);
        });
        NameNode3.innerText = "Node 93";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(93, 3);
        });
        NameNode4.innerText = "Node 94";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(94, 4);
        });
        NameNode5.innerText = "Node 95";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(95, 5);
        });
        NameNode6.innerText = "Node 96";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(96, 6);
        });
        NameNode7.innerText = "Node 97";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(97, 7);
        });
        NameNode8.innerText = "Node 98";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(98, 8);
        });
        NameNode9.innerText = "Node 99";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(99, 9);
        });
        NameNode10.innerText = "Node 100";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(100, 10);
        });

    } else if (node.value === "Node 101 - 110") {
        NameNode1.innerText = "Node 101";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(101, 1);
        });
        NameNode2.innerText = "Node 102";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(102, 2);
        });
        NameNode3.innerText = "Node 103";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(103, 3);
        });
        NameNode4.innerText = "Node 104";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(104, 4);
        });
        NameNode5.innerText = "Node 105";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(105, 5);
        });
        NameNode6.innerText = "Node 106";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(106, 6);
        });
        NameNode7.innerText = "Node 107";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(107, 7);
        });
        NameNode8.innerText = "Node 108";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(108, 8);
        });
        NameNode9.innerText = "Node 109";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(109, 9);
        });
        NameNode10.innerText = "Node 110";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(110, 10);
        });

    } else if (node.value === "Node 111 - 120") {
        NameNode1.innerText = "Node 111";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(111, 1);
        });
        NameNode2.innerText = "Node 112";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(112, 2);
        });
        NameNode3.innerText = "Node 113";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(113, 3);
        });
        NameNode4.innerText = "Node 114";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(114, 4);
        });
        NameNode5.innerText = "Node 115";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(115, 5);
        });
        NameNode6.innerText = "Node 116";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(116, 6);
        });
        NameNode7.innerText = "Node 117";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(117, 7);
        });
        NameNode8.innerText = "Node 118";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(118, 8);
        });
        NameNode9.innerText = "Node 119";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(119, 9);
        });
        NameNode10.innerText = "Node 120";
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(120, 10);
        });

    } else if (node.value === "Node 121 - 130") {
        NameNode1.innerText = "Node 121"
        NameNode2.innerText = "Node 122"
        NameNode3.innerText = "Node 123"
        NameNode4.innerText = "Node 124"
        NameNode5.innerText = "Node 125"
        NameNode6.innerText = "Node 126"
        NameNode7.innerText = "Node 127"
        NameNode8.innerText = "Node 128"
        NameNode9.innerText = "Node 129"
        NameNode10.innerText = "Node 130"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(121, 1);
            initCharts(122, 2);
            initCharts(123, 3);
            initCharts(124, 4);
            initCharts(125, 5);
            initCharts(126, 6);
            initCharts(127, 7);
            initCharts(128, 8);
            initCharts(129, 9);
            initCharts(130, 10);
        });
    } else if (node.value === "Node 131 - 140") {
        NameNode1.innerText = "Node 131"
        NameNode2.innerText = "Node 132"
        NameNode3.innerText = "Node 133"
        NameNode4.innerText = "Node 134"
        NameNode5.innerText = "Node 135"
        NameNode6.innerText = "Node 136"
        NameNode7.innerText = "Node 137"
        NameNode8.innerText = "Node 138"
        NameNode9.innerText = "Node 139"
        NameNode10.innerText = "Node 140"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(131, 1);
            initCharts(132, 2);
            initCharts(133, 3);
            initCharts(134, 4);
            initCharts(135, 5);
            initCharts(136, 6);
            initCharts(137, 7);
            initCharts(138, 8);
            initCharts(139, 9);
            initCharts(140, 10);
        });
    } else if (node.value === "Node 141 - 150") {
        NameNode1.innerText = "Node 141"
        NameNode2.innerText = "Node 142"
        NameNode3.innerText = "Node 143"
        NameNode4.innerText = "Node 144"
        NameNode5.innerText = "Node 145"
        NameNode6.innerText = "Node 146"
        NameNode7.innerText = "Node 147"
        NameNode8.innerText = "Node 148"
        NameNode9.innerText = "Node 149"
        NameNode10.innerText = "Node 150"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(141, 1);
            initCharts(142, 2);
            initCharts(143, 3);
            initCharts(144, 4);
            initCharts(145, 5);
            initCharts(146, 6);
            initCharts(147, 7);
            initCharts(148, 8);
            initCharts(149, 9);
            initCharts(150, 10);
        });
    } else if (node.value === "Node 151 - 160") {
        NameNode1.innerText = "Node 151"
        NameNode2.innerText = "Node 152"
        NameNode3.innerText = "Node 153"
        NameNode4.innerText = "Node 154"
        NameNode5.innerText = "Node 155"
        NameNode6.innerText = "Node 156"
        NameNode7.innerText = "Node 157"
        NameNode8.innerText = "Node 158"
        NameNode9.innerText = "Node 159"
        NameNode10.innerText = "Node 160"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(151, 1);
            initCharts(152, 2);
            initCharts(153, 3);
            initCharts(154, 4);
            initCharts(155, 5);
            initCharts(156, 6);
            initCharts(157, 7);
            initCharts(158, 8);
            initCharts(159, 9);
            initCharts(160, 10);
        });
    } else if (node.value === "Node 161 - 170") {
        NameNode1.innerText = "Node 161"
        NameNode2.innerText = "Node 162"
        NameNode3.innerText = "Node 163"
        NameNode4.innerText = "Node 164"
        NameNode5.innerText = "Node 165"
        NameNode6.innerText = "Node 166"
        NameNode7.innerText = "Node 167"
        NameNode8.innerText = "Node 168"
        NameNode9.innerText = "Node 169"
        NameNode10.innerText = "Node 170"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(161, 1);
            initCharts(162, 2);
            initCharts(163, 3);
            initCharts(164, 4);
            initCharts(165, 5);
            initCharts(166, 6);
            initCharts(167, 7);
            initCharts(168, 8);
            initCharts(169, 9);
            initCharts(170, 10);
        });
    } else if (node.value === "Node 171 - 180") {
        NameNode1.innerText = "Node 171"
        NameNode2.innerText = "Node 172"
        NameNode3.innerText = "Node 173"
        NameNode4.innerText = "Node 174"
        NameNode5.innerText = "Node 175"
        NameNode6.innerText = "Node 176"
        NameNode7.innerText = "Node 177"
        NameNode8.innerText = "Node 178"
        NameNode9.innerText = "Node 179"
        NameNode10.innerText = "Node 180"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(171, 1);
            initCharts(172, 2);
            initCharts(173, 3);
            initCharts(174, 4);
            initCharts(175, 5);
            initCharts(176, 6);
            initCharts(177, 7);
            initCharts(178, 8);
            initCharts(179, 9);
            initCharts(180, 10);
        });
    } else if (node.value === "Node 181 - 190") {
        NameNode1.innerText = "Node 181"
        NameNode2.innerText = "Node 182"
        NameNode3.innerText = "Node 183"
        NameNode4.innerText = "Node 184"
        NameNode5.innerText = "Node 185"
        NameNode6.innerText = "Node 186"
        NameNode7.innerText = "Node 187"
        NameNode8.innerText = "Node 188"
        NameNode9.innerText = "Node 189"
        NameNode10.innerText = "Node 190"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(181, 1);
            initCharts(182, 2);
            initCharts(183, 3);
            initCharts(184, 4);
            initCharts(185, 5);
            initCharts(186, 6);
            initCharts(187, 7);
            initCharts(188, 8);
            initCharts(189, 9);
            initCharts(190, 10);
        });
    } else if (node.value === "Node 191 - 200") {
        NameNode1.innerText = "Node 191"
        NameNode2.innerText = "Node 192"
        NameNode3.innerText = "Node 193"
        NameNode4.innerText = "Node 194"
        NameNode5.innerText = "Node 195"
        NameNode6.innerText = "Node 196"
        NameNode7.innerText = "Node 197"
        NameNode8.innerText = "Node 198"
        NameNode9.innerText = "Node 199"
        NameNode10.innerText = "Node 200"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(191, 1);
            initCharts(192, 2);
            initCharts(193, 3);
            initCharts(194, 4);
            initCharts(195, 5);
            initCharts(196, 6);
            initCharts(197, 7);
            initCharts(198, 8);
            initCharts(199, 9);
            initCharts(200, 10);
        });
    } else if (node.value === "Node 201 - 210") {
        NameNode1.innerText = "Node 201"
        NameNode2.innerText = "Node 202"
        NameNode3.innerText = "Node 203"
        NameNode4.innerText = "Node 204"
        NameNode5.innerText = "Node 205"
        NameNode6.innerText = "Node 206"
        NameNode7.innerText = "Node 207"
        NameNode8.innerText = "Node 208"
        NameNode9.innerText = "Node 209"
        NameNode10.innerText = "Node 210"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(201, 1);
            initCharts(202, 2);
            initCharts(203, 3);
            initCharts(204, 4);
            initCharts(205, 5);
            initCharts(206, 6);
            initCharts(207, 7);
            initCharts(208, 8);
            initCharts(209, 9);
            initCharts(210, 10);
        });
    } else if (node.value === "Node 211 - 220") {
        NameNode1.innerText = "Node 211"
        NameNode2.innerText = "Node 212"
        NameNode3.innerText = "Node 213"
        NameNode4.innerText = "Node 214"
        NameNode5.innerText = "Node 215"
        NameNode6.innerText = "Node 216"
        NameNode7.innerText = "Node 217"
        NameNode8.innerText = "Node 218"
        NameNode9.innerText = "Node 219"
        NameNode10.innerText = "Node 220"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(211, 1);
            initCharts(212, 2);
            initCharts(213, 3);
            initCharts(214, 4);
            initCharts(215, 5);
            initCharts(216, 6);
            initCharts(217, 7);
            initCharts(218, 8);
            initCharts(219, 9);
            initCharts(220, 10);
        });
    } else if (node.value === "Node 221 - 230") {
        NameNode1.innerText = "Node 221"
        NameNode2.innerText = "Node 222"
        NameNode3.innerText = "Node 223"
        NameNode4.innerText = "Node 224"
        NameNode5.innerText = "Node 225"
        NameNode6.innerText = "Node 226"
        NameNode7.innerText = "Node 227"
        NameNode8.innerText = "Node 228"
        NameNode9.innerText = "Node 229"
        NameNode10.innerText = "Node 230"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(221, 1);
            initCharts(222, 2);
            initCharts(223, 3);
            initCharts(224, 4);
            initCharts(225, 5);
            initCharts(226, 6);
            initCharts(227, 7);
            initCharts(228, 8);
            initCharts(229, 9);
            initCharts(230, 10);
        });
    } else if (node.value === "Node 231 - 240") {
        NameNode1.innerText = "Node 231"
        NameNode2.innerText = "Node 232"
        NameNode3.innerText = "Node 233"
        NameNode4.innerText = "Node 234"
        NameNode5.innerText = "Node 235"
        NameNode6.innerText = "Node 236"
        NameNode7.innerText = "Node 237"
        NameNode8.innerText = "Node 238"
        NameNode9.innerText = "Node 239"
        NameNode10.innerText = "Node 240"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(231, 1);
            initCharts(232, 2);
            initCharts(233, 3);
            initCharts(234, 4);
            initCharts(235, 5);
            initCharts(236, 6);
            initCharts(237, 7);
            initCharts(238, 8);
            initCharts(239, 9);
            initCharts(240, 10);
        });
    } else if (node.value === "Node 241 - 250") {
        NameNode1.innerText = "Node 241"
        NameNode2.innerText = "Node 242"
        NameNode3.innerText = "Node 243"
        NameNode4.innerText = "Node 244"
        NameNode5.innerText = "Node 245"
        NameNode6.innerText = "Node 246"
        NameNode7.innerText = "Node 247"
        NameNode8.innerText = "Node 248"
        NameNode9.innerText = "Node 249"
        NameNode10.innerText = "Node 250"
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(function () {
            initCharts(241, 1);
            initCharts(242, 2);
            initCharts(243, 3);
            initCharts(244, 4);
            initCharts(245, 5);
            initCharts(246, 6);
            initCharts(247, 7);
            initCharts(248, 8);
            initCharts(249, 9);
            initCharts(250, 10);
        });
    }
}

Submit.onclick = function () {
    if (area.value === "" || node.value === "") {
        swal(
            "",
            "Choose Area, Node before submit",
            "error"
        );
    } else if (area.value <= 0) {
        swal(
            "",
            "Choose Area greater than 0",
            "error"
        );
    } else {
        localStorage.setItem('Areadashboard', area.value);
        localStorage.setItem('Nodedashboard', node.value);
        ChangeNode();
        location.reload();
    }
}

function initCharts(Node, number) {
    AddData(Node, number);
    setInterval(function () {
        AddData(Node, number);
    }, 60000);
}

function AddData(Node, number) {
    var spreadsheetId = '1bnuGSs-aoOUC_mMkFsNrdThJZXNRk3lZs9uh9OvK-8Q';
    var Area = area.value;

    var queryA = new google.visualization.Query(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?sheet=AREA${Area}_NODE${Node}&range=A1:I192307`);
    queryA.send(function (response) {
        handleQueryResponseTable(response, number);
    });
}

function handleQueryResponseTable(response, number) {
    if (response.isError()) {
        console.error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();
    var lastRowIndex = data.getNumberOfRows() - 1;

    var columnToIdMap = {
        'B': `N${number}-nhietdo`,
        'C': `N${number}-doam`,
        'H': `N${number}-anhsang`,
        'D': `N${number}-PM1`,
        'E': `N${number}-PM2-5`,
        'F': `N${number}-PM10`,
        'G': `N${number}-CO2`,
        'I': `N${number}-Fire`,
        'A': `N${number}-Time`
    };

    // Update each value based on the column index
    for (var columnLetter in columnToIdMap) {
        var columnIndex = data.getColumnIndex(columnLetter);
        var elementId = columnToIdMap[columnLetter];
        var value = data.getFormattedValue(lastRowIndex, columnIndex);
        updateHTMLElement(elementId, value);
    }
}

function updateHTMLElement(elementId, value) {
    var element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
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
    let firstListItem = list[2];
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


window.onload = function () {

    if (localStorage.getItem('Login') == 'True') {
    } else {
        db.ref('/Login').update({
            "User": "None"
        });
    }

    var storedArea = localStorage.getItem('Areadashboard');
    var storedNode = localStorage.getItem('Nodedashboard');

    if (storedArea) {
        area.value = storedArea;
    } else {
        area.value = 1;
    }
    if (storedNode) {
        node.value = storedNode;
    } else {
        node.value = "Node 1 - 10";
    }

    ChangeNode();

    firebase.database().ref("/Login").on('value', function (snapshot) {
        var Remember = snapshot.val()
        if (Remember["User"] == "None") {
            window.location.href = "index.html";
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
              localStorage.setItem('AlertGateway', 'False')
            }
          });
        }, 30000);
      }, 120000);

    db.ref('/FactoryControl/PassHW').on('value', function (snapshot) {
        var Disconnect = snapshot.val()
        if (Disconnect["Test"] == 1) {
            gateway.style.color = "green";
            localStorage.setItem('AlertGateway', 'True')
        } else if (Disconnect["Test"] == 0) {
            if (localStorage.getItem('AlertGateway') == 'True') {
                swal(
                    "Alert",
                    "Unable to connect to the gateway",
                    "warning"
                )
            }
            gateway.style.color = "red";
        } else if (Disconnect["Test"] == 2) {
            gateway.style.color = "white";
        }
    })

    db.ref('/Disconnect').on('value', function (snapshot) {
        var Disconnect = snapshot.val();
        var storageKey = `Area${Disconnect["Area"]}DisconnectNode`;

        var nodes = JSON.parse(localStorage.getItem(storageKey)) || [];

        if (Disconnect["Disconnect"] == 1 && Disconnect["Confirm"] == 0) {
            if (!nodes.includes(Disconnect["Node"])) {
                swal(
                    "Alert",
                    "Area " + Disconnect["Area"] + ", Node " + Disconnect["Node"] + " disconnected from the server",
                    "warning"
                ).then((value) => {
                    if (value) {
                        db.ref('/Disconnect').update({
                            "Confirm": 1
                        });
                    }
                });

                nodes.push(Disconnect["Node"]);
                localStorage.setItem(storageKey, JSON.stringify(nodes));
            }

        } else if (Disconnect["Disconnect"] == 0) {
            var index = nodes.indexOf(Disconnect["Node"]);
            if (index > -1) {
                swal(
                    "",
                    "Area " + Disconnect["Area"] + ", Node " + Disconnect["Node"] + " reconnected again to the server",
                    ""
                );
                nodes.splice(index, 1);
                localStorage.setItem(storageKey, JSON.stringify(nodes));
            }
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

