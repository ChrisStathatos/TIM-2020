var barreHaut = document.getElementById("barre-haut");
var barreBas = document.getElementById("barre-bas");

var boutonsNav = document.getElementById("site-navigation").querySelectorAll("li.page_item");
var boutonsNavText = document.getElementById("site-navigation").querySelectorAll("a");
var boutonsNavMobileBarres = document.getElementById("nav-menu-mobile").querySelectorAll(".barre_nav_mobile_group")
var boutonsNavArr = Array.from(boutonsNav);
var boutonNavBurger = document.getElementById("primary-menu-burger");
var boutonNavBurgerBouton = document.getElementById("primary-menu-burger-bouton");

var idBoutonASuivre = 0;
var idBoutonOriginal = parseInt(document.getElementById("nav").getAttribute("data-pageid"));
var estEnHover = false;
var aHoverUneFois = false;
var burgerOuvert = false;

var timeout;

idBoutonASuivre = idBoutonOriginal;

boutonsNavText[idBoutonASuivre].style.color = "#6A07D2";
boutonsNavText[idBoutonASuivre].style.fontWeight = "bold";
boutonsNavText[idBoutonASuivre+4].style.color = "#DFC516";
boutonsNavMobileBarres[idBoutonASuivre].style.display = "initial";

for(var i = 0; i < boutonsNavArr.length; i++){

    boutonsNavArr[i].addEventListener("mouseenter", function (){
        estEnHover = true;
        idBoutonASuivre = boutonsNavArr.indexOf(this);
        DeplacerBarres(idBoutonASuivre, "", false);
        clearTimeout(timeout);
    });

    boutonsNavArr[i].addEventListener("mouseleave", function (){
        estEnHover = false;
        timeout = setTimeout(() => { 
            if(estEnHover == false)
                DeplacerBarres(idBoutonOriginal, "cubic-bezier(.4,0,.45,1)", false);
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

    boutonsNavArr[i].addEventListener("mouseleave", function(){
        barreHaut.style.backgroundColor = "#FF04A1";
        barreBas.style.backgroundColor = "#DFC516";
    });
}

// pour une raison quelconque, il faut ajouter les styles et les events sur les éléments de la nav version burger après un petit délai
setTimeout(() => { 
    boutonNavBurger.style.transform = "translate(100%, 0px)";
    boutonNavBurger.style.transition = "transform 0.5s";

    boutonNavBurgerBouton.addEventListener("mousedown", function(){
        // console.log("AAAAAAAAAAA");
        // console.log(boutonNavBurger.style.transform.toString());
        if(burgerOuvert == false){
            boutonNavBurger.style.transform = "translate(0%, 0px)";
            boutonNavBurgerBouton.style.transform = "translate(-120%, 0) rotate(90deg)";
            burgerOuvert = true;
        }
        else{
            boutonNavBurger.style.transform = "translate(100%, 0px)";
            boutonNavBurgerBouton.style.transform = "translate(-120%, 0) rotate(0)";
            burgerOuvert = false;
        }
    });
}, 100);

window.onresize = (function(){
    DeplacerBarres(idBoutonASuivre, "", false);
    setTimeout(() => { 
        DeplacerBarres(idBoutonASuivre, "", false);
    }, 300);
})

window.addEventListener('load', function () {
    setTimeout(() => { 
        DeplacerBarres(idBoutonASuivre, "", true);
    }, 100);
    setTimeout(() => { 
        DeplacerBarres(idBoutonASuivre, "", true);
    }, 300);
})

async function BarresInitiales(){
    var timer = ms => new Promise(res => setTimeout(res, ms));
    while(aHoverUneFois == false){
        DeplacerBarres(idBoutonOriginal, "", true);
        await timer(100);
    }
}

BarresInitiales();

function DeplacerBarres(idBouton, ease, initial){
    //console.log(this);
    //console.log("OOF");

    if(initial == false){
        barreHaut.style.transition = "margin-left 1.5s, width 1s, background-color 0.1s";
        barreBas.style.transition = "margin-left 2.25s, width 1.5s, background-color 0.1s";
        aHoverUneFois = true;
    }
    else{
        barreHaut.style.transition = "margin-left 0s, width 0s, background-color 0s";
        barreBas.style.transition = "margin-left 0s, width 0s, background-color 0s";
    }

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