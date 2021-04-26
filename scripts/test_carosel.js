var images = ['../assets/img/champignon.jpg', '../assets/img/chorizo.jpg', '../assets/img/hawaienne.jpg'];
var carousel = document.getElementById('carousel');
var quantite = document.getElementById('quantite');
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');

// Fonction pour changer le contenu de l'image
function modifieImageApres() {
    if(carousel.src == "file:///C:/Users/jason/Desktop/exo_pizza/assets/img/champignon.jpg"){
        carousel.setAttribute("src", images[1]);
    }
    else if(carousel.src == "file:///C:/Users/jason/Desktop/exo_pizza/assets/img/chorizo.jpg"){
        carousel.setAttribute("src", images[2]);
    }
    else{
        carousel.setAttribute("src", images[0]);
    }
  }
  function modifieImageAvant() {
 
    if(carousel.src == "file:///C:/Users/jason/Desktop/exo_pizza/assets/img/champignon.jpg"){
        carousel.setAttribute("src", images[2]);
    }
    else if(carousel.src == "file:///C:/Users/jason/Desktop/exo_pizza/assets/img/chorizo.jpg"){
        carousel.setAttribute("src", images[0]);
    }
    else{
        carousel.setAttribute("src", images[1]);
    }
  }

  function ajouterQuantite() {
      quantite.innerText = parseInt(quantite.innerText,10) +1;
  }
  function enleverQuantite() {
      if(parseInt(quantite.innerText,10) !=1){
        quantite.innerText = parseInt(quantite.innerText,10) -1;
      }
    }
    function commanderPizza() {
        console.log(quantite.innerText + " pizza " + carousel.src.substring(carousel.src.lastIndexOf("/")+1,carousel.src.length - 4)+ " ont ete commandees par " + nom.value + " " + prenom.value);
    }


document.getElementById('commander').addEventListener("click", commanderPizza);
document.getElementById("enlever").addEventListener("click",enleverQuantite);
document.getElementById("ajouter").addEventListener("click", ajouterQuantite);
document.getElementById("next").addEventListener("click", modifieImageApres);
document.getElementById("previous").addEventListener("click", modifieImageAvant);