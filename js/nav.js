var barreHaut = document.getElementById("barre-haut");
var barreBas = document.getElementById("barre-bas");

var boutonsNav = document.querySelectorAll("li.page_item");
var boutonsNavArr = Array.from(boutonsNav);

var idBoutonASuivre = 0;

setTimeout(() => { 
    DeplacerBarres();
}, 250);


for(var i = 0; i < boutonsNavArr.length; i++){
    boutonsNavArr[i].addEventListener("mouseenter", function (){
        idBoutonASuivre = boutonsNavArr.indexOf(this);
        DeplacerBarres();
    });

    boutonsNavArr[i].addEventListener("mousedown", function(){
        barreHaut.style.backgroundColor = "#FFFFFF";
        barreBas.style.backgroundColor = "#FFFFFF";
    });

    boutonsNavArr[i].addEventListener("mouseup", function(){
        barreHaut.style.backgroundColor = "#E527ED";
        barreBas.style.backgroundColor = "#DFC516";
    });
}

window.onresize = (function(){
    DeplacerBarres();
    setTimeout(() => { 
        DeplacerBarres();
    }, 300);
})

function DeplacerBarres(){
    //console.log(this);
    //console.log("OOF");
    barreHaut.style.width = boutonsNav[idBoutonASuivre].clientWidth + 25;
    barreBas.style.width = boutonsNav[idBoutonASuivre].clientWidth -20;
    barreHaut.style.marginLeft = boutonsNav[idBoutonASuivre].offsetLeft - 25;
    barreBas.style.marginLeft = boutonsNav[idBoutonASuivre].offsetLeft + 20;
}