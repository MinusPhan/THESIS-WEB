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
const togglePassword = document.getElementById("togglePassword");
const toggleEAPassword = document.getElementById("toggleEAPassword");
const inputPassword = document.getElementById("password");
const inputUsername = document.getElementById("username");
const inputEApassword = document.getElementById("EApassword")
const iconLoading = document.getElementById("loading");
const gateway = document.getElementById("Gateway");

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
    let firstListItem = list[8];
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

const onToggleTypePassword = () => {
    togglePassword.classList.toggle("fa-eye-slash");

    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
};

const onToggleTypeEAPassword = () => {
    toggleEAPassword.classList.toggle("fa-eye-slash");

    if (inputEApassword.type === "password") {
        inputEApassword.type = "text";
    } else {
        inputEApassword.type = "password";
    }
};

togglePassword.addEventListener("click", onToggleTypePassword);
toggleEAPassword.addEventListener("click", onToggleTypeEAPassword);

const checkUsername = (username) => {
    if (!username) return "Please enter Username!";
    else if (username.length < 5)
        return "Username requires 5 characters!";
    else return true;
};
const checkPassword = (password) => {
    if (!password) return "Please enter Password!";
    else if (password.length < 5)
        return "Password requires 5 characters!";
    else return true;
};
const checkEAPassword = (EApassword) => {
    if (!EApassword) return "Please enter password again!";
    else if (EApassword.length < 5)
        return "Password requires 5 characters!";
    else return true;
};

const showError = (element, message) => {
    element.style.display = "block";
    element.innerHTML = message;
    element.className = "message__error";
};

const hideError = (element) => {
    element.style.display = "none";
};

const validation = (username, password, EApassword) => {
    const errorUsername = document.getElementById("errorUsername");
    const errorPassword = document.getElementById("errorPassword");
    const errorEAPassword = document.getElementById("errorEAPassword");

    let messageErrorUsername = checkUsername(username);
    if (typeof messageErrorUsername === "string") {
        showError(errorUsername, messageErrorUsername);
    } else {
        hideError(errorUsername);
    }

    let messageErrorPassword = checkPassword(password);
    if (typeof messageErrorPassword === "string") {
        showError(errorPassword, messageErrorPassword);
    } else {
        hideError(errorPassword);
    }

    let messageErrorEAPassword = checkEAPassword(EApassword);
    if (typeof messageErrorEAPassword === "string") {
        showError(errorEAPassword, messageErrorEAPassword);
    } else {
        hideError(errorEAPassword);
    }

    if (messageErrorUsername === true && messageErrorPassword === true && messageErrorEAPassword === true) {
        return true;
    }
    return false;
};


const onSubmitForm = (form) => {
    const username = form.username.value;
    const password = form.password.value;
    const EApassword = form.EApassword.value;
    const checkValidation = validation(username, password, EApassword);
    if (checkValidation === true) {
        if (inputEApassword.value != inputPassword.value) {
            swal(
                "",
                "Passworld does not match! Please enter again!",
                "error"
            );
        } else {
            const user = {
                Username: inputUsername.value,
                Password: inputPassword.value
            };
            firebase.database().ref("/users").child(user.Username).on("value", function (snapshot) {
                if (snapshot.exists()) {
                    swal(
                        "",
                        "Username already exists!",
                        "error"
                    );
                } else {
                    firebase.database().ref('users/' + user.Username).set({
                        Password: user.Password
                    })
                    swal(
                        "",
                        "Sign Up Success!",
                        "success"
                    );
                    window.onclick = function () {
                        window.location.href = "index.html";
                    }
                }
            })
        };
    }
};

window.onload = function () {

    if (localStorage.getItem('Login') == 'True') {
    } else {
        db.ref('/Login').update({
            "User": "None"
        });
    }

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
            if (localStorage.getItem('AlertGateway') == 'True' || !localStorage.getItem('AlertGateway')) {
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