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

const togglePassword = document.getElementById("togglePassword");
const inputPassword = document.getElementById("password");
const inputUsername = document.getElementById("username");
const submit = document.getElementById('submit');
const RememberMe = document.getElementById('rememberMe');
const maxlogin = 5;
const countdownTime = 30;
let count = 0;
let countdownIntervalId;

const onToggleTypePassword = () => {
    togglePassword.classList.toggle("fa-eye-slash");

    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
};

togglePassword.addEventListener("click", onToggleTypePassword);

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
const showError = (element, message) => {
    element.style.display = "block";
    element.innerHTML = message;
    element.className = "message__error";
};

const hideError = (element) => {
    element.style.display = "none";
};
const validation = (username, password) => {
    const errorUsername = document.getElementById("errorUsername");
    const errorPassword = document.getElementById("errorPassword");

    // validation username;
    let messageErrorUsername = checkUsername(username);
    if (typeof messageErrorUsername === "string") {
        showError(errorUsername, messageErrorUsername);
    } else {
        hideError(errorUsername);
    }

    // validation password;
    let messageErrorPassword = checkPassword(password);
    if (typeof messageErrorPassword === "string") {
        showError(errorPassword, messageErrorPassword);
    } else {
        hideError(errorPassword);
    }

    if (messageErrorUsername === true && messageErrorPassword === true) {
        return true;
    }
    return false;
};

const login = () => {
    const user = {
        username: inputUsername.value,
        password: inputPassword.value
    };
    firebase.database().ref("/users").child(user.username).on("value", function (snapshot) {
        if (snapshot.exists()) {
            var Password = snapshot.val()
            if (Password["Password"] == user.password) {
                if (RememberMe.checked == true) {
                    firebase.database().ref("/Login").update({
                        "User": user.username,
                    })
                    swal(
                        "",
                        "Login successful",
                        "success"
                    );
                    window.onclick = function () {
                        window.location.href = "Home.html";
                    }
                    localStorage.setItem('RememberMe', 'True');
                    localStorage.setItem('Login', 'True');
                } else if (RememberMe.checked == false) {
                    firebase.database().ref("/Login").update({
                        "User": user.username
                    })
                    swal(
                        "",
                        "Login successful",
                        "success"
                    );
                    window.onclick = function () {
                        window.location.href = "Home.html";
                    }
                    localStorage.setItem('RememberMe', 'False');
                    localStorage.setItem('Login', 'True');
                }
                return true;
            }

        }
        swal(
            "",
            "Login failed! Wrong username or password!",
            "error"
        );
        count++;

    })
};

function startCountdown(time) {
    submit.disabled = true;
    submit.innerHTML = time + 's';

    countdownIntervalId = setInterval(() => {
        time--;
        submit.innerHTML = time + 's';
        localStorage.setItem("countdownTime", time);

        if (time <= 0) {
            clearInterval(countdownIntervalId);
            submit.disabled = false;
            submit.innerHTML = 'Login';
            count = 0;
            localStorage.removeItem("countdownTime");
        }
    }, 1000);
}

if (localStorage.getItem("countdownTime")) {
    var countdownTimeload = parseInt(localStorage.getItem("countdownTime"));
    startCountdown(countdownTimeload);
}

const onSubmitForm = (form) => {
    const username = form.username.value;
    const password = form.password.value;
    const checkValidation = validation(username, password);
    if (checkValidation === true) {
        setTimeout(() => {
            login();
            if (count >= maxlogin) {
                startCountdown(countdownTime);
            }
        }, 500);
    }
};

window.onload = function () {;
    if (localStorage.getItem('RememberMe') == 'True') {
        window.location.href = "Home.html";
    }

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
            }
          });
        }, 30000);
      }, 120000);
}

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
        if (Switch["Dev 1"] == "1") {
           var Switch1 = "ON";
        } else if (Switch["Dev 1"] == "0") {
            Switch1 = "OFF";
        }
        if (Switch["Dev 2"] == "1") {
           var Switch2 = "ON";
        } else if (Switch["Dev 2"] == "0") {
            Switch2 = "OFF";
        }
        if (Switch["Dev 3"] == "1") {
           var Switch3 = "ON";
        } else if (Switch["Dev 3"] == "0") {
            Switch3 = "OFF";
        }
        if (Switch["Dev 4"] == "1") {
           var Switch4 = "ON";
        } else if (Switch["Dev 4"] == "0") {
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
