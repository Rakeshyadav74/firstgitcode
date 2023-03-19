function saveData(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
    const phonenumber=event.target.phonenumber.value;
const obj={
    name,
    email,
    phonenumber

}
localStorage.setItem(obj.email, JSON.stringify(obj))


}

