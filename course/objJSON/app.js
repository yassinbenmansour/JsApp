function AfficherEnfants()
{
    var person = [
        {"personnne":{"id":"1100", "name":"yassine",
            "Enfants": [ { "prenom": "aya", "age": "12" },
                         { "prenom": "ali", "age": "2" },
                         { "prenom": "Amine", "age": "15"},
         ]}
        },
        {"personnne":{"id":"1100", "name":"hamid",
            "Enfants": [ { "prenom": "ahmed", "age": "37" },
                         { "prenom": "safae", "age": "20" },
                         { "prenom": "narjiss", "age": "25"},
         ]}
        },
    ];


    let name = document.getElementById("p").value;
    let msg = "Lister les enfants :" + "</br>";

    let existe;

    for(var i = 0;i<person.length;i++){
         if (person[i].personnne.name == name){

             for(var j = 0;j<person[i].personnne.Enfants.length;j++)
                msg += "nom : " + person[i].personnne.Enfants[j].prenom + " , " + "age : " + person[i].personnne.Enfants[j].age + "<br>";
                existe = 1;
            }
            document.getElementById("output").innerHTML=msg;
        
    }

        if(existe == 1){
            document.getElementById("output1").innerHTML="Nom existe dans la base de donnees";

        } else {
            document.getElementById("output1").innerHTML="Nom n'existe pas dans la base de donnees";
        }

}