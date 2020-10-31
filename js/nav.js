var barreHaut = document.getElementById("barre-haut");
var barreBas = document.getElementById("barre-bas");

var boutonsNav = document.getElementById("site-navigation").querySelectorAll("li.page_item");
var boutonsNavText = document.getElementById("site-navigation").querySelectorAll("a");
var boutonsNavArr = Array.from(boutonsNav);

var idBoutonASuivre = 0;
var idBoutonOriginal = parseInt(document.getElementById("nav").getAttribute("data-pageid"));
var estEnHover = false;
idBoutonASuivre = idBoutonOriginal;

boutonsNavText[idBoutonASuivre].style.color = "#6A07D2";
boutonsNavText[idBoutonASuivre].style.fontWeight = "bold";

var timeout;

for(var i = 0; i < boutonsNavArr.length; i++){

    boutonsNavArr[i].addEventListener("mouseenter", function (){
        estEnHover = true;
        idBoutonASuivre = boutonsNavArr.indexOf(this);
        DeplacerBarres(idBoutonASuivre, "");
        clearTimeout(timeout);
    });

    boutonsNavArr[i].addEventListener("mouseleave", function (){
        estEnHover = false;
        timeout = setTimeout(() => { 
            if(estEnHover == false)
                DeplacerBarres(idBoutonOriginal, "cubic-bezier(.4,0,.45,1)");
        }, 500);
    });

    boutonsNavArr[i].addEventListener("mousedown", function(){
        barreHaut.style.backgroundColor = "#FFFFFF";
        barreBas.style.backgroundColor = "#FFFFFF";
    });

    boutonsNavArr[i].addEventListener("mouseup", function(){
        barreHaut.style.backgroundColor = "#FF04A1";
        barreBas.style.backgroundColor = "#DFC516";
    });
}

setTimeout(() => { 
    DeplacerBarres(idBoutonOriginal, "");
}, 250);

window.onresize = (function(){
    DeplacerBarres(idBoutonASuivre, "");
    setTimeout(() => { 
        DeplacerBarres(idBoutonASuivre, "");
    }, 300);
})

function DeplacerBarres(idBouton, ease){
    //console.log(this);
    //console.log("OOF");

    if(ease != ""){
        barreHaut.style.transitionTimingFunction = ease;
        barreBas.style.transitionTimingFunction = ease;
    }
    else{
        barreHaut.style.transitionTimingFunction = "cubic-bezier(.15,.66,.27,1)";
        barreBas.style.transitionTimingFunction = "cubic-bezier(.15,.66,.27,1)";
    }

    barreHaut.style.width = boutonsNav[idBouton].clientWidth + 25;
    barreBas.style.width = boutonsNav[idBouton].clientWidth -20;
    barreHaut.style.marginLeft = boutonsNav[idBouton].offsetLeft - 25;
    barreBas.style.marginLeft = boutonsNav[idBouton].offsetLeft + 20;
}