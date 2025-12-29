let div=document.getElementById('container');
let btn=document.getElementById('bnt');
btn.onclick=()=>{
if(div.style.background==="red"){
    div.style.background='green';
}
else
    div.style.background='red';
}
