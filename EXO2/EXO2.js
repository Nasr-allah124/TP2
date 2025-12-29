let txt=document.getElementById("text");
let btn=document.getElementById("btn");
mod='masquer';
btn.onclick=function(){
   /* if(mod==='masquer'){
        txt.style.display='none';
        btn.textContent='afficher';
        mod='afficher';
    }
    else if (mod==='afficher'){
        txt.style.display='block';
        mod='masquer';
        btn.textContent='masquer';
    }*/
   if(btn.textContent==="masquer"){
       txt.style.display="none";
       btn.textContent="afficher";
   }
   else{
    txt.style.display="block";
    btn.textContent="masquer";
   }
}
