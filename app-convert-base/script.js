function convert(){
    let nbrCv = document.getElementById("nbr").value;
    let result;

    result = Number(nbrCv).toString(2);


    document.getElementById("result").innerHTML="Binary (base 2):" + result;
}






function confirmer(){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
        //..................;LOGIQUE
    }
}