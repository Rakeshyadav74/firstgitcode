function dataSubmit(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobileNumber=document.getElementById("mobile").value;
     
    //storing data
    //var userName=localStorage.setItem("name",name);
    //var userEmail=localStorage.setItem("email",email);
    //var userMobile=localStorage.setItem("mobile",mobile);
    var obj={
        name: name,
        email:email,
        mobileNumber: mobileNumber


    }
    var serializedData=localStorage.setItem("userdetails",JSON.stringify(obj));
}