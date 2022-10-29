function convert(){
    let nbrCv = document.getElementById("nbr").value;
    let result;

    result = Number(nbrCv).toString(2);
    

    document.getElementById("result").innerHTML=result;
}