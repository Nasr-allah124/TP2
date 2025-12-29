
let inst=document.getElementById("inst");
let result=document.getElementById("resul");
let botons=document.querySelectorAll("button");
botons.forEach(btn => {
    btn.addEventListener("click" ,()=>{
        const val=btn.textContent;
        if(val==="AC"){
            result.innerHTML="0";
            inst.innerHTML="0";
        }
         else if(val==="C"){
            inst.textContent=inst.textContent.slice(0,-1)||"0" ;
        }
        else if(val==="="){
            try{
                inst.textContent=eval(inst.textContent);
            }catch{
                result.textContent="Err";
            }
        }
        else{
            if(inst.textContent==="0"){
                inst.textContent=val;
            }
            else{
                inst.textContent+=val;
            }
        }
        result.textContent=eval(inst.textContent);

    });

});





