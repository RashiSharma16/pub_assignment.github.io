document.getElementsByClassName("btn").onclick=function(){
  pageData.push({
 'clickName': this.innerHTML
});
}

function selectedImage(){
 if(document.getElementsByName('image').selected=true){
  var x=this.src;
  sessionStorage.setItem('img_src',x);
  console.log(x);
 }
}


function retrieveImg(){

  var img=document.createElement("img");
  img.src=sessionStorage.getItem('img_src');
  document.getElementById('img_div').appendChild(img);
  return img;
}


function validateForm() {
  var nameVal,emailVal,mobileVal,dobVal;
  var bt = document.getElementById('submit-btn');

  // Get the value of the input field with id="numb"
  nameVal = document.getElementById("name").value;
  emailVal = document.getElementById("email").value;
  mobileVal = document.getElementById("mobile").value;
  dobVal = document.getElementById("dob").value;

  // If nameVal is a string of alphabets more than 2 letters long and less than 30 letters long
  if (nameVal!=="" && nameVal!=="undefined") {
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (regex.test(nameVal.value)) {
       bt.disabled=false;
    }
    else {
         window.alert("Please enter only letters"); 
        nameVal.focus(); 
        bt.disabled=true;
    }
  }  

//if email follows email pattern
  if (emailVal!=="" && emailVal!=="undefined") {
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (regex.test(emailVal.value)) {
       bt.disabled=false;
    }
    else {
        window.alert("Please enter valid email address"); 
        emailVal.focus(); 
        bt.disabled=true;
    }
  }  

//if mobile number contains 10 digits and does not start with 0
  if (mobileVal!=="" && mobileVal!=="undefined") {
    var regex = /^([1-9]{1}[0-9]{9}$/;
    if (regex.test(emailVal.value)) {
        bt.disabled=false;
    }
    else {
         window.alert("Please enter valid mobile number"); 
        mobileVal.focus(); 
        bt.disabled=true;
    }
  }  

//if date of birth 
  if (dobVal!=="" && dobVal!=="undefined") {
    var regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (regex.test(dob.value)) {
        bt.disabled=false;
    }
    else {
         window.alert("Please enter valid date of birth"); 
        dobVal.focus(); 
        bt.disabled=true;
    }
  }  

  }

  
