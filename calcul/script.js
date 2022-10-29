 //fonction qui évalue le chiffre et renvoie la sortie
 function calculer() 
 { 
     let a = document.getElementById("output").value 
     let b = eval(a) 
     document.getElementById("output").value = b 
 } 
 //fonction qui affiche la valeur
 function afficher(val) 
 { 
     document.getElementById("output").value+=val 
 } 
 //fonction qui efface l'écran 
 function effacer() 
 { 
     document.getElementById("output").value = "" 
} 