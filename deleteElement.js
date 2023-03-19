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
showOnscreen(obj)
}
function showOnscreen(obj){
    const parentElem=document.getElementById("listOfitems")
    //parentElem.innerHTML=parentElem.innerHTML + `<li> ${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`
    const childElem=document.createElement("li")
    childElem.textContent=obj.name + ' - ' + obj.emaii + ' - ' + obj.phonenumber
    
    const deleteButton=document.createElement('input')
    deleteButton.type="button"
    deleteButton.value="Delete"
    deleteButton.onclick=()=>{
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    

        
    }
    const editButton=document.createElement('input')
    editButton.type="button"
    editButton.value="Edit"
    editButton.onclick=()=>{
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)

        document.getElementById('usernameInputTag').value=obj.name
        document.getElementById('emailInputTag').value=obj.email
        document.getElementById('phonenumberInputTag').value=obj.phonenumber

    

        
    }


    childElem.appendChild(deleteButton)
    childElem.appendChild(editButton)
    parentElem.appendChild(childElem)


}

