const name =document.querySelector("#name")
const password = document.querySelector("#password")
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages=[] 
    ///this is an array that will store error messeges in it then show that in error div...
    if(name.value===''||name.value==null){
        messages.push('Name is required')
    }
    if(password.value.length<=8){
        messages.push('password must be longer than 8 character')
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(' aaaaa ')
        ///join is a method of joining two or more array element in a single string though , - _ # $ anything that you want to join them

    }
    
});
