//listion for form sibmit

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDTJ_UIIjLDnD_uH1a3Joz5LDkHB50Kit4",
    authDomain: "contact-form-2d34f.firebaseapp.com",
    databaseURL: "https://contact-form-2d34f.firebaseio.com",
    projectId: "contact-form-2d34f",
    storageBucket: "",
    messagingSenderId: "511491094592"
  };
  firebase.initializeApp(config);
//reference message collection

var messageRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);


//submit form
function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //save message
    saveMessage(name,company,email,phone,message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //hide after 3s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000)
    //clear form
    document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}


//save the message to firebase

function saveMessage(name,company,email,phone,message)
{
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}