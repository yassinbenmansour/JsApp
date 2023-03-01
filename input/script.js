
function somme ()  {
    let x = document.getElementById('nbr1').value;
    let y = document.getElementById('nbr2').value;


    let result = Number(x) + Number(y) ;


    let output = document.getElementById('result');
    output.value=result ;

};



function permuter(){
    let tmp;
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);


    tmp = n1 ;
    n1 = n2 ;
    n2 = tmp ;


    let output1 = document.getElementById('n1');
    output1.value=n1 ;
    let output2 = document.getElementById('n2');
    output2.value=n2 ;



}