function validateGiftInput(amount,email) {
    var ValidAmount, ValidEmail;

    // If amount is Not a Number or less than 0
    if (isNaN(amount) || amount < 0) {
        ValidAmount=false;
        alert("Please enter amount greater than 0");
    } else {
        ValidAmount=true;
    }

    // If email adress is valid - contain @
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        ValidEmail=true;
    } else {
        ValidEmail=false;
        alert("Please enter valid Email address");

    }

    if(ValidAmount==true && ValidEmail==true){
        alert("Add to cart successfully!");
        window.open('../html/newGeneral.html');
        window.close();
    
      }

  }

  function validateDate(date){
    var today = new Date();
    var yearT = today.getFullYear();
    var yearD = date.substring(0,4);
    var monthT = today.getMonth() + 1;
    var monthD = date.substring(5,7);
    var dayT = today.getDate();
    var dayD = date.substring(8,10);

    if(yearD==yearT){
      if(monthD<monthT){
       alert("Please enter a valid date");
      }
      else if(monthD==monthT && dayD<dayT){
       alert("Please enter a valid date");
      }
      else {
        alert("The workshop added to the cart!");
        window.open('../html/newGeneral.html');
        window.close();
      }
    }
    else if(yearD<yearT){
      alert("Please enter a valid date");
    }
    else{
      alert("The workshop added to the cart!");
      window.open('../html/newGeneral.html');
      window.close();
    }
    

  }

// validation and messages of contact me page
function MessBox_contactMe(phone,email,text){
  var ValidPhone, ValidEmail,ValidText;
  var re = /^[0-9]{0,20}$/im;
  // checks if email address is valid 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      ValidEmail=true;
  } else {
      ValidEmail=false;
      alert("Please enter valid Email address");

  }// checks if phone is valid (0 to 20 characters) but not a must as input
  if(re.test(phone)) {
    ValidPhone=true;
  }
  else {
    ValidPhone=false;
    alert("Please enter valid Phone Number");

}
 // text is a must
if (!isNaN(text)) {
  ValidText = false;
  alert("Please write something ..");
} else {
  ValidText=true;
}

  
  if(ValidEmail==true && ValidPhone==true && ValidText==true){
    alert("Thank you! Your message has been received");
    window.open('../html/newGeneral.html');
    window.close();

}
}


// validation and messages of sign up connect 
function MessBox_connectUP(fname,lname,email,pas){

  var ValidEmail;
  var ValidName;
  var ValidPas;

  // checks if email address is valid 
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ) {
      ValidEmail=true;
  } else{
    ValidEmail=false;
    alert("Please enter valid Email address");
}

// checks name is not empty
  if (!isNaN(fname)) {
    ValidName = false;
    alert("Please enter First name ");
  } else {
    ValidName=true;
  }

  // checks name is not empty
  if (!isNaN(lname)) {
    ValidName = false;
    alert("Please enter Last name");
  } else {
    ValidName=true;
  }

  // checks password is not empty
  if (pas.value.length == 0)
  { 
     alert("Please choose a password");  	
     ValidPas= false; 
  }  	else {
      ValidPas= true; 
}

// success
  if(ValidEmail==true && ValidName==true &&  ValidPas==true){
    alert("Connect successfully!");
    window.open('../html/newGeneral.html');
    window.close();
  }

}

// validation and messages of sign in connect
function MessBox_connectIN(email,pas){

  var ValidEmail;
  var ValidPas;

  // checks if email address is valid 

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ) {
      ValidEmail=true;
  } else{
    ValidEmail=false;
    alert("Please enter valid Email address");
}

// checks password is not empty
  if (pas.value.length == 0)
  { 
     alert("Please enter password");  	
     ValidPas= false; 
  }  	else {
      ValidPas= true; 
}

// success
if(ValidEmail==true &&  ValidPas==true){
  alert("Connect successfully!");
  window.open('../html/newGeneral.html');
  window.close();
}

}



// by press sign up - sing in display off
function signUpClick() {
  var x = document.getElementById("signup");
  var y = document.getElementById("signin");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

// by press sign in - sign up display off
function signInClick() {
  var x = document.getElementById("signin");
  var y = document.getElementById("signup");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

