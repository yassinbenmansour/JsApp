
ValidationForm = () => {
    let testname = document.forms["form"]["nom"].value;
    if (testname == ""){
        alert("error");
        return false;
    }
}


function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}