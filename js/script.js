const toggleBtn=document.querySelector("#eye");
const input=document.querySelector(".input-container input");

const inputContainer=document.querySelector(".input-container")

const message=document.querySelector(".msg")


let password=true;

toggleBtn.addEventListener('click',function(){
    if(password){
        input.setAttribute("type","text");
        password=false;
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add("fa-eye-slash")
    }else{
        input.setAttribute("type","password");
        password=true;
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add("fa-eye")
    }
})

input.addEventListener('keyup',function(){
    const min=5;
    const max=8;
    if(input.value.length<min){
        inputContainer.classList.remove('good');
        inputContainer.classList.add('error');
        message.innerHTML="Password Must Be Greater than 5 Character";
    }else if(input.value.length>max){
        inputContainer.classList.remove('good');
        inputContainer.classList.add('error');
        message.innerHTML="Password Must Be Lesser than 8 Character";
    }else{
        inputContainer.classList.remove("error");
        inputContainer.classList.add("good");
        message.innerHTML="";
    }
})