// Exercice 5:
let btn=document.getElementById("suivant");
let btn2=document.getElementById("precedent");
let img_chef=document.getElementById("chef");
let img1=document.getElementById("image1");
let img2=document.getElementById("image2");
let img3=document.getElementById("image3");
let img4=document.getElementById("image4");
let img=[img1,img2,img3,img4];
let i=0;
btn.onclick=function(){
    i++;
    if(i===4){
        i=0;
    }
    img_chef.src=img[i].src;
     
}
btn2.onclick=function(){
   i--;
   if(i<0){
    i=img.length-1; 
   }
    img_chef.src=img[i].src;

}






//Exercice 6:
let title=document.getElementById('title');
let ele=document.querySelector(".elements");
let mode='none';
title.onclick=function(){
    /*if(mode==='none'){
    ele.style.display='block';
    mode='block';
    
    }
    else if(mode==='block'){
    ele.style.display='none';
    mode='none';

    }*/
   ele.classList.toggle('show');
}







// Exercice 7:
let temps=document.getElementById('temps');
let I=1;
function temp(){
    temps.innerHTML="Temps écoulé: "+I+" s";
    I++;
}
setInterval(temp,1000);





//Exercice 8 : pas de JS




// Exercice 9:
let tache=document.getElementById('tache');
let btn_ajoute=document.getElementById('ajouter');
let list=document.querySelector('.list');
let ul=document.querySelector('#ul')
btn_ajoute.onclick=function(){
    let li=document.createElement('li');
    let supp=document.createElement('button');
    supp.textContent='supprimer';
    li.style.fontSize='20px';
    supp.style.background='red';
    supp.style.border='none';
    supp.style.borderRadius='8px'
    supp.style.marginLeft="10px"
    supp.onclick=function(){
        li.style.display='none';
        supp.style.display='none';
    }
    li.innerHTML=tache.value;
    ul.appendChild(li);
    li.appendChild(supp);
    tache.value='';
}






// Exercice 10:
let ouvrir=document.getElementById('ouvrir');
let dialog=document.getElementById('dialog');
let fermer=document.getElementById('fermer');
ouvrir.onclick= function(){
    dialog.show();

}
fermer.onclick=function(){
    dialog.close();
}








// Exerice 11:
let search=document.getElementById('search');
let data=document.querySelectorAll('p');
search.addEventListener("input",function(){
    let value=this.value.toLowerCase();
    data.forEach(pro =>{
        let txt=pro.textContent.toLowerCase();
        if(txt.includes(value)){
            pro.style.display='block';
        }
        else{
            pro.style.display='none';
        }
        
    });
});






//Exercie 12: pas de js










//Exericce 13:
let progre=document.getElementById('bare');
let btn_pro=document.getElementById('progre');

let int;

btn_pro.onclick=function(){
    let larg=0;
    progre.style.width='0%';
    int=setInterval(function(){
        if(larg>=100){
            clearInterval(int);
             progre.style.width='0%';
              
        }
        else{
            larg++;
            progre.style.width=larg+"%";
        }

    },40);
};








//Exercice 14:
/*let el1=document.getElementById('elem1');
let el2=document.getElementById('elem2');
let el3=document.getElementById('elem3');
let dipose=document.getElementById('depose');
el1.onclick=function(){
   if(el1.parentElement.id==="elements")
    dipose.appendChild(el1);
   else
    document.getElementById('elements').appendChild(el1);
}
el2.onclick=function(){
    if(el2.parentElement.id==="elements")
    dipose.appendChild(el2);
   else
    document.getElementById('elements').appendChild(el2);
}
el3.onclick=function(){
   if(el3.parentElement.id==="elements")
    dipose.appendChild(el3);
   else
    document.getElementById('elements').appendChild(el3);
}



let btns=document.querySelectorAll('#elements button');
btns.forEach(bot =>{
    bot.addEventListener('click',function(){
        if(bot.parentElement.id==='depose'){
        document.getElementById('elements').appendChild(bot);
        }
        else{
            dipose.appendChild(bot);
        }
    
    });

});*/
const elements = document.querySelectorAll("#elements button");
const zoneDepose = document.getElementById("depose");

// Rendre tous les boutons déplaçables et gérer le drag
elements.forEach(btn => {
  btn.draggable = true;
  btn.addEventListener("dragstart", e => e.dataTransfer.setData("id", e.target.id));
});

// Gérer les événements de la zone de dépôt
["dragover", "dragleave", "drop"].forEach(evt =>
  zoneDepose.addEventListener(evt, e => {
    e.preventDefault();
    if (evt === "dragover") zoneDepose.classList.add("over");
    if (evt === "dragleave") zoneDepose.classList.remove("over");
    if (evt === "drop") {
      const id = e.dataTransfer.getData("id");
      zoneDepose.appendChild(document.getElementById(id));
      zoneDepose.classList.remove("over");
    }
  })
);











// Exercice 15:
let ktba = document.getElementById('ktba');
let btn_basc = document.getElementById('btn_basc');
let btndiv = document.getElementById('btndiv');
let theme = '';
if (localStorage.mod != null) {
    theme = localStorage.getItem('mod');
} else {
    theme = 'sombre';
}


if (theme === 'sombre') {
    btn_basc.textContent = 'Activer Théme Clair';
    btndiv.style.background = 'white';
    ktba.style.color = 'black';
} else {
    btn_basc.textContent = 'Activer Théme Sombre';
    btndiv.style.background = 'black';
    ktba.style.color = 'white';
}

btn_basc.onclick = function() {
    if (theme === 'sombre') {
        this.textContent = 'Activer Théme Sombre';
        btndiv.style.background = 'black';
        ktba.style.color = 'white';
        theme = 'clair';
        localStorage.setItem('mod', theme);
    } else {
        this.textContent = 'Activer Théme Clair';
        btndiv.style.background = 'white';
        ktba.style.color = 'black';
        theme = 'sombre';
        localStorage.setItem('mod', theme);
    }
};





   




