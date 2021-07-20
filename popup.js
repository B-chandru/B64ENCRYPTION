//  THIS IS FOR GETTING THE INPUT AND ENCRYPTION USING B64
document.addEventListener("DOMContentLoaded",  ()=>{
    var input=document.getElementById("text");
    var bottom = document.getElementById("bottom");
    var copy =document.querySelector("p");
   var encrypt=document.querySelector("#p");
    var span=document.getElementById("span");
    document.getElementById("btn").addEventListener("click",()=>{
    
        if (input.value === "") {
            alert("Enter any text");
        }else{
            p.style.display="block";
            copy.style.display="block";
            bottom.style.display ="block";
             var b64=btoa(input.value);
            var unicode=atob(b64) ;
            encrypt.value=`${b64}`;
           span.innerHTML=`${unicode}`
        }      
    });

// THIS IS FOR COPY FUNCTION
    copy.addEventListener("click",()=>{
    encrypt.select();
    document.execCommand("Copy");
    copy.innerText ="copied!";
    input.value = "";

    })

})

   


  